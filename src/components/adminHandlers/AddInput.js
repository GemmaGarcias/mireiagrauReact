import {addImagesToCollectionById} from '../../services/apiSessions'
import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import './AddCollection.css'
import ShowInfoCollection from './ShowInfoCollection'

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
        const {id} = this.props.match.params
        const {url, name}= this.state
        addImagesToCollectionById(id, url, name)
          .then(console.log)
          //setState
    }

    handleChange(event) {
      this.setState({[event.target.name]: event.target.value})
    }


    render() {
        return(
            <div>
              <ShowInfoCollection info={this.props.createdCollection}/>
               <form>
                   <div id="dynamicInput" className='inputDin'>
                       {this.state.inputs.map((input,index) => 
                       	<form>
                       		<p><strong>Image {index + 1}</strong></p>
	                       	<input 
                          className='inputDin'
                          key={input} 
                          name='name' 
                          onChange={this.handleChange} 
                          placeHolder = 'add name...'/>	
	                       	<input
                          className='inputDin' 
                          key={input+1} 
                          name='url' 
                          onChange={this.handleChange} 
                          placeHolder='add url...'/>
                        </form>)
                       }
                        <Button type='submit' bsSize='small' bsStyle="primary" 
                          onClick={this.appendInput} >
                            + 
                        </Button>
                   </div>
               </form>
            </div>
        );
    }

}

export default AddInput