import React, { Component } from 'react'	
import {Row, Button} from 'react-bootstrap'
import {addMessage} from '../../services/apiSessions'

class FormContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	name: '',
			email: '',
			message:'',
			accept:false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  
  addContactMessage(){
  	addMessage(this.state.name, this.state.email, this.state.message)
  	.then(response => 
  		this.setState({
    	name: '',
			email: '',
			message:'',
			accept:false
    	})
  	)
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }
	

  handleSubmit(event) {	
    event.preventDefault();
  	this.setState({accept:true})
    this.addContactMessage()
  }
		

  render() {
    return (
    	<Row>
	    	<form className='formContact'>
	    		<h4>Contact me...</h4>
			    <div>
			      <label htmlFor="name">Name*:</label>
			      <input type="text" 
			      id="name" name="name" 
			      placeholder=' name' 
			      value={this.state.name} 
			      onChange={this.handleChange}/>
			    </div>
			    <div>
			        <label htmlFor="mail">E-mail*:</label>
			        <input 
			        type="email" 
			        id="email" 
			        name="email" 
			        placeholder=' example@gmail.com' 
			        value={this.state.email} 
			        onChange={this.handleChange}
			        required/>
			    </div>
			    <div>
			        <label htmlFor="msg">Message:</label>
			        <textarea 
			        id="msg" 
			        name="message" 
			        value={this.state.message}
			        onChange={this.handleChange} 
			        required>
			        </textarea>
			    </div>
			    <div className="button">
					  <Button type="submit" className="send" 
					  onClick={this.handleSubmit}>Send your message</Button>
					</div>
				</form>
			</Row>
    );
  }
}

export default FormContact