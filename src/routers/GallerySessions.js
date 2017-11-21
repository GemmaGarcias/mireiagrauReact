import { getGallery } from '../services/apiSessions'
import React, { Component } from 'react'
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class GallerySessions extends Component {
  constructor(props){
    super(props)
    this.state = {
      sessions: []
    }
  }
  
  componentDidMount () {
    getGallery()
      .then(data => {
        this.setState({
          sessions: data
        })
     })
  }
  
  
  render () {
    const fashionCollections = this.state.sessions.filter(session => session.gallery === this.props.match.params.session )
    const coverSession = fashionCollections.map((session, i) => session.img[0].url) 
    console.log(coverSession[0])
    const sessionName = this.props.match.params.session
    
    return(
      <div> 
        <div className='headerportfolio'>
          <a className='headerLink' href="/"><strong>MIREIA GRAU </strong></a>
        </div>
        <div className='container'>
        	<div>
  					<div><Link to='/#home' >Home</Link> / <Link to='/#gallery'>Gallery</Link></div>
  				</div>
          <h1>{sessionName}</h1>
          <Grid>
            <Row>
                {fashionCollections.map((session,i)=>(
                  <Link rel="stylesheet" to={`/gallery/${sessionName}/portfolio/${session._id}`}>
                  <Col sm={2} md={4}>
                    <Thumbnail
                      src={coverSession[i]}
                      key={i}>
                      <h4>{session.name}</h4>
                      <p><strong>Detail: </strong>{session.detail}</p>
                    </Thumbnail>
                  </Col>
                </Link>
                )
              )}
            </Row>
          </Grid> 
        </div>
      </div>
    )
  }
}

export default GallerySessions
