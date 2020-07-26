import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import ImageUploader from "./ImageUploader";

const Profile = props => {
  //   const [image, setImage] = useState({ preview: "", raw: "" });

  //   const handleChange = e => {
  //     if (e.target.files.length) {
  //       setImage({
  //         preview: URL.createObjectURL(e.target.files[0]),
  //         raw: e.target.files[0]
  //       });
  //     }
  //   };

  //   const handleUpload = async e => {
  //     e.preventDefault();
  //     const formData = new FormData();
  //     formData.append("image", image.raw);

  //     await fetch("/api/profile/profile_image", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "multipart/form-data"
  //       },
  //       body: formData
  //     }).catch(e => {
  //       console.log(e);
  //     });
  //   };

  return (
    <Fragment>
      <section class='main-section-4'>
        <div class='profile-div'>
          <div class='left-profile-div'>
            <ImageUploader />
            {/* <div>
              <label htmlFor='upload-button'>
                {image.preview ? (
                  <img
                    src={image.preview}
                    alt='dummy'
                    width='300'
                    height='300'
                  />
                ) : (
                  <>
                    <span className='fa-stack fa-2x mt-3 mb-2'>
                      <i className='fas fa-circle fa-stack-2x' />
                      <i className='fas fa-store fa-stack-1x fa-inverse' />
                    </span>
                    <h5 className='text-center'>Upload your photo</h5>
                  </>
                )}
              </label>
              <input
                type='file'
                id='upload-button'
                style={{ display: "none" }}
                onChange={handleChange}
              />
              <br />
              <button onClick={handleUpload}>Upload</button>
              <img
                class='profile-image'
                src='/assets/Me_2020.jpg'
                alt='Picture of me'
              />
            </div> */}
            <div class='profile-left-info'>
              <p class='profile-name'>Zach Pinfold</p>
              <p class='profile-location'>London</p>
              <a href='' class='btn-website'>
                Website
              </a>
              <a href='' class='btn-CV'>
                CV
              </a>
            </div>
          </div>
          <div class='right-profile-div'>
            <div class='profile-right-info'>
              <h2 class='heading profile-H'>Front End Developer</h2>
              <p class='profile-copy'>
                React, React Redux, React Native, MongoDB, PSQL, HTML, CSS,
                WordPress, PHP
              </p>
              <h3 class='profile-sub'>About me</h3>
              <p class='profile-copy'>
                quidebi tatenienim dolupta quam eribus denimagni volorrumque
                invelesedia quam quodipsumqui repudi optur maio.
              </p>
              <h3 class='profile-sub'>Work Experience</h3>
              <h4 class='experience-company'>Microsoft - Senior Developer</h4>
              <p class='experience-time'>Jan 2012 - Jan 2018</p>
              <p class='profile-copy'>
                quidebi tatenienim dolupta quam eribus denimagni volorrumque
                invelesedia quam quodipsumqui repudi optur maio. Aceptur
                magnatur, simolorent quuntior re remporerum nonsed que arum in
                et ma dolore, officit aborerf erspedio omnihillabo. Et et mo
              </p>
              <p class='profile-copy'></p>
              <h3 class='profile-sub'>Education</h3>
              <a
                class='btn-primary btn-create btn-no-margin'
                href='profile.html'
              >
                Add Education
              </a>
              <h3 class='profile-sub'>GitHub Repos</h3>
              <h4 class='experience-company repo-title'>Repo1</h4>
              <p class='experience-time'>Last updated - Jan 2018</p>
              <p class='profile-copy repo-copy'>
                quidebi tatenienim dolupta quam eribus denimagni volorrumque
                invelesedia quam quodipsumqui repudi optur maio.
              </p>
              <a href='' class='btn-CV repo'>
                View Repo
              </a>
              <h4 class='experience-company repo-title'>Repo2</h4>
              <p class='experience-time'>Last updated - Jan 2018</p>
              <p class='profile-copy repo-copy'>
                quidebi tatenienim dolupta quam eribus denimagni volorrumque
                invelesedia quam quodipsumqui repudi optur maio.
              </p>
              <a href='' class='btn-CV repo'>
                View Repo
              </a>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

Profile.propTypes = {};

export default Profile;
