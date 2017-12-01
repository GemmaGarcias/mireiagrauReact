import React, { Component } from 'react'
import {getMessages, deleteMessageById} from '../../services/apiSessions'
import Moment from 'react-moment'
import './Messages.css'

class Messages extends Component {
  constructor(props){
    super(props)
    this.state = {
    messages:[],
    deleted: false
  }
  this.handleClick=this.handleClick.bind(this)
  this.deleteMsg= this.deleteMsg.bind(this)
 }
  componentDidMount(){
		getMessages()
		.then(response=> {
			this.setState({
				messages:response
			})
		})
  }

  _componentWillUpdate(){
    if(this.state.deleted) {
      getMessages()
      .then(data => {
        this.setState({
          messages: data,
          deleted: false
        })
      })
    }
  }

  deleteMsg(){
    deleteMessageById(event.target.value)
     .then(() => {
      this.setState({
        deleted: true
      })
    }
  }

  handleClick(event){
    event.preventDefault()
      this.deleteMsg()
      this._componentWillUpdate()
      })
  }

 render() {
		return(
		<div className="messages">
			<h2 className='titleMessages'>Messages</h2>
			<p>Entrance folder</p>
			<p><strong>You have {this.state.messages.length} messages </strong></p>
			<div>
			{
				this.state.messages.length && this.state.messages.map((message,i) =>( 
					<div key={i} className='boxmessage'>
						<p className='sent'>Sent: <Moment fromNow date={message.date}/></p>
						<h5 className='from'> From: {message.name}</h5>
						<p className='email'> E-mail: <a href='mailto:{message.email}'>{message.email}</a></p>
						<p className='msgs'>Message:</p>
						<button className='buttonTrash' value={message._id} onClick={this.handleClick}><span className="glyphicon glyphicon-trash text-danger"></span></button>
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