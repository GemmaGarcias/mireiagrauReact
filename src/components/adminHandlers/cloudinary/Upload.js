import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import PropTypes from 'prop-types';

import ImageUploadForm from './ImageUploadForm'

const propTypes = {
  imagePreviewUrl: PropTypes.array,
  uploadFile: PropTypes.func
}

const Upload = props => {
  const { imagePreviewUrl, uploadFile } = props
  return (
    <Grid>
      <Row>
        <Col md={8}>
          <ImageUploadForm uploadFile={uploadFile}/>
        </Col>
        <Grid>
          <Row>
              {
                imagePreviewUrl.map((image,i) => 
                <Col md={4} key={i}>
                  <img 
                  className="img-responsive preview" width={64} height={90} alt={''} src={image} />
                </Col>
              )}
            </Row>
          </Grid>
      </Row>
    </Grid>
  )
}

Upload.propTypes = propTypes

export default Upload