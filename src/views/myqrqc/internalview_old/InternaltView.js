import React, { Component } from 'react'
import {
  CCol,
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCardTitle,
  CInputGroup,
  CFormTextarea,
  CFormInput,
  CFormLabel,
  CRow,
  CButtonGroup,
} from '@coreui/react'
import MultipleImageUploadComponent from './MultipleImageUploadComponent'
export default class InternaltView extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isSaving: true,
    }
  }
  render() {
    return (
      <CCard>
        <CCardHeader>Description du problème QQOQCCP -Vue créateur (interne)</CCardHeader>
        <CCardFooter>
          <CCol md={5}>
            <CButtonGroup role="group" aria-label="Vertical button group">
              <CButton type="submit" color="primary" size="lg" disabled={this.isSaving}>
                Enregistrer
              </CButton>
              <CButton type="submit" color="dark" size="lg">
                Valider
              </CButton>
            </CButtonGroup>
          </CCol>
        </CCardFooter>

        <CRow>
          <CCol>
            <CCard>
              <CCardBody>
                <CCardTitle></CCardTitle>
                <CInputGroup>
                  <CFormLabel htmlFor="Quel">Quel est le problème ? </CFormLabel>
                  <CFormTextarea id="Quel" placeholder="Quel est le problème ?" required />
                </CInputGroup>
                <CInputGroup>
                  <CFormLabel htmlFor="Qui">Qui l&apos;a créé ?</CFormLabel>
                  <CFormTextarea id="Qui" placeholder="Qui l'a créé ?" required />
                </CInputGroup>
                <CInputGroup>
                  <CFormLabel htmlFor="Ou">Où a-t-il été créé ?</CFormLabel>
                  <CFormTextarea id="Ou" placeholder="Où a-t-il été créé ? ?" required />
                </CInputGroup>
                <CInputGroup>
                  <CFormLabel htmlFor="Quand">Quand a-t-il été créé ?? </CFormLabel>
                  <CFormInput
                    type="datetime-local"
                    id="date-input"
                    name="date-input"
                    placeholder="date"
                    required
                  />
                  <CFormInput id="Quand" placeholder="Quand a-t-il été créé ? " />
                </CInputGroup>
                <CInputGroup>
                  <CFormLabel htmlFor="Comment">
                    Comment était le processus à ce moment là ? ?
                  </CFormLabel>
                  <CFormTextarea
                    id="Comment"
                    placeholder="Comment était le processus à ce moment là ?"
                    required
                  />
                </CInputGroup>
                <CInputGroup>
                  <CFormLabel htmlFor="Combien">
                    Combien de fois le défaut est apparu ? (Historique) ?
                  </CFormLabel>
                  <CFormTextarea
                    id="Combien"
                    placeholder="Combien de fois le défaut est apparu ? (Historique)  ?"
                    required
                  />
                </CInputGroup>
                <CInputGroup>
                  <CFormLabel htmlFor="Pourquoi">
                    Est-ce qu&apos; on arrête le défaut quand on réinjecte le produit ? ?
                  </CFormLabel>
                  <CFormTextarea
                    id="Pourquoi"
                    placeholder="Est-ce qu'on arrête le défaut quand on réinjecte le produit ? ?"
                    required
                  />
                </CInputGroup>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
        <CRow>
          <CCol xs="12" sm="6">
            <MultipleImageUploadComponent title="Situation/Pièce Bonne (OK)" />
            <CInputGroup>
              <CFormLabel htmlFor="SituationOK">Situation/Pièce Bonne (OK)</CFormLabel>
              <CFormTextarea placeholder="Situation/Pièce Bonne (OK)" />
            </CInputGroup>
          </CCol>
          <CCol xs="12" sm="6">
            <MultipleImageUploadComponent title="Situation/Pièce Mauvaise (NOK)" />
            <CInputGroup>
              <CFormLabel htmlFor="SituationNOK">Situation/Pièce Mauvaise (NOK)</CFormLabel>
              <CFormTextarea placeholder="Situation/Pièce Mauvaise (NOK)" />
            </CInputGroup>
          </CCol>
        </CRow>
      </CCard>
    )
  }
}
