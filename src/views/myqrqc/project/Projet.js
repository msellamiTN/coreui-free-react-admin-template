import {
  CCol,
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CForm,
  CFormFeedback,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CFormSelect,
  CRow,
  CButtonGroup,
  CContainer,
  CImage,
} from '@coreui/react'
import ReactImg from 'src/assets/images/react.jpg'
import React, { useState } from 'react'
import CIcon from '@coreui/icons-react'
import * as icon from '@coreui/icons'
const Project = () => {
  const [initiateur, setInitiateur] = useState('')
  const [reference, setReference] = useState('')
  const [prefix, setPrefix] = useState('')
  const [startDateTime, setStartDateTime] = useState('')
  const [endDateTime, setEndDateTime] = useState('')
  const [projectTitle, setProjectTitle] = useState('')
  const [projectDescription, setProjectDescription] = useState('')
  const [categories, setCategories] = useState('')
  const [productId, setProductId] = useState('')
  const [product, setProduct] = useState('')
  const [clientId, setClientId] = useState('')
  const [client, setClient] = useState('')
  const [Unite, setUnite] = useState('')
  const [Ligne, setLigne] = useState('')
  const [Zone, setZone] = useState('')
  const [Atelier, setAtelier] = useState('')
  const [MemberName, setMemberName] = useState('')
  const [MemberID, setMemberID] = useState('')
  const [Role, setRole] = useState('')
  const [validated, setValidated] = useState(false)
  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard>
          <CCardHeader>Détail de projet</CCardHeader>
          <CCardBody>
            <CForm
              className="row g-3 needs-validation"
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              <CCol>
                <CCard className="mb-4">
                  <CCardHeader></CCardHeader>
                  <CCardBody>
                    <CRow className="g-3">
                      <CCol md={5}>
                        <CButtonGroup horizontal role="group" aria-label="Vertical button group">
                          <CButton type="submit" color="primary" size="lg">
                            Enregistrer
                          </CButton>
                          <CButton type="submit" color="dark" size="lg">
                            Valider
                          </CButton>
                        </CButtonGroup>
                      </CCol>
                    </CRow>
                  </CCardBody>
                </CCard>
                <CCard className="mb-4">
                  <CCardHeader>Projet </CCardHeader>
                  <CCardBody>
                    <CRow className="g-3">
                      <CCol md={3}>
                        <CFormLabel>Initiateur</CFormLabel>
                        <CFormInput
                          value={initiateur}
                          onChange={(e) => setInitiateur(e.target.value)}
                        />
                      </CCol>
                      <CCol md={3}>
                        <CFormLabel>Référence</CFormLabel>
                        <CFormInput
                          value={reference}
                          onChange={(e) => setReference(e.target.value)}
                          required
                        />
                      </CCol>
                      <CCol md={3}>
                        <CFormLabel>Préfix</CFormLabel>
                        <CFormSelect value={prefix} onChange={(e) => setPrefix(e.target.value)}>
                          {/* Options de préfixe générées à partir de l'API */}
                          <option value="">Sélectionnez un préfixe</option>
                          <option value="prefix1">Prefix 1</option>
                          <option value="prefix2">Prefix 2</option>
                          <option value="prefix3">Prefix 3</option>
                        </CFormSelect>
                      </CCol>
                      <CCol md={3}>
                        <CFormLabel>Catégories</CFormLabel>
                        <CFormSelect
                          value={categories}
                          onChange={(e) => setCategories(e.target.value)}
                        >
                          {/* Options de catégories générées à partir de l'API */}
                          <option value="">Sélectionnez une catégorie</option>
                          <option value="category1">Catégorie 1</option>
                          <option value="category2">Catégorie 2</option>
                          <option value="category3">Catégorie 3</option>
                        </CFormSelect>
                      </CCol>
                    </CRow>
                  </CCardBody>
                </CCard>
                <CCard className="mb-4">
                  <CRow className="g-4">
                    <CCol md={4}>
                      <CFormLabel>Date Lancement</CFormLabel>
                      <CFormInput
                        type="datetime-local"
                        value={startDateTime}
                        onChange={(e) => setStartDateTime(e.target.value)}
                        required
                      />
                    </CCol>
                    <CCol md={4}>
                      <CFormLabel>Date Début</CFormLabel>
                      <CFormInput
                        type="datetime-local"
                        value={startDateTime}
                        onChange={(e) => setStartDateTime(e.target.value)}
                        required
                      />
                    </CCol>
                    <CCol md={4}>
                      <CFormLabel>Date Fin</CFormLabel>
                      <CFormInput
                        type="datetime-local"
                        value={endDateTime}
                        onChange={(e) => setEndDateTime(e.target.value)}
                      />
                    </CCol>{' '}
                  </CRow>
                </CCard>
                <CCard className="mb-4">
                  <CRow>
                    <CCol md={12}>
                      <CFormLabel className="col-sm-2 col-form-label">Titre de Projet</CFormLabel>
                      <CFormInput
                        value={projectTitle}
                        onChange={(e) => setProjectTitle(e.target.value)}
                        required
                      />
                    </CCol>
                    <CCol md={12}>
                      <CFormLabel className="col-sm-2 col-form-label">
                        Description du projet
                      </CFormLabel>
                      <CFormTextarea
                        value={projectDescription}
                        onChange={(e) => setProjectDescription(e.target.value)}
                        required
                      />
                    </CCol>
                  </CRow>
                </CCard>
                <CCard className="mb-4">
                  <CRow className="g-3">
                    <CCol md={3}>
                      <CFormLabel>ID Produit</CFormLabel>
                      <CFormInput
                        value={productId}
                        onChange={(e) => setProductId(e.target.value)}
                        required
                      />
                    </CCol>
                    <CCol md={3}>
                      <CFormLabel>Produit</CFormLabel>
                      <CFormInput
                        value={product}
                        onChange={(e) => setProduct(e.target.value)}
                        required
                      />
                      <CFormFeedback valid>Looks good!</CFormFeedback>
                    </CCol>
                    <CCol md={3}>
                      <CFormLabel>ID Client</CFormLabel>
                      <CFormInput
                        value={clientId}
                        onChange={(e) => setClientId(e.target.value)}
                        required
                      />
                      <CFormFeedback valid>Looks good!</CFormFeedback>
                    </CCol>
                    <CCol md={3}>
                      <CFormLabel>Client</CFormLabel>
                      <CFormInput
                        value={client}
                        onChange={(e) => setClient(e.target.value)}
                        required
                      />
                      <CFormFeedback valid>Looks good!</CFormFeedback>
                    </CCol>
                  </CRow>
                </CCard>
                <CCard className="mb-4">
                  <CRow className="g-3">
                    <CCol md={3}>
                      <CFormLabel>Unité</CFormLabel>
                      <CFormSelect value={Unite} onChange={(e) => setUnite(e.target.value)}>
                        {/* Options de catégories générées à partir de l'API */}
                        <option value="">Sélectionnez une Unité</option>
                        <option value="category1">Unité 1</option>
                        <option value="category2">Unité 2</option>
                        <option value="category3">Unité 3</option>
                      </CFormSelect>
                    </CCol>
                    <CCol md={3}>
                      <CFormLabel>Unité</CFormLabel>
                      <CFormSelect value={Atelier} onChange={(e) => setAtelier(e.target.value)}>
                        {/* Options de catégories générées à partir de l'API */}
                        <option value="">Sélectionnez une Atelier</option>
                        <option value="category1">Atelier 1</option>
                        <option value="category2">Atelier 2</option>
                        <option value="category3">Atelier 3</option>
                      </CFormSelect>
                      <CFormFeedback valid>Looks good!</CFormFeedback>
                    </CCol>
                    <CCol md={3}>
                      <CFormLabel>Zone</CFormLabel>
                      <CFormSelect value={Zone} onChange={(e) => setZone(e.target.value)}>
                        {/* Options de catégories générées à partir de l'API */}
                        <option value="">Sélectionnez une Zone</option>
                        <option value={Zone}>Zone 1</option>
                        <option value={Zone}>Zone 2</option>
                        <option value={Zone}>Zone 3</option>
                      </CFormSelect>
                      <CFormFeedback valid>Looks good!</CFormFeedback>
                    </CCol>
                    <CCol md={3}>
                      <CFormLabel>Ligne</CFormLabel>
                      <CFormSelect value={Ligne} onChange={(e) => setLigne(e.target.value)}>
                        {/* Options de catégories générées à partir de l'API */}
                        <option value="">Sélectionnez une Ligne</option>
                        <option value={Ligne}>Ligne 1</option>
                        <option value={Ligne}>Ligne 2</option>
                        <option value={Ligne}>Ligne 3</option>
                      </CFormSelect>

                      <CFormFeedback valid>Looks good!</CFormFeedback>
                    </CCol>
                  </CRow>
                </CCard>
              </CCol>
              <CCard className="mb-4">
                <CCardHeader>Equipe </CCardHeader>

                <CContainer>
                  <CRow>
                    <CCol sm={5} md={6}>
                      <CCard className="mb-4">
                        <CCardHeader>Equipe </CCardHeader>
                        <CCardBody>
                          <CCol xs>
                            <CFormLabel className="col-sm-3 col-form-label">Matricule</CFormLabel>
                            <CFormInput
                              value={MemberID}
                              onChange={(e) => setMemberID(e.target.value)}
                              required
                            />
                          </CCol>
                          <CCol xs>
                            <CFormLabel className="col-sm-3 col-form-label">
                              Nom & Prénom
                            </CFormLabel>
                            <CFormInput
                              value={MemberName}
                              onChange={(e) => setMemberName(e.target.value)}
                              required
                            />
                          </CCol>
                          <CCol xs>
                            <CFormLabel>Role</CFormLabel>
                            <CFormSelect value={Role} onChange={(e) => setRole(e.target.value)}>
                              {/* Options de catégories générées à partir de l'API */}
                              <option value="">Sélectionnez une Atelier</option>
                              <option value="Superiveur">Superiveur</option>
                              <option value="Membre">Membre </option>
                              <option value="Pilote">Pilote</option>
                              <option value="Pilote">Co-Pilote</option>
                            </CFormSelect>
                            <CFormFeedback valid>Looks good!</CFormFeedback>
                          </CCol>
                        </CCardBody>
                      </CCard>
                    </CCol>
                    <CCol sm={{ span: 5, offset: 2 }} md={{ span: 6, offset: 0 }}>
                      <CCard className="mb-4">
                        <CCardHeader>Equipe </CCardHeader>
                        <CCardBody>
                          <CCol xs>
                            <CFormLabel className="col-sm-3 col-form-label">Matricule</CFormLabel>
                            <CFormInput
                              value={MemberID}
                              onChange={(e) => setMemberID(e.target.value)}
                              required
                            />
                          </CCol>
                          <CCol xs>
                            <CFormLabel className="col-sm-3 col-form-label">
                              Nom & Prénom
                            </CFormLabel>
                            <CFormInput
                              value={MemberName}
                              onChange={(e) => setMemberName(e.target.value)}
                              required
                            />
                          </CCol>
                          <CCol xs>
                            <CFormLabel>Role</CFormLabel>
                            <CFormSelect value={Role} onChange={(e) => setRole(e.target.value)}>
                              {/* Options de catégories générées à partir de l'API */}
                              <option value="">Sélectionnez une Atelier</option>
                              <option value="Superiveur">Superiveur</option>
                              <option value="Membre">Membre </option>
                              <option value="Pilote">Pilote</option>
                              <option value="Pilote">Co-Pilote</option>
                            </CFormSelect>
                            <CFormFeedback valid>Looks good!</CFormFeedback>
                          </CCol>
                        </CCardBody>
                      </CCard>
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol sm={6} md={5} lg={6}>
                      <CCard className="mb-4">
                        <CCardHeader>Equipe </CCardHeader>
                        <CCardBody>
                          <CCol xs>
                            <CFormLabel className="col-sm-3 col-form-label">Matricule</CFormLabel>
                            <CFormInput
                              value={MemberID}
                              onChange={(e) => setMemberID(e.target.value)}
                              required
                            />
                          </CCol>
                          <CCol xs>
                            <CFormLabel className="col-sm-3 col-form-label">
                              Nom & Prénom
                            </CFormLabel>
                            <CFormInput
                              value={MemberName}
                              onChange={(e) => setMemberName(e.target.value)}
                              required
                            />
                          </CCol>
                          <CCol xs>
                            <CFormLabel>Role</CFormLabel>
                            <CFormSelect value={Role} onChange={(e) => setRole(e.target.value)}>
                              {/* Options de catégories générées à partir de l'API */}
                              <option value="">Sélectionnez une Atelier</option>
                              <option value="Superiveur">Superiveur</option>
                              <option value="Membre">Membre </option>
                              <option value="Pilote">Pilote</option>
                              <option value="Pilote">Co-Pilote</option>
                            </CFormSelect>
                            <CFormFeedback valid>Looks good!</CFormFeedback>
                          </CCol>
                        </CCardBody>
                      </CCard>
                    </CCol>
                    <CCol sm={6} md={{ span: 5, offset: 2 }} lg={{ span: 6, offset: 0 }}>
                      <CCard className="mb-4">
                        <CCardHeader>Equipe </CCardHeader>
                        <CCardBody>
                          <CRow>
                            <CCol xs={12} md={6} xl={6}>
                              <CRow>
                                <CCol sm={12}>
                                  <CImage
                                    align="start"
                                    rounded
                                    src={ReactImg}
                                    width={200}
                                    height={200}
                                  />
                                </CCol>
                                <CCol sm={12}>
                                  <CFormLabel>Matricule</CFormLabel>
                                  <CFormInput
                                    value={MemberID}
                                    onChange={(e) => setMemberID(e.target.value)}
                                    required
                                  />
                                </CCol>
                              </CRow>
                            </CCol>
                          </CRow>

                          <CRow xs={{ cols: 1 }} md={{ cols: 5 }} className="text-center">
                            <CCol xs={{ span: 6 }}></CCol>
                          </CRow>
                          <CRow xs={{ gutter: 2 }}>
                            <CCol xs={{ span: 6 }}></CCol>

                            <CCol xs={{ span: 6 }}>
                              <CFormLabel>Nom & Prénom</CFormLabel>
                              <CFormInput
                                value={MemberName}
                                onChange={(e) => setMemberName(e.target.value)}
                                required
                              />
                            </CCol>
                            <CCol xs={{ span: 6 }}>
                              <CFormLabel>Role</CFormLabel>
                              <CFormSelect value={Role} onChange={(e) => setRole(e.target.value)}>
                                {/* Options de catégories générées à partir de l'API */}
                                <option value="">Sélectionnez une Atelier</option>
                                <option value="Superiveur">Superiveur</option>
                                <option value="Membre">Membre </option>
                                <option value="Pilote">Pilote</option>
                                <option value="Pilote">Co-Pilote</option>
                              </CFormSelect>
                              <CFormFeedback valid>Looks good!</CFormFeedback>
                            </CCol>
                          </CRow>
                        </CCardBody>
                      </CCard>
                    </CCol>
                  </CRow>
                </CContainer>
                <CCardBody></CCardBody>
              </CCard>
            </CForm>
          </CCardBody>
          <CCardFooter>
            <CIcon icon={icon.cilList} size="xl" />
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Project
