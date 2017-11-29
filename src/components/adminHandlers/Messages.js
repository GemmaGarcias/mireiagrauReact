import React, { Component } from 'react'
import {getMessages} from '../../services/apiSessions'
import './Messages.css'

class Messages extends Component {
  constructor(props){
    super(props)
    this.state = {
    messages:[]
  }
 }
  componentDidMount(){
		getMessages()
		.then(response=> {
			this.setState({
				messages:response
			})
		})
  }

 render() {
		return(
		<div className="Calendar">
			<h2 className='titleMessages'>Messages</h2>
			<p>Entrance folder</p>
			<div>
			{
				this.state.messages.length && this.state.messages.map((message,i) =>( 
					<div key={i}>	
						<h5>{message.name}</h5>
						<p>{message.email}</p>
						<p>{message.message}</p>
					</div>
					)
				)
			}
			</div>
		</div>
		)
	}
}

export default Messages