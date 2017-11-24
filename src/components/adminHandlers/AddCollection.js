import React, { Component } from 'react'
import{Form, Button} from 'react-bootstrap'
import axios from 'axios'
import AddInput from './AddInput'
import {Redirect} from 'react-router-dom'
import './AddCollection.css'

class AddCollection extends Component {
  constructor(props){
    super(props)
    this.state = {
    name: '',
    detail: '',
    gallery:'',
    inputImage:false,
    id:'',
    redirect:false
  }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addImages = this.addImages.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  addImages(imgState){
    console.log(imgState)
    this.setState({img:this.state.img.concat([imgState])})
  }

  handleSubmit(event) {
    event.preventDefault()
    axios.post(`http://localhost:3001/new`, {
     name: this.state.name,
     detail:this.state.detail,
     gallery: this.state.gallery
   })
    .then(response=>{
        this.setState({
        id: response.data.result._id,
        inputImage: true,
        redirect: true
      })
    })
  }
	
	render() {
		const {redirect, id}= this.state
	return(
	  <div>
			<h2 className='titleAdd'>Add a new collection:</h2>
        <div className='formAdd'>
        { this.state.inputImage
      		? <div></div>
          : <Form>
      					<p className='pform'><strong>Collection name:</strong></p>
              	<input 
                className='inputAdd' 
              	name='name' 
              	placeholder="Add name..."
                value={this.state.name}
              	onChange={this.handleChange}
              	autoFocus/>
              	<p className='pform'><strong>Additional information:</strong></p>
              	<input  
                className='inputAdd'
              	name='detail' 
              	placeholder="Add detail info..."
                value={this.state.detail}
              	onChange={this.handleChange} 
                />
                <p className='pform'><strong>Select gallery:</strong></p>
                <select className='inputAdd' value={this.state.gallery} name='gallery' onChange={this.handleChange}>
                  <option value="">Select one</option>
                  <option value="fashion" name='gallery'>fashion</option>
                  <option value="commercial" name='gallery'>commercial</option>
                </select>
                <div className='end'> 
                  <Button className='btnEnd' 
                  bsStyle="success" 
                  type="submit" 
                  onClick={this.handleSubmit}>Create Collection</Button>
                </div>
            </Form>
          }
          {
            this.state.inputImage
            ? <div>
                <AddInput {...this.props} addImages={this.addImages} createdCollection={this.state}/>
              </div>
            : <div className='hide'></div>
          }
          { redirect && <Redirect to={`/admin/newcollection/${id}/images`} />}
        </div>
    </div>
    )
  }
}

export default AddCollection

       
