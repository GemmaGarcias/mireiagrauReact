import React, { Component } from 'react'
import{Form, Button} from 'react-bootstrap'
import axios from 'axios'
import AddInput from './AddInput'
import './AddCollection.css'

class AddCollection extends Component {
  constructor(props){
    super(props)
    this.state = {
    name: '',
    detail: '',
    img:[],
    gallery:''
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
    axios.post('https://webfotograph-project.herokuapp.com/new', {
     name: this.state.name,
     detail:this.state.detail,
     img: this.state.img,
     gallery: this.state.gallery
   })
    this.setState({
    name: '',
    detail: '',
    img:[{}],
    gallery:''
    })
  }
	
	render() {
		console.log(this.state, 'padre')
	return(
	  <div>
			<h2>Add a new collection:</h2>
			<Form className='formAdd'>
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
          <p className='pform'><strong>Import your images</strong></p>
          <AddInput addImages={this.addImages}/>
          <div className='end'> 
            <Button className='btnEnd' 
            bsStyle="success" 
            type="submit" 
            onClick={this.handleSubmit}>Add Collection</Button>
          </div>
      </Form>
    </div>
    )
  }
}

export default AddCollection

       
