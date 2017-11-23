import React from 'react'
import {Row, Col} from 'react-bootstrap'
import FormContact from './form/FormContact'

const Contact = ()=> {
	return(
		<section id="contact" className='pages'>
			<div>
				<Row>
					<Col md={5} className='textcontact'>
						<h4>MIREIA GRAU</h4>
						<p>Fashion Photographer from Barcelona</p>
						<a href='mailto:contact@mireiagrau.com' target='blank'>contact@mireiagrau.com</a>
						<p>t.(+34)633.223.173</p>
						<section>
							<div className="socials flex-center">
				                <a className="icons-sm fb-ic icons" href='https://www.facebook.com/mireia.grau.334' target='blank'><i className="fa fa-facebook fa-lg white-text mr-md-4"> </i></a>
				                <a className="icons-sm tw-ic icons" href='https://twitter.com' target='blank'><i className="fa fa-twitter fa-lg white-text mr-md-4"> </i></a>
				                <a className="icons-sm ins-ic icons" href='https://www.instagram.com/mireiagrau/' target='blank'><i className="fa fa-instagram fa-lg white-text mr-md-4"> </i></a>
				                <a className="icons-sm pin-ic icons" href='https://www.pinterest.es' target='blank'><i className="fa fa-pinterest fa-lg white-text" > </i></a>
				            </div>
						</section>
					</Col>
					<Col md={7}>
						<FormContact />
					</Col>
				</Row>		
			</div>
		</section>
	)
}

export default Contact