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
export default class ClientView extends Component {
  render() {
    return (
      <CCard>
        <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
          <CCard>
            <CCardHeader>
              Description du problème QQOQCCP - Point de vue de celui qui détecté le problème
              (client, opérateur…)
            </CCardHeader>
            <CCardFooter>
              <div className="form-actions">
                <CInputGroup row>
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
            <CCol xs="12" sm="6">
              <CCard>
                <CCardHeader></CCardHeader>
                <CCardBody>
                  <CCardTitle></CCardTitle>
                  <CInputGroup row>
                    <CFormLabel htmlFor="Quoi">Quoi ? </CFormLabel>
                    <CFormTextarea id="Quoi" placeholder="Que s'est il passé ?" required />
                  </CInputGroup>
                  <CInputGroup row>
                    <CFormLabel htmlFor="Qui">Qui l&apos;a detecté ? </CFormLabel>
                    <CFormTextarea id="Qui" placeholder="Qui l'a detecté ? " required />
                  </CInputGroup>

                  <CInputGroup row>
                    <CFormLabel htmlFor="Quand">
                      Quand a-t-il été détecté ? (date ; heure ; minutes)?{' '}
                    </CFormLabel>
                    <CFormInput
                      type="datetime-local"
                      id="date-input"
                      name="date-input"
                      placeholder="date"
                      required
                    />
                    <CFormInput id="Quand" placeholder="Quand a-t-il été détecté ? " />
                  </CInputGroup>
                  <CInputGroup row>
                    <CFormLabel htmlFor="Comment">Comment a-t-il été détecté ?</CFormLabel>
                    <CFormTextarea
                      id="Comment"
                      placeholder="Comment a-t-il été détecté ?"
                      required
                    />
                  </CInputGroup>
                  <CInputGroup row>
                    <CFormLabel htmlFor="Combien">Combien en a-t-on détecté ?</CFormLabel>
                    <CFormTextarea
                      rows={3}
                      id="Combien"
                      placeholder="Combien en a-t-on détecté ?"
                      required
                    />
                  </CInputGroup>
                  <CInputGroup row>
                    <CFormLabel htmlFor="Pourquoi">Pourquoi est-ce un problème ?</CFormLabel>
                    <CFormTextarea
                      id="Pourquoi"
                      rows={3}
                      placeholder="Pourquoi est-ce un problème ?"
                      required
                    />
                  </CInputGroup>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
          <CRow>
            <CInputGroup row>
              <CCol xs="12" sm="6">
                <MultipleImageUploadComponent title="Situation/Pièce Bonne (OK)" />

                <CFormLabel htmlFor="SituationOK">Situation/Pièce Bonne (OK)</CFormLabel>
                <CFormTextarea placeholder="Situation/Pièce Bonne (OK)" />
              </CCol>

              <CCol xs="12" sm="6">
                <MultipleImageUploadComponent title="Situation/Pièce Mauvaise (NOK)" />

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
