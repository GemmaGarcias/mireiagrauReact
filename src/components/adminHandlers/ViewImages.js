import { getGallery } from '../../services/apiSessions'
import React, { Component } from 'react'


class ViewImages extends Component {
  constructor(props){
    super(props)
    this.state = {
      sessionsView: [],
      gallery:''
    }
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount () {
    getGallery()
      .then(data => {
        this.setState({
          sessionsView: data
        })
     })
  }
  
  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event){
  	event.preventDefault()
  }

  render() {
    return (
      <div className="ViewImages">
        <h4>Collection Views</h4>
        <from onSubmit={this.handleSubmit}>
        <select value={this.state.gallery} name='gallery' onChange={this.handleChange}>
            <option value="">Select one</option>
            <option value="fashion" name='gallery'>fashion</option>
            <option value="commercial" name='gallery'>commercial</option>
          </select>
        </from>



      </div>
    );
  }
}

export default ViewImages