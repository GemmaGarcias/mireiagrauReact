import axios from 'axios'
const {REACT_APP_API_SERVER} = process.env

export const getGallery = () => {
	console.log(REACT_APP_API_SERVER)
	const url = `http://localhost:3001/gallery`
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

export const addImagesToCollectionById = (id, url, name) => {
	console.log(url, name)
	const urlApi = `http://localhost:3001/gallery/newimages/${id}`
	return axios.put(urlApi, {url, name})	
}

//https://webfotograph-project.herokuapp.com
