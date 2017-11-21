import axios from 'axios'

export const getGallery = () => {
	const url = 'http://webfotograph-project.herokuapp.com/gallery'
	return axios.get(url)
		.then( response => response.data )
}

export const getSessionById = (id) => {
	const url = `http://webfotograph-project.herokuapp.com/gallery/${id}`
	return axios.get(url)
		.then( response => response.data )
}

//https://webfotograph-project.herokuapp.com
