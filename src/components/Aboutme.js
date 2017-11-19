import React from 'react'
import {Grid, Row, Col, img} from 'react-bootstrap'

const Aboutme = ()=> {
return(
		<section className='pages' id="aboutme">
			<div className='backAbout'>
				<h2 className='titleAbout'>ABOUT ME</h2>
				<Grid>
			    <Row className="show-grid">
			      <Col xs={12} md={8}>
			      	<h4>Hello there I'm Mireia</h4>
			      	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque,
			      	nibh eget vehicula tempus, libero ante tincidunt sem, 
			      	sit amet fermentum orci risus non risus. In hac habitasse platea dictumst.</p>
			      </Col>
			      <Col xs={6} md={4}>
			      	<img src="/img/image1.JPG" alt="fashion photography" className='img-responsive img-circle' />
			      	<a href=''> Know more...</a>
			      </Col>
			    </Row>
			  </Grid>
			</div>
		</section>
	)
}
export default Aboutme