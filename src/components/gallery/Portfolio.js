import React, {Component}  from 'react'
import { getSessionById } from '../../services/apiSessions'
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap'
import {Link} from 'react-router-dom'


class Portfolio extends Component{
  constructor(props){
    super (props)
    this.state = {
      sessionImages:[]
    }
  }

  componentDidMount(){
    let {id}=this.props.match.params 
    getSessionById(id)
      .then(data => {
      this.setState({
        sessionImages: data
      })
    })  
  }


  render(){
    const sessionNamePortfolio= this.state.sessionImages.length&&this.state.sessionImages[0].name
    const sessionImages=this.state.sessionImages.length&&this.state.sessionImages[0].img.map((images,i) => images.url)
    const sessionGallery= this.state.sessionImages.length&&this.state.sessionImages[0].gallery
    return(
      <div>
        <div className='headerportfolio'>
          <a className='headerLink' href="/"><strong>MIREIA GRAU </strong></a>
        </div>
        <div className='portfolio container'>
          <div className='container'>
            <Link to={`/gallery/${sessionGallery}`} > Back</Link> 
          </div>
          <div className='container'>
            <h4>{sessionNamePortfolio}</h4>
          </div>
             <Grid>
              <Row>
                { 
                  sessionImages.length&&sessionImages.map((image,i) => (
                    <Col xs={6} md={3}>
                      <Thumbnail href="" alt="171x180" src={`${image}`}/>
                    </Col>
                  ))
                }
              </Row>
            </Grid>
        </div>
      </div>
    )
  }
}

export default Portfolio



 