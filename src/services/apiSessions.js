import axios from 'axios'

export const getGallery = () => {
	const url = 'http://localhost:3001/gallery'
	return axios.get(url)
		.then( response => {return response.data} )
}

export const getSessionById = (id) => {
	const url = `http://localhost:3001/gallery/${id}`
	return axios.get(url)
		.then( response => {return response.data} )
}

//https://webfotograph-project.herokuapp.com