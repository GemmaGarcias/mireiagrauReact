import { getGallery } from '../../services/apiSessions'
import React, { Component } from 'react'
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap'
import{Form} from 'react-bootstrap'
import GalleryImages from './GalleryImages'


class ViewImages extends Component {
  constructor(props){
    super(props)
    this.state = {
      sessionsView: [],
      gallery:''
    }
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount () {
    getGallery()
      .then(data => {
        this.setState({
          sessionsView: data
        })
     })
  }
  
  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event){
  	event.preventDefault()
  }

  render() {
  	

  	const gallerySelected = this.state.gallery.length && this.state.gallery
		const fashionCollections = this.state.sessionsView.filter(session => session.gallery === gallerySelected)
    const imageSession = fashionCollections.map((session, i) => ({
    	name: session.name,
      images: session.img
    }))
    
    
    return (
      <div className="ViewImages">
        <h4>Collection Views</h4>
        <Form onSubmit={this.handleSubmit}>
        <select value={this.state.gallery} name='gallery' onChange={this.handleChange}>
            <option value="">Select one</option>
            <option value="fashion" name='gallery'>fashion</option>
            <option value="commercial" name='gallery'>commercial</option>
          </select>
        </Form>
        <h5>{this.state.gallery}</h5>
        <Grid>
          <Row>
         	<ul>
          {
          	imageSession.map(
          		(gallery, i) =>
          			<GalleryImages title={gallery.name} images={gallery.images} />
          	)
          }
          </ul>
		      
          </Row>
		    </Grid>
      </div>
    );
  }
}

export default ViewImages
