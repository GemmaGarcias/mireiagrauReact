import {addImagesToCollectionById} from '../../services/apiSessions'
import axios from 'axios'
import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import './AddCollection.css'
import ShowInfoCollection from './ShowInfoCollection'
import Upload from './cloudinary/Upload'

class AddInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imageLink: []
    }
  }

  uploadFile = async file => {
    let data = new FormData();
    data.append('file', file);
    const fileName = file.name
    const {id} = this.props.match.params
    const { data: { imageLink } } = await axios.post(`http://localhost:3001/upload`,data)      
    const newArray = this.state.imageLink.concat(imageLink)
        console.log(newArray, 'array')
    this.setState({imageLink: newArray})
    await axios.put(`http://localhost:3001/gallery/newimages/${id}`, {
      imageLink:imageLink,
      name: fileName
    })
  }


  render() {
    return (
      <div className="AddInput">
        <ShowInfoCollection info={this.props.createdCollection}/>
        <Upload 
          uploadFile={ this.uploadFile }
          imagePreviewUrl={ this.state.imageLink }
        />
      </div>
    );
  }
}

export default AddInput;
