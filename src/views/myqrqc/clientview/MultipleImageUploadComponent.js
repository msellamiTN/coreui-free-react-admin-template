import React, { Component } from 'react'
import {
  CCarousel,
  CCarouselItem,
  CCard,
  CCardBody,
  CCardHeader,
  CCarouselCaption,
  CFormTextarea,
  CRow,
} from '@coreui/react'
export default class MultipleImageUploadComponent extends Component {
  fileObjCV = []
  fileArrayCV = []

  constructor(props) {
    super(props)
    this.state = {
      file: [null],
    }
    this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this)
    this.uploadFiles = this.uploadFiles.bind(this)
  }

  uploadMultipleFiles(e) {
    this.fileObjCV.push(e.target.files)
    for (let i = 0; i < this.fileObjCV[0].length; i++) {
      this.fileArrayCV.push(URL.createObjectURL(this.fileObjCV[0][i]))
    }
    this.setState({ file: this.fileArrayCV })
  }

  uploadFiles(e) {
    e.preventDefault()
    console.log(this.state.file)
  }

  render() {
    const { title, key, files } = this.props
    return (
      <CCard className="mb-4">
        <CRow className="g-4">
          <CCardHeader>{title}</CCardHeader>
          <CCardBody>
            <div className="form-group">
              <input
                type="file"
                className="form-control"
                onChange={this.uploadMultipleFiles}
                multiple
              />
            </div>
            <button type="button" className="btn btn-danger btn-block" onClick={this.uploadFiles}>
              Upload
            </button>

            <CCarousel controls indicators dark>
              {(this.fileArrayCV || []).map((url, index) => (
                <CCarouselItem key={`${key}-${index}`}>
                  <img
                    className="d-block w-100"
                    src={url}
                    alt={`slide ${index + 1}`}
                    key={`${key}-${index}`}
                  />
                </CCarouselItem>
              ))}
            </CCarousel>
          </CCardBody>
        </CRow>
      </CCard>
    )
  }
}
