import React, { Component } from 'react'
import { getGallery, removeSessionById } from '../../services/apiSessions'
import PanelDelete from './PanelDelete'
import {Button} from 'react-bootstrap'
import './DeleteCollection.css'

class DeleteCollection extends Component{
	constructor(props){
    super(props)
    this.state = {
      sessionsView: [],
      gallery:'fashion'
    }
  this.handleChange = this.handleChange.bind(this);
  this.deleteSession = this.deleteSession.bind(this);
  }

  componentDidMount () {
    getGallery()
      .then(data => {
        this.setState({
        sessionsView: data})
    })
  }

  componentWillUpdate(){
    getGallery()
    .then(data => {
      this.setState({
      sessionsView: data})
    })
    console.log('hoa2')
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }


  deleteSession(id) {
    removeSessionById(id)
      .then(
        getGallery()
          .then(data => {
          this.setState({
          sessionsView: data
        })
     }))
  }

  render() {
  let	selectComercial
	let selectFashion
  if (this.state.gallery==='fashion'){ selectComercial = 'commercial'}
  if (this.state.gallery==='commercial'){selectFashion ='fashion'}
	
	const gallerySelected = this.state.gallery
	const fashionCollections = this.state.sessionsView.filter(session => 
    session.gallery === gallerySelected)
  const imageSession = fashionCollections.map((session, i) => ({
    	name: session.name,
      date: session.date,
      id: session._id,
      images: session.img
    }))
  console.log(this.state)

	return(
		<div className='DeleteCollection'>
      <h2 className='titleDelete'>Remove collection</h2>
			<div className='container'>
				<Button className='buttonChange' bsStyle="warning" 
        value={selectComercial||selectFashion} 
				name='gallery' 
				onClick={this.handleChange}>
        GO TO {selectComercial||selectFashion} 
        <span className="glyphicon glyphicon-menu-right"></span>
        </Button>
        <h3>{this.state.gallery.toUpperCase()} GALLERY:</h3>
			</div>
      {imageSession.map((gallery,i)=>(
        <PanelDelete 
        key={i}
        title= {gallery.name} 
        images={gallery.images} 
        createdAt={gallery.date}
        id={gallery.id}
        deleteSession ={this.deleteSession}
        />
      ))}
		</div>
		)
	}
}

export default DeleteCollection