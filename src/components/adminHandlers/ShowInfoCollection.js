import React from 'react'

const ShowInfoCollection = (props) => {
	return(
		<div className='container'>
		<h3>Creating new:</h3>
			<p><strong>Name:</strong> </p>
			<p>{props.info.name}</p>
			<p><strong>Detail info: </strong></p>
			<p>{props.info.detail}</p>
			<p><strong>Included in the gallery: </strong></p>
			<p>{props.info.gallery}</p>
		</div>
	)
}

export default ShowInfoCollection