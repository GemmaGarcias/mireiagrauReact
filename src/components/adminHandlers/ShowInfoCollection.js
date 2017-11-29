import React from 'react'
import { Button, Glyphicon } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './ShowInfoCollection.css'

const ShowInfoCollection = (props) => {
	return(
		<div>
			<h3>Creating new:</h3>
			<Button className='finsishBtn'><Glyphicon glyph="share-alt" />
				<Link className='link' to='/admin/newcollection'>finish work</Link>
			</Button>	
			<p><strong>Name:</strong> </p>
			<p className='infoCreated'>{props.info.name}</p>
			<p><strong>Detail info: </strong></p>
			<p className='infoCreated'>{props.info.detail}</p>
			<p><strong>Included in the gallery: </strong></p>
			<p className='infoCreated'>{props.info.gallery}</p>
		</div>
	)
}

export default ShowInfoCollection