import React, { Component } from 'react'
import{Form, Button} from 'react-bootstrap'

class EditHome extends Component {
  constructor(props){
    super(props)
    this.state = {
      mainTitle:'',
      urlImage:''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }
  handleSubmit(event) {
    alert('your message has been sent');
    event.preventDefault();
    this.setState({
      mainTitle:'',
      urlImage:''
    });
  }
	
	render() {
		console.log(this.state)
	return(
	  <div>
			<p><strong>Your main title:</strong></p>
			<Form block>
					<p> Change title:</p>
        	<input  
        	name='mainTitle' 
        	placeholder="Change title..."
        	onChange={this.handleChange}
        	autoFocus/>
        	<p>Image Url:</p>
        	<input  
        	name='urlImage' 
        	placeholder="Add Url..."
        	onChange={this.handleChange} />
        	<Button type="submit" onClick={this.handleSubmit}>Add</Button>
      </Form>
			<p>{this.state.mainTitle}</p>
		</div>
		)
	}
}

export default EditHome