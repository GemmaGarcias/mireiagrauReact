import React from 'react'
import {Col, Grid, Row} from 'react-bootstrap'
import './ViewImages.css'

const GalleryImages = (props) => {
	return(
		<div>
			<h1>{props.title}</h1>
			<Grid>
			<Row>
				{props.images.map((img ,i) => 
					<Col md={3}>
						<img className='galleryImg' src={img.url} alt="" />
						<p key={img.name}>{img.name}</p>
					</Col>)}
				</Row>
			</Grid>
		</div>
	)
}

export default GalleryImages