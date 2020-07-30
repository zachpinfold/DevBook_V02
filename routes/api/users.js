const express = require("express");
// const request = require("request")
const gravatar = require("gravatar");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("config");
const { check, validationResult } = require("express-validator");
const normalize = require("normalize-url");
const { v4: uuidv4 } = require("uuid");
const AWS = require("aws-sdk");
const multer = require("multer");
const awsConfig = require("../../config/AWS");
const auth = require("../../middleware/auth");

const User = require("../../models/User");

// @route   POST api/users
// @desc  Register user
// @access  Public
router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password that is a minimum of 6 characters"
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "user already exists" }] });
      }

      const avatar = gravatar.url(email, {
        s: "200",
        r: "pg",
        d: "mp"
      });

      user = new User({
        name,
        email,
        avatar,
        password
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.get("jwtToken"),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

// @route    POST api/profile/profile_image
// @desc     Create or update user profile
// @access   Private
// router.post("/profile_image", async (req, res) => {
//   aws.config.update(awsConfig);

const storage = multer.memoryStorage({
  destination: function (req, file, callback) {
    callback(null, "");
  }
});

const upload = multer({ storage }).single("image");

const s3 = new AWS.S3({
  accessKeyId: awsConfig.awsConfig.accessKeyId,
  secretAccessKey: awsConfig.awsConfig.secretAcessKey
});

router.post("/profile_image", auth, upload, (req, res) => {
  console.log("ID====" + req.user);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  let myFile = req.file.originalname.split(".");
  const fileType = myFile[myFile.length - 1];

  const params = {
    Bucket: "devbookimages",
    Key: `${uuidv4()}.${fileType}`,
    Body: req.file.buffer
  };

  s3.upload(params, async (error, data) => {
    const { key } = data;
    const fullKeyUrl = `https://devbookimages.s3.eu-west-2.amazonaws.com/${key}`;
    console.log(key);
    const profileFields = {
      user: req.user.id,
      profilePic: fullKeyUrl
    };
    // console.log(params);

    try {
      let profile = await User.findOneAndUpdate(
        { _id: req.user.id },
        { $set: profileFields }
        // { new: true, upsert: true }
      );
      res.status(200).send(profile);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  });
});

module.exports = router;
