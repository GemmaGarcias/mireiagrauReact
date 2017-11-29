import axios from 'axios'
const {REACT_APP_API_SERVER} = process.env

export const getGallery = () => {
	const url = `${REACT_APP_API_SERVER}/gallery`
	return axios.get(url)
		.then( response => response.data )
}

export const getSessionById = (id) => {
	const url = `${REACT_APP_API_SERVER}/gallery/${id}`
	return axios.get(url)
		.then( response => response.data )
}

export const removeSessionById = (id) => {
	const url = `${REACT_APP_API_SERVER}/session/${id}`
	return axios.delete(url)	
}

export const addImagesToCollectionById = (id, url, name) => {
	console.log(url, name)
	const urlApi = `${REACT_APP_API_SERVER}/gallery/newimages/${id}`
	return axios.put(urlApi, {url, name})	
}

export const addMessage = (name, email, message) =>{
	const url= `${REACT_APP_API_SERVER}/newmessage`
	return axios.post(url, {name, email, message})
} 

export const getMessages = () => {
	const url = `${REACT_APP_API_SERVER}/getmessages`
	return axios.get(url)
		.then( response => response.data )
}
//https://webfotograph-project.herokuapp.com
