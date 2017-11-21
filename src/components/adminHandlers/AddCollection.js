import React, { Component } from 'react'
import{Form, Button} from 'react-bootstrap'
import axios from 'axios'
import AddInput from './AddInput'

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
    alert('your message has been sent')
    event.preventDefault()
    axios.post('http://localhost:3001/new', {
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
			<h4><strong>Add new collection:</strong></h4>
			<Form >
					<p> Name:</p>
        	<input  
        	name='name' 
        	placeholder="Add title..."
          value={this.state.name}
        	onChange={this.handleChange}
        	autoFocus/>
        	<p>Detail:</p>
        	<input  
        	name='detail' 
        	placeholder="Add title..."
          value={this.state.detail}
        	onChange={this.handleChange} />
        

          <p>Select gallery:</p>
          <select value={this.state.gallery} name='gallery' onChange={this.handleChange}>
            <option value="">Select one</option>
            <option value="fashion" name='gallery'>fashion</option>
            <option value="commercial" name='gallery'>commercial</option>
          </select>
          <AddInput addImages={this.addImages}/>
          <div> 
            <Button type="submit" onClick={this.handleSubmit}>Add Collection</Button>
          </div>
      </Form>
    </div>
    )
  }
}

export default AddCollection

       
