import React, { Component } from 'react'
import { CCarousel, CCarouselItem, CCard, CCardBody, CCardHeader } from '@coreui/react'
export default class MultipleImageUploadComponent extends Component {
  fileObj = []
  fileArray = []

  constructor(props) {
    super(props)
    this.state = {
      file: [null],
    }
    this.title = 'Situation'
    this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this)
    this.uploadFiles = this.uploadFiles.bind(this)
  }

  uploadMultipleFiles(e) {
    this.fileObj.push(e.target.files)
    for (let i = 0; i < this.fileObj[0].length; i++) {
      this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]))
    }
    this.setState({ file: this.fileArray })
  }

  uploadFiles(e) {
    e.preventDefault()
    console.log(this.state.file)
  }

  render() {
    return (
      <CCard>
        <CCardHeader>{this.title}</CCardHeader>
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

          <CCarousel controls indicators>
            {(this.fileArray || []).map((url) => (
              // eslint-disable-next-line react/jsx-key
              <CCarouselItem>
                <img className="d-block w-100" src={url} alt="slide 1" />
              </CCarouselItem>
            ))}
          </CCarousel>
        </CCardBody>
      </CCard>
    )
  }
}
