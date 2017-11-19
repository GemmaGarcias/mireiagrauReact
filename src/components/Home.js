import React, { Component } from 'react'
import {Jumbotron} from 'react-bootstrap'
import Aboutme from './Aboutme'
import Gallery from './Gallery'
import Contact from './Contact'
import Header from './Header'

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      mainTitle:'MIREIA GRAU WEBSITE',
      text:''
    }
  }

	render(){
		return(
		<div>
			<Header />
			<div className="test">
				<div id="home" className='pages'>
					<Jumbotron className='jumbotron'>
		    		<h1 className= 'maintitle'>{this.state.mainTitle} <br/><small>{this.state.text}</small></h1>
		 			</Jumbotron>
				</div>
				<Aboutme />
				<Gallery />
				<Contact />
			</div>
		</div>
		)
	}
}

export default Home