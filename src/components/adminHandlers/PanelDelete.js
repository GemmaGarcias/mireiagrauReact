import React, { Component } from 'react'
import {ListGroup, ListGroupItem, Panel} from 'react-bootstrap'

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
				<Panel collapsible defaultExpanded header={this.props.title}>
					Created At: {this.props.createdAt}
					<button value={this.props.id} onClick={this.handleClick} >x</button>
				  <ListGroup fill>
						{this.props.images.map((img, i) =>(
				      <ListGroupItem>
								<img className='galleryImg' src={img.url} alt=""/>
								<p key={img.name}>{img.name}</p>
							</ListGroupItem>)
						)}
					</ListGroup>
				</Panel>
			</div>
		)
	}
}

export default PanelDelete
