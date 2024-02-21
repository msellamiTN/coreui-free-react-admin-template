import React, { Component } from 'react'
import CIcon from '@coreui/icons-react'
import MultipleImageUploadComponent from './MultipleImageUploadComponent'
import {
  CCol,
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CForm,
  CInputGroup,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CRow,
  CCardTitle,
} from '@coreui/react'
import * as icon from '@coreui/icons'
import VueClientDataService from 'src/services/VueClientDataService'
export default class InternaltView extends Component {
  constructor(props) {
    super(props)

    this.state = {
      Quoi: '',
      Qui: '',
      Comment: '',
      Pourquoi: '',
      Quand: '',
      Combien: '',
      Depuis: '',
      startDateTime: '',
      happenfirsttime: '',
      reference: '',
      date: '',
      heure: '',
      valide: false,
      datevalidationvueclient: null,
      validated: true,
      okFiles: [],
      nokFiles: [],
    }
    this.handleOkFilesChange = this.handleOkFilesChange.bind(this)
    this.handleNokFilesChange = this.handleNokFilesChange.bind(this)
    this.handleChange = (e) => {
      const { name, value } = e.target
      console.log(e.target)
      this.setState({ [name]: value })
      console.log({ [name]: value })
    }
    this.handleSubmit = async (event) => {
      const form = event.currentTarget
      console.log(form)
      if (form.checkValidity() === false) {
        event.preventDefault()
        event.stopPropagation()
      } else {
        this.saveVueClient()
        event.preventDefault()
        event.stopPropagation()
      }
    }
  }
  handleOkFilesChange(files) {
    this.setState({ okFiles: files })
  }

  handleNokFilesChange(files) {
    this.setState({ nokFiles: files })
  }
  async saveVueClient() {
    const { Quoi, Qui, Comment, Pourquoi, Quand, Combien, Depuis, happenfirsttime, reference } =
      this.state
    // POST data
    console.log(Quand)
    const vueClientData = {
      quelprob: Quoi,
      qui: Qui,
      ouu: Quand,
      quandd: Quand,
      comment: Comment,
      combien: Combien,
      pourquoi: Pourquoi,
      depuis: Depuis,
      happenfirsttime: happenfirsttime,
      reference: reference,
      date: new Date(Quand).toISOString().split('T')[0],
      heure: new Date(Quand).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }),
      valide: false,
      datevalidationvueclient: null,
    }

    VueClientDataService.saveVueClientData(vueClientData)
      .then((response) => {
        console.log('Data saved:', response)
      })
      .catch((error) => {
        console.error('Error saving data:', error)
      })
  }
  render() {
    const { Quoi, Qui, Comment, Pourquoi, Quand, Combien, startDateTime, okFiles, nokFiles } =
      this.state

    return (
      <CCard>
        <CForm
          className="row g-3 needs-validation"
          noValidate
          validated={this.validated}
          onSubmit={this.handleSubmit}
        >
          <CCard>
            <CCardHeader>
              Description du problème QQOQCCP - Point de vue de celui qui détecté le problème
              (client, opérateur…)
            </CCardHeader>
            <CCardFooter>
              <div className="form-actions">
                <CInputGroup className="mb-3">
                  <CButton type="submit" color="primary">
                    <CIcon icon={icon.cilSave} />
                    Save changes
                  </CButton>

                  <CButton color="secondary">Cancel</CButton>
                </CInputGroup>
              </div>
            </CCardFooter>
          </CCard>
          <CRow>
            <CCol>
              <CCard className="mb-4">
                <CCardHeader></CCardHeader>
                <CCardBody>
                  <CCardTitle></CCardTitle>

                  <CRow className="g-4">
                    <CCol md={12}>
                      <CFormLabel htmlFor="Quoi">Quoi ? Que s&apos;est il passé ? </CFormLabel>
                      <CFormTextarea
                        rows={3}
                        value={this.Quoi}
                        name="Quoi"
                        onChange={this.handleChange}
                        placeholder="Que s'est il passé ?"
                        required
                      />
                    </CCol>

                    <CCol md={12}>
                      <CFormLabel htmlFor="Qui">Qui l&apos;a detecté ? </CFormLabel>
                      <CFormTextarea
                        id="Qui"
                        rows={3}
                        placeholder="Qui l'a detecté ? "
                        value={this.Qui}
                        name="Qui"
                        onChange={this.handleChange}
                        required
                      />
                    </CCol>

                    <CCol md={12}>
                      <CFormLabel htmlFor="Quand">
                        Quand a-t-il été détecté ? (Quand:date ; heure ; minutes)?{' '}
                      </CFormLabel>
                      <CFormInput
                        type="datetime-local"
                        value={this.Quand}
                        name="Quand"
                        onChange={this.handleChange}
                        required
                      />
                      <CFormInput id="Quand" placeholder="Quand a-t-il été détecté ? " />
                    </CCol>
                    <CCol md={12}>
                      <CFormLabel htmlFor="Comment">Comment a-t-il été détecté ?</CFormLabel>
                      <CFormTextarea
                        rows={3}
                        id="Comment"
                        placeholder="Comment a-t-il été détecté ?"
                        required
                        value={this.Comment}
                        name="Comment"
                        onChange={this.handleChange}
                      />
                    </CCol>
                    <CCol md={12}>
                      <CFormLabel htmlFor="Combien">Combien en a-t-on détecté ?</CFormLabel>
                      <CFormTextarea
                        rows={3}
                        id="Combien"
                        placeholder="Combien en a-t-on détecté ?"
                        required
                        value={this.Combien}
                        name="Combien"
                        onChange={this.handleChange}
                      />
                    </CCol>
                    <CCol md={12}>
                      <CFormLabel htmlFor="Pourquoi">Pourquoi est-ce un problème ?</CFormLabel>
                      <CFormTextarea
                        id="Pourquoi"
                        rows={3}
                        placeholder="Pourquoi est-ce un problème ?"
                        required
                        value={this.Pourquoi}
                        name="Pourquoi"
                        onChange={this.handleChange}
                      />
                    </CCol>
                    <CCol md={12}>
                      <CFormLabel htmlFor="Pourquoi">
                        Que s&apos;est-il passé à la première apparition du un problème ?
                      </CFormLabel>
                      <CFormTextarea
                        id="happenfirsttime"
                        rows={3}
                        placeholder="Que s'est-il passé à la première apparition du un problème ?"
                        required
                        value={this.happenfirsttime}
                        name="happenfirsttime"
                        onChange={this.handleChange}
                      />
                    </CCol>
                  </CRow>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
          <CRow>
            <CInputGroup className="mb-3">
              <CCol xs="12" sm="6">
                <MultipleImageUploadComponent
                  title="OK Situation"
                  id="ok"
                  files={okFiles}
                  onFilesChange={this.handleOkFilesChange}
                />

                <CFormLabel htmlFor="SituationOK">Situation/Pièce Bonne (OK)</CFormLabel>
                <CFormTextarea placeholder="Situation/Pièce Bonne (OK)" />
              </CCol>

              <CCol xs="12" sm="6">
                <MultipleImageUploadComponent
                  title="NOK Situation"
                  id="nok"
                  files={nokFiles}
                  onFilesChange={this.handleNokFilesChange}
                />

                <CFormLabel htmlFor="SituationNOK">Situation/Pièce Mauvaise (NOK)</CFormLabel>
                <CFormTextarea placeholder="Situation/Pièce Mauvaise (NOK)" />
              </CCol>
            </CInputGroup>
          </CRow>
        </CForm>
      </CCard>
    )
  }
}
