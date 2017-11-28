import React, { Component } from 'react'
import {ListGroup, ListGroupItem, Panel, Media} from 'react-bootstrap'
import './PanelDelete.css'

class PanelDelete extends Component{
	constructor(props){
    super(props)
    this.state = {
      id: '',
    }
    this.handleClick = this.handleClick.bind(this);
	}


	handleClick(event){
		this.setState({id: event.target.value})
		this.props.deleteSession(event.target.value)
	}

	render() {
		console.log(this.state.id)
		return(
			<div>
				<Panel className='pnl' collapsible defaultCompleted header={this.props.title}>
					Created At: {this.props.createdAt}
					<button value={this.props.id} onClick={this.handleClick}>x</button>
				  <ListGroup fill>
						{this.props.images.map((img, i) =>(
					      <ListGroupItem>
						      <Media>
							      <Media.Left align="top">
							        <img width={64} height={90} src={img.url} alt="placeholder thumbnail"/>
							      </Media.Left>
							      <Media.Body>
							        <Media.Heading>{img.name}</Media.Heading>					        
							      </Media.Body>
							  </Media>
						  </ListGroupItem>)
						)}
					</ListGroup>
				</Panel>
			</div>
		)
	}
}

export default PanelDelete
