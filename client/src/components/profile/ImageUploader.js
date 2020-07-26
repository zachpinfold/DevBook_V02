import React, { Component } from "react";
import ImageUploader from "react-images-upload";
import axios from "axios";

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: []
    };
    this.onDrop = this.onDrop.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
  }

  onDrop(picture) {
    this.setState({
      pictures: this.state.pictures.concat(picture)
    });
  }

  uploadImage() {
    let uploadPromises = this.state.pictures.map(image => {
      let data = new FormData();
      data.append("image", image, image.name);
      return axios.post("/api/profile/profile_image", data, {
        headers: {
          "x-auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWYwZDU5NGY3NGM4ZDY0NjFlNzVkOTg1In0sImlhdCI6MTU5NTc3NDE0OSwiZXhwIjoxNTk2MTM0MTQ5fQ.gnvnGqkmADaITaSAFeVpxQrAGu4V9luJe3RK-tfActc"
        }
      });
    });
    axios
      .all(uploadPromises)
      .then(results => {})
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    return (
      <div>
        <ImageUploader
          withIcon={true}
          buttonText='Choose images'
          onChange={this.onDrop}
          imgExtension={[".jpg", ".gif", ".png", ".gif"]}
          maxFileSize={5242880}
        />
        <button className='btn' onClick={this.uploadImage}></button>
      </div>
    );
  }
}

export default ImageUpload;
