import React from 'react'
import { Col } from 'react-bootstrap'
import PropTypes from 'prop-types';

import ImageUploadForm from './ImageUploadForm'
import './Upload.css'

const propTypes = {
  imagePreviewUrl: PropTypes.array,
  uploadFile: PropTypes.func
}

const Upload = props => {
  const { imagePreviewUrl, uploadFile } = props
  return (
        <div>
          <h3 className='titleInsert'>Insert images:</h3>
          <ImageUploadForm uploadFile={uploadFile}/>
              {
                imagePreviewUrl.map((image,i) =>
                    <img 
                    className="img-responsive preview" width={64} height={90} alt={''} src={image} />
              )}
        </div>
      )
    }

Upload.propTypes = propTypes

export default Upload