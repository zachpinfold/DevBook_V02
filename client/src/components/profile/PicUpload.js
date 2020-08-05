import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import axios from "axios";
import { loadUser } from "../../actions/auth";
import black_pic from "../../Assets/green_blank_pic.jpg";
import { getProfileById } from "../../actions/profile";

class PicUpload extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      src: null,
      crop: {
        unit: "%",
        width: 40,
        aspect: 1 / 1
      },
      croppedImageUrl: null,
      croppedImage: null
    };
  }

  handleFile = e => {
    // console.log(this.props.auth);
    const fileReader = new FileReader();
    fileReader.onloadend = () => this.setState({ src: fileReader.result });
    fileReader.readAsDataURL(e.target.files[0]);
  };

  handleSubmit = e => {
    e.preventDefault();
    const user = this.props.currentUser;
    const formData = new FormData();

    // formData.append("user[id]", user.id);
    formData.append("image", this.state.croppedImage, "jpg");

    this.addPhotoToUser(user, formData);
  };

  // ReactCrop component actions and their functions START
  onImageLoaded = image => {
    this.imageRef = image;
    console.log(this.state.src);
  };

  onCropChange = crop => {
    this.setState({ crop });
  };

  onCropComplete = crop => {
    if (this.imageRef && crop.width && crop.height) {
      const croppedImageUrl = this.getCroppedImg(this.imageRef, crop);
      this.setState({ croppedImageUrl });
    }
  };
  // ReactCrop component actions and their functions END

  getCroppedImg(image, crop) {
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    const reader = new FileReader();
    canvas.toBlob(blob => {
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        this.dataURLtoFile(reader.result, "cropped.jpg");
      };
    });
  }

  dataURLtoFile(dataurl, filename) {
    let arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    let croppedImage = new File([u8arr], filename, { type: mime });
    this.setState({ croppedImage: croppedImage });
  }

  addPhotoToUser = (user, data) => {
    console.log("data-send");
    const URL1 = "/api/users/profile_image";
    const URL2 = "/api/profile/profile_image";
    const promise1 = axios.post(URL1, data, {});
    const promise2 = axios.post(URL2, data, {});
    Promise.all([promise1, promise2])
      .then(() => {
        this.setState({ loading: false });
        this.props.loadUser();
        this.props.getProfileById(this.props.auth.user._id);
      })
      .then(() => {
        this.setState({ src: null });

        this.setState({ loading: true });
        // window.location.reload();
      })
      .catch(e => {
        console.log(e);
      });
  };

  toggle = () => {
    // this.setState({ src: null });
    this.setState({ src: null });

    this.setState({ loading: false });
  };

  render() {
    const { crop, profile_pic, src } = this.state;

    return (
      <Fragment>
        {/* {this.state.loading && <Redirect to='profile-me' />} */}

        <form onSubmit={this.handleSubmit}>
          <label htmlFor='profile_pic'></label>
          <div className='profile-image-div'>
            <img
              className='profile-image'
              src={this.props.profilePic ? this.props.profilePic : black_pic}
              alt='profile pic of me'
            />
            {!this.props.auth.loading &&
              this.props.auth.user &&
              this.props.profile.profile.user._id ===
                this.props.auth.user._id && (
                <div className='profile-pic-input'>
                  <input
                    type='file'
                    name='uploadfile'
                    id='img'
                    style={{ display: "none" }}
                    value={profile_pic}
                    onInput={this.handleFile}

                    // onInput={console.log("input")}
                  />
                  <label className='custom-file-input' htmlFor='img'></label>
                </div>
              )}
          </div>
          {/* {this.state.loaded && ( */}
          {/* )} */}
          {src && (
            <div className='cropDiv'>
              <div className='crop-image-area'>
                <i
                  className='fas fa-times crop-cancel-btn'
                  type='button'
                  onClick={this.toggle}
                  // className='fas fa-times crop-cancel-btn'
                ></i>
                <div className='crop-centre'>
                  <h2 style={{ marginBottom: "20px" }}>Crop image</h2>
                  <ReactCrop
                    src={src}
                    crop={crop}
                    onImageLoaded={this.onImageLoaded}
                    onComplete={this.onCropComplete}
                    onChange={this.onCropChange}
                  />
                  <button className='btn-CV btn-save-image'>Save Image</button>
                </div>
              </div>
            </div>
          )}
        </form>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { loadUser, getProfileById })(
  PicUpload
);
