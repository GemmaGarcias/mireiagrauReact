import React, { Component } from 'react'
import { getGallery, removeSessionById } from '../../services/apiSessions'
import PanelDelete from './PanelDelete'

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
          sessionsView: data
        })
     })
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  deleteSession(id) {
    removeSessionById(id)
      .then()

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
  console.log(fashionCollections)

	return(
		<div className='DeleteCollection'>
			<div className='container'>
				<button value={selectComercial||selectFashion} 
				name='gallery' 
				onClick={this.handleChange}>
        Change to {selectComercial||selectFashion}
        </button>
			</div>
      {imageSession.map((gallery,i)=>(
        <PanelDelete 
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