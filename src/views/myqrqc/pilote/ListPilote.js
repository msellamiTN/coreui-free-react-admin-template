import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  CCard,
  CCardHeader,
  CCardBody,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CFormFeedback,
  CContainer,
  CRow,
  CCol,
  CButton,
} from '@coreui/coreui'

const PiloteList = () => {
  const [pilotes, setPilotes] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3001/pilote')
      .then((response) => {
        setPilotes(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const handleChange = (e) => {
    setPilotes(
      pilotes.filter((pilote) => pilote.name.toLowerCase().includes(e.target.value.toLowerCase())),
    )
  }

  const getPilotes = () => {
    axios
      .get(url_api_list_pilotes, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      })
      .then(function (response) {
        const pilotes = response.data.map((pilote) => {
          return {
            id: pilote.id,
            name: pilote.name,
            role: pilote.role,
          }
        })
        setPilotes(pilotes) // Update the state with the fetched pilotes
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <CCard className="mb-4">
      <CCardHeader>Equipe </CCardHeader>
      <CCardBody>
        <CFormInput type="search" onChange={handleChange} />
        <CButton onClick={getPilotes}>Get Pilotes</CButton>
      </CCardBody>
      <CContainer>
        <CRow>
          {pilotes.map((pilote) => (
            <CCol sm={5} md={6} key={pilote.id}>
              <CCard className="mb-4">
                <CCardHeader>Equipe </CCardHeader>
                <CCardBody>
                  <CCol xs>
                    <CFormLabel className="col-sm-3 col-form-label">Matricule</CFormLabel>
                    <CFormInput value={pilote.id} readOnly />
                  </CCol>
                  <CCol xs>
                    <CFormLabel className="col-sm-3 col-form-label">Nom &amp; Prénom</CFormLabel>
                    <CFormInput value={pilote.name} readOnly />
                  </CCol>
                  <CCol xs>
                    <CFormLabel>Role</CFormLabel>
                    <CFormSelect value={pilote.role} readOnly>
                      <option value="">Sélectionnez une Atelier</option>
                      <option value="Superiveur">Superiveur</option>
                      <option value="Membre">Membre </option>
                      <option value="Pilote">Pilote</option>
                      <option value="Co-Pilote">Co-Pilote</option> {/* Fix the value */}
                    </CFormSelect>
                    <CFormFeedback valid>Looks good!</CFormFeedback>
                  </CCol>
                </CCardBody>
              </CCard>
            </CCol>
          ))}
        </CRow>
      </CContainer>
    </CCard>
  )
}

export default PiloteList
