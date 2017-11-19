import React, { Component } from 'react'
import{Form, Button} from 'react-bootstrap'
import axios from 'axios'

class AddCollection extends Component {
  constructor(props){
    super(props)
    this.state = {
    name: '',
    detail: '',
    img:[{}],
    gallery:''
  }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addUrl = this.addUrl.bind(this);
    this.addUrl2 = this.addUrl2.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  addUrl(event){
    let urlValue = event.target.value
    let newaImage=this.state.img.map((image,i)=> {
    image.name = this.state.imgName
    image.url= urlValue
      return image
    })
    event.preventDefault()
  }
  

  addUrl2(event){
    let colImage = this.state.img
    let object ={}
    object.name= this.state.imgName2
    object.url= this.state.urlValue2
    colImage.push(object)
    event.preventDefault()
    this.setState({img:colImage})
  }


  handleSubmit(event) {
    alert('your message has been sent');
    event.preventDefault();
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
		console.log(this.state)
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
          <p><strong>New Image:</strong></p>
          <p>name cover *: </p>
          <input  
          name='imgName' 
          placeholder="Add name..."
          onChange={this.handleChange} />
          <input  
          name='url'
          placeholder="Add url..."
          onChange={this.addUrl} />
          
          <p>name cover *: </p>
          <input  
          name='imgName2' 
          placeholder="Add name..."
          onChange={this.handleChange} />
          <input  
          name='urlValue2'
          placeholder="Add url..."
          onChange={this.handleChange}/>
          <Button type="submit" onClick={this.addUrl2}> + Add image</Button>

          <p>Select the gallery:</p>
          <select value={this.state.gallery} name='gallery' onChange={this.handleChange}>
            <option value="">Select one</option>
            <option value="fashion" name='gallery'>fashion</option>
            <option value="commercial" name='gallery'>commercial</option>
          </select>
        	<Button type="submit" onClick={this.handleSubmit}>Add</Button>
      </Form>
		</div>
		)
	}
}

export default AddCollection