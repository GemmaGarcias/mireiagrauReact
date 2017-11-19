import React, { Component } from 'react'	
import {Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'	

class Gallery extends Component {
  render() {
    return (
		<section id="gallery" className='pages'>
			<div>
				<Row>
					<Col md={2}></Col>
					<Col md={3} className='imgdisplay'>
						<Col className='contain'>
							<img src="/img/Gallery/f130_fallisback_01-650x975.jpg" alt="fashion" className='img-responsive image rounded' />
							<div className="overlay1">
    						<div className="text"><Link className='route' to="/gallery/fashion">FASHION</Link></div>
  						</div>
						</Col>
					</Col>
					<Col md={3} className='imgdisplay'>
						<Col className='contain'>
							<img src="/img/Gallery/C138_medwindsaw17_01-650x975.jpg" alt="comercial" className='img-responsive image' />
							<div className="overlay2">
    						<div className="text"><Link className='route' to="/gallery/commercial">COMMERCIAL</Link></div>
  						</div>
						</Col>
					</Col>
					<Col md={3}>
						<h2 className='title'>GALLERY</h2>
					</Col>
				</Row>
				<div className='end'></div>
			</div>
		</section>
		)
	}
}
export default Gallery