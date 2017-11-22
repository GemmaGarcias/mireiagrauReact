import React, { Component } from 'react'
import {Form} from 'react-bootstrap'

class AddInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
        	name:'',
        	url:'', 
        	inputs: ['input-0'] };

    this.appendInput = this.appendInput.bind(this)
    this.handleChange = this.handleChange.bind(this)
    }

    appendInput(event) {
				event.preventDefault()
        var newInput = `input-${this.state.inputs.length}`;
        this.setState({
         inputs: this.state.inputs.concat([newInput])})
        let newstate= this.state
        delete newstate.inputs
        this.props.addImages(newstate)
    }

    handleChange(event) {
      this.setState({[event.target.name]: event.target.value})
    }


    render() {
    	console.log(this.state, 'hijo')
        return(
            <div>
               <Form>
                   <div id="dynamicInput">
                       {this.state.inputs.map((input,index) => 
                       	<form>
                       		<p>Image {index + 1}</p>
	                       	<input key={input} 
                          name='name' 
                          onChange={this.handleChange} 
                          placeHolder = 'add name...'/>	
	                       	<input key={input+1} 
                          name='url' 
                          onChange={this.handleChange} 
                          placeHolder='add url...'/>
                          <button type='submit' onClick={this.appendInput} >
                            + ADD IMAGE
                          </button>
                        </form>)
                       }
                   </div>
               </Form>
            </div>
        );
    }

}

export default AddInput