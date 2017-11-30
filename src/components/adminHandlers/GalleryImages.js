import React from 'react'
import {Col, Grid, Row} from 'react-bootstrap'
import './GalleryImages.css'

const GalleryImages = (props) => {
	return(
		<div>
			<h1 className='titleGallery'>{props.title}</h1>
			{props.images.map((img ,i) => 
				<Col md={3}>
					<img className='galleryImg' src={img.url} alt="" />
					<p key={img.name} className='paragraph' >{img.name}</p>
				</Col>)}
		</div>
	)
}

export default GalleryImages