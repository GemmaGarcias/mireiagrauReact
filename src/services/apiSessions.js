import axios from 'axios'

export const getGallery = () => {
	const url = 'http://localhost:3001/gallery'
	return axios.get(url)
		.then( response => response.data )
}

export const getSessionById = (id) => {
	const url = `http://localhost:3001/gallery/${id}`
	return axios.get(url)
		.then( response => response.data )
}

export const removeSessionById = (id) => {
	const url = `http://localhost:3001/session/${id}`
	return axios.delete(url)
		
}

//https://webfotograph-project.herokuapp.com
