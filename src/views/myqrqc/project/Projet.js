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
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CAvatar,
  CCollapse,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CToastBody,
  CToast,
  CToastHeader,
  CToaster,
} from '@coreui/react'
import React, { useState, useEffect, useCallback, useRef } from 'react'
import CIcon from '@coreui/icons-react'
import * as icon from '@coreui/icons'
import avatar1 from 'src/assets/images/avatars/1.jpg'
import PiloteDataService from 'src/services/PiloteDataService'
import CategoryDataService from 'src/services/CategoryDataService'
import LigneDataService from 'src/services/LigneDataService'
import AtelierDataService from 'src/services/AtelierDataService'
import ZoneDataService from 'src/services/ZoneDataService'
import UniteDataService from 'src/services/UniteDataService'
import ClientDataService from 'src/services/ClientDataService'
import ProduitDataService from 'src/services/ProduitDataService'
import PrefixDataService from 'src/services/PrefixDataService'
import SousCategoryDataService from 'src/services/SousCategoryDataService'
import ProjectDataService from 'src/services/ProjectDataService'
import EquipeDataService from 'src/services/EquipeDataService'
import ToolsDataService from 'src/services/ToolsDataService'
const Project = () => {
  const [initiateur, setInitiateur] = useState(JSON.parse(localStorage.getItem('initiateur')) || {})
  const [initiateurName, setInitiateurName] = useState('')
  const [reference, setReference] = useState('')
  const [prefixes, setPrefix] = useState([])
  const [prefix, setPrefixe] = useState('')
  const [startDateTime, setStartDateTime] = useState('')
  const [endDateTime, setEndDateTime] = useState('')
  const [projectTitle, setProjectTitle] = useState('')
  const [projectDescription, setProjectDescription] = useState('')
  const [souscategories, setSousCategories] = useState([])
  const [souscategorie, setSousCategorie] = useState('')
  const [categorie, setCategorie] = useState('')
  const [categories, setCategories] = useState([])
  const [client, setClient] = useState('')
  const [clients, setClients] = useState([])
  const [product, setProduct] = useState('')
  const [produits, setProducts] = useState([])
  const [validated, setValidated] = useState(false)
  const [pilotes, setPilotes] = useState([])
  const [equipes, setEquipes] = useState([])
  const [ateliers, setAteliers] = useState([])
  const [zones, setZones] = useState([])
  const [unites, setUnites] = useState([])
  const [lignes, setLignes] = useState([])
  const [roles, setRoles] = useState([])
  const [unite, setUnite] = useState('')
  const [atelier, setAtelier] = useState('')
  const [zone, setZone] = useState('')
  const [ligne, setLigne] = useState('')
  const [visible, setVisible] = useState(false)
  const [visibleEQ, setVisibleEQ] = useState(false)
  const [visiblePR, setvisiblePR] = useState(false)
  const [etat, setEtat] = useState(true)
  const [visibleSave, setVisibleSave] = useState(false)
  const [role, setRole] = useState('')
  const [message, setMessage] = useState('Enregistement du projet avec Succès!!!')
  const [LastProject, setLastProject] = useState(0)
  const [isSaving, setIsSaving] = useState(false)
  const [isSaved, setIsSaved] = useState(false)
  //generate Reference ID Unique
  const getLastIDProject = async () => {
    const lastprojectid = await ToolsDataService.getLastIDProject()
    const new_LastProjectID = parseInt(lastprojectid) + 1
    setLastProject(new_LastProjectID)
    alert(LastProject)
    return new_LastProjectID
  }

  //This the toast notification for saving the project
  const [toast, addToast] = useState(0)
  const toaster = useRef()
  const exampleToast = (
    <CToast>
      <CToastHeader closeButton>
        <svg
          className="rounded me-2"
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          role="img"
        >
          <path
            fill="currentColor"
            d="M7 2H3C2.44772 2 2 2.44772 2 3V15C2 15.5523 2.44772 16 3 16H13C13.5523 16 14 15.5523 14 15V11H12V14H4V4H12V7H14V3C14 2.44772 13.5523 2 13 2H7ZM12 4V7H8V4H12ZM4 14H10V9H12V16H4V14Z"
          />
        </svg>
        <div className="fw-bold me-auto">Enregistrement Projet</div>
        <small>{new Date().toISOString()}</small>
      </CToastHeader>
      <CToastBody>{message}</CToastBody>
    </CToast>
  )
  const handleSubmit = async (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      setVisibleSave(false)
      setValidated(true)
      event.preventDefault()
      event.stopPropagation()
    } else {
      setValidated(true)
      setVisibleSave(true)
      event.preventDefault()
      event.stopPropagation()
    }
  }
  const SaveProject = async () => {
    if (isSaving) {
      // Project is already being saved, do not proceed
      return
    }

    try {
      setIsSaving(true)
      const lastIDProject = await getLastIDProject()
      const projetData = {
        reference: `${prefix}/${reference}/${lastIDProject}`,
        zone: zone,
        observations: projectDescription,
        codecli: client.codecli,
        appris: '',
        idligne: parseInt(ligne),
        idproduit: product.idproduit,
        prefixe: prefix,
        titre: projectTitle,
        datelancement: new Date(startDateTime).toISOString().split('T')[0],
        heurelancement: new Date(startDateTime).toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }),
        datedebut: new Date(startDateTime).toISOString().split('T')[0],
        datefin: new Date(endDateTime).toISOString().split('T')[0],
        valide: false,
        nbrjourgrapheevolutionprob: 0,
        unite: parseInt(unite),
        atelier: parseInt(atelier),
        categorie: parseInt(categorie),
        souscategorie: parseInt(souscategorie),
        fta_valide: false,
        actionsecurisationvalide: false,
        datevalidationprojet: null,
        datevalidationfta: null,
        datevalidationactionsecurisation: null,
        idsoucategorie: parseInt(souscategorie),
        idgraphactionsecurisaation: 0,
        initiateur: initiateur.idpilote,
        cloture: false,
        scaledfrom: '',
        scaledto: 0,
      }

      console.log(projetData)
      try {
        const response = await ProjectDataService.createProject(projetData)
        console.log(response)
        setVisibleSave(false)
        const myproject = await ProjectDataService.getProjectByReference(projetData.reference)
        console.log(myproject)
        await handleProjetMember(myproject)
        await EquipeDataService.saveEquipeMembers(equipes, myproject)
        setMessage('Enregistement du projet avec Succès!!!')
        // Project saved successfully
        setIsSaved(true)
      } catch (error) {
        setMessage('Echec Enregistement du projet ???' + error)
        console.log(error)
      }
    } catch (error) {
      console.log(error)
    }

    addToast(exampleToast)
  }
  useEffect(() => {
    setInitiateur(JSON.parse(localStorage.getItem('initiateur')) || {})
    const fetchPilotes = async () => {
      try {
        const response = await PiloteDataService.getAllPilote()
        setPilotes(response)
      } catch (error) {
        console.log(error)
      }
    }
    const fetchPrefixes = async () => {
      try {
        const response = await PrefixDataService.getAllPrefixes()
        setPrefix(response)
      } catch (error) {
        console.log(error)
      }
    }
    const fetchCategories = async () => {
      try {
        const response = await CategoryDataService.getAllCategories()
        setCategories(response)
      } catch (error) {
        console.log(error)
      }
    }
    const fetchSousCategories = async () => {
      try {
        if (categorie) {
          const response = await SousCategoryDataService.getSousCategorie(categorie)
          setSousCategories(response)
        }
      } catch (error) {
        console.log(error)
      }
    }
    const fetchUnites = async () => {
      try {
        const response = await UniteDataService.getAllUnites()
        setUnites(response)
      } catch (error) {
        console.log(error)
      }
    }
    const fetchAteliers = async () => {
      try {
        if (unite) {
          const response = await AtelierDataService.getAteliersByUnite(unite)
          setAteliers(response)
        }
      } catch (error) {
        console.log(error)
      }
    }

    const fetchZones = async () => {
      try {
        if (atelier) {
          const response = await ZoneDataService.getZonesByAtelier(atelier)
          setZones(response)
        }
      } catch (error) {
        console.log(error)
      }
    }

    const fetchLignes = async () => {
      try {
        if (zone) {
          const response = await LigneDataService.getLignesByZone(zone)
          setLignes(response)
        }
      } catch (error) {
        console.log(error)
      }
    }
    const fetchRoles = async () => {
      try {
        const response = await ToolsDataService.getRoles()
        setRoles(response)
      } catch (error) {
        console.log(error)
      }
    }
    fetchSousCategories()
    fetchPrefixes()
    fetchPilotes()
    fetchCategories()
    fetchUnites()
    fetchAteliers()
    fetchZones()
    fetchLignes()
    fetchRoles()
  }, [unite, atelier, zone, ligne, categorie])

  const handleChange = useCallback(async (e) => {
    const pilote = e.target.value
    //alert(value)
    if (pilote && pilote !== '') {
      try {
        const response = await PiloteDataService.getPiloteByName(pilote)
        setPilotes(response)
        setEtat(true)
        setVisibleEQ(!visibleEQ)
      } catch (error) {
        console.log(error)
      }
    }
  }, [])
  const getClientInfo = useCallback(async (e) => {
    const client = e.target.value
    //alert(client)
    if (client) {
      try {
        const response = await ClientDataService.getClient(client)
        setClients(response)
        setVisible(true)
      } catch (error) {
        console.log(error)
      }
    } else {
      setVisible(false)
    }
  }, [])
  const getProductInfo = useCallback(async (e) => {
    const designation = e.target.value
    //alert(value)
    if (designation && designation !== '') {
      try {
        const response = await ProduitDataService.getProduiyByDesgn(designation)
        setProducts(response)
        setvisiblePR(!visiblePR)
      } catch (error) {
        console.log(error)
      }
    }
  }, [])

  const handleSetProduit = (product) => {
    setProduct(product)
    setvisiblePR(!visiblePR)
  }
  const handleSetClient = (client) => {
    setClient(client)
    setVisible(!visible)
  }
  const handleAddMember = (pilote) => {
    if (!equipes.find((member) => member.idpilote === pilote.idpilote)) {
      if (pilote.role === '') {
        alert('error')
      }
      const updatedPilotes = pilotes.map((p) =>
        p.idpilote === pilote.idpilote ? { ...p, role: role } : p,
      )
      setPilotes(updatedPilotes)
      setEquipes([...equipes, pilote])
      setVisibleEQ(!visibleEQ)
      setEtat(!etat)
    }
  }

  const handleRemoveMember = (pilote) => {
    setEquipes((prevEquipes) => prevEquipes.filter((member) => member.idpilote !== pilote.idpilote))
  }
  const handleRoleChange = (e, pilote) => {
    const updatedPilotes = pilotes.map((member) =>
      member.idpilote === pilote.idpilote ? { ...member, role: e.target.value } : member,
    )
    setRole(e.target.value)
    setPilotes(updatedPilotes)
    setEtat(!etat)
  }
  const handleProjetMember = (myproject) => {
    console.log('projet :' + myproject.reference)
    const updatedPilotes = equipes.map((member) => ({
      ...member,
      reference: myproject.reference,
      idprojet: myproject.idprojet,
    }))
    console.log(updatedPilotes)
    setEquipes(updatedPilotes)
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
              <CToaster ref={toaster} push={toast} placement="top-end" />
              <CCol>
                <CCard className="mb-4">
                  <CCardHeader></CCardHeader>
                  <CCardBody>
                    <CRow className="g-3">
                      <CCol md={5}>
                        <CButtonGroup role="group" aria-label="Vertical button group">
                          <CButton type="submit" color="primary" size="lg" disabled={isSaving}>
                            Enregistrer
                          </CButton>
                          <CButton type="submit" color="dark" size="lg">
                            Valider
                          </CButton>
                        </CButtonGroup>
                      </CCol>
                      <CModal visible={visibleSave} onClose={() => setVisibleSave(false)}>
                        <CModalHeader onClose={() => setVisibleSave(false)}>
                          <CModalTitle>MYQRQC : Enregistement</CModalTitle>
                        </CModalHeader>
                        <CModalBody>Enregistrement Projet</CModalBody>
                        <CModalFooter>
                          <CButton color="secondary" onClick={() => setVisibleSave(false)}>
                            Close
                          </CButton>
                          <CButton color="primary" onClick={SaveProject}>
                            Save changes
                          </CButton>
                        </CModalFooter>
                      </CModal>
                    </CRow>
                  </CCardBody>
                </CCard>
                <CCard className="mb-4">
                  <CCardHeader>Projet </CCardHeader>
                  <CCardBody>
                    <CRow className="g-3">
                      <CCol md={2}>
                        <CFormLabel>Initiateur</CFormLabel>
                        <CFormInput
                          value={initiateur.nom}
                          onChange={(e) => setInitiateurName(e.target.value)}
                          readOnly
                        />
                      </CCol>
                      <CCol md={2}>
                        <CFormLabel>Référence</CFormLabel>
                        <CFormInput
                          value={reference}
                          onChange={(e) => setReference(e.target.value)}
                          required
                        />
                      </CCol>
                      <CCol md={2}>
                        <CFormLabel>Préfix</CFormLabel>
                        <CFormSelect value={prefix} onChange={(e) => setPrefixe(e.target.value)}>
                          {/* Options de préfixe générées à partir de l'API */}
                          <option value="">Préfixe</option>
                          {prefixes.map((prefixe) => (
                            <option key={prefixe.prefixe} value={prefixe.prefixe}>
                              {prefixe.prefixe}
                            </option>
                          ))}
                        </CFormSelect>
                      </CCol>
                      <CCol md={3}>
                        <CFormLabel>Catégories</CFormLabel>
                        <CFormSelect
                          value={categorie}
                          onChange={(e) => setCategorie(e.target.value)}
                        >
                          {/* Options for categories */}
                          <option value="">Select a category</option>
                          {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                              {category.categorie}
                            </option>
                          ))}
                        </CFormSelect>
                      </CCol>
                      <CCol md={3}>
                        <CFormLabel>Sous Catégorie</CFormLabel>
                        <CFormSelect
                          value={souscategorie}
                          onChange={(e) => setSousCategorie(e.target.value)}
                        >
                          <option value="">Sélectionnez une Sous Catégorie</option>
                          {souscategories.map((souscategorie) => (
                            <option key={souscategorie.id} value={souscategorie.id}>
                              {souscategorie.souscategorie}
                            </option>
                          ))}
                        </CFormSelect>
                        <CFormFeedback invalid>Merci de remplir ce champs !!!</CFormFeedback>
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
                      <CFormLabel>Référence Produit</CFormLabel>
                      <CFormInput
                        onChange={(e) => setProduct(e.target.value)}
                        value={product.idproduit}
                        required
                        readOnly
                      />
                      <CFormFeedback invalid>Merci de remplir ce champs !!!</CFormFeedback>
                    </CCol>
                    <CCol md={3}>
                      <CFormLabel>Produit</CFormLabel>
                      <CFormInput value={product.designation} onChange={getProductInfo} required />
                      <CFormFeedback invalid>Merci de remplir ce champs !!!</CFormFeedback>
                    </CCol>
                    <CCollapse visible={visiblePR}>
                      <CContainer>
                        <CRow>
                          {produits.map((produit) => (
                            <CCol sm={5} md={6} key={produit.idproduit}>
                              <CCard className="mb-4">
                                <CCardHeader>Produit </CCardHeader>
                                <CButton onClick={() => handleSetProduit(produit)}>Select</CButton>
                                <CCardBody>
                                  <CCol xs>
                                    <CFormLabel className="col-sm-3 col-form-label">
                                      Réference
                                    </CFormLabel>
                                    <CFormInput value={produit.idproduit} readOnly />
                                  </CCol>
                                  <CCol xs>
                                    <CFormLabel className="col-sm-3 col-form-label">
                                      Désignation
                                    </CFormLabel>
                                    <CFormInput value={produit.designation} readOnly />
                                  </CCol>
                                </CCardBody>
                              </CCard>
                            </CCol>
                          ))}
                        </CRow>
                      </CContainer>
                    </CCollapse>
                    <CCol md={3}>
                      <CFormLabel>ID Client</CFormLabel>
                      <CFormInput value={client.codecli} required />
                      <CFormFeedback invalid>Merci de remplir ce champs !!!</CFormFeedback>
                    </CCol>
                    <CCol md={3}>
                      <CFormLabel>Client</CFormLabel>
                      <CFormInput value={client.nom} onChange={getClientInfo} required />
                      <CFormFeedback invalid>Merci de remplir ce champs !!!</CFormFeedback>
                    </CCol>
                    <CCollapse visible={visible}>
                      <CContainer>
                        <CRow>
                          {clients.map((client) => (
                            <CCol sm={5} md={6} key={client.idclient}>
                              <CCard className="mb-4">
                                <CCardHeader>Client </CCardHeader>
                                <CButton onClick={() => handleSetClient(client)}>Select</CButton>
                                <CCardBody>
                                  <CCol xs>
                                    <CFormLabel className="col-sm-3 col-form-label">
                                      ID Client
                                    </CFormLabel>
                                    <CFormInput value={client.codecli} readOnly />
                                  </CCol>
                                  <CCol xs>
                                    <CFormLabel className="col-sm-3 col-form-label">
                                      Nom & Prénom
                                    </CFormLabel>
                                    <CFormInput value={client.nom} readOnly />
                                    <CFormInput value={client.adresse} readOnly />
                                  </CCol>
                                </CCardBody>
                              </CCard>
                            </CCol>
                          ))}
                        </CRow>
                      </CContainer>
                    </CCollapse>
                  </CRow>
                </CCard>
                <CCard className="mb-4">
                  <CRow className="g-3">
                    <CCol md={3}>
                      <CFormLabel>Unité</CFormLabel>
                      <CFormSelect value={unite} onChange={(e) => setUnite(e.target.value)}>
                        {/* Options for Sélectionnez une Unité */}
                        <option value="">Sélectionnez une Unité</option>
                        {unites.map((unite) => (
                          <option key={unite.id} value={unite.id}>
                            {unite.unite}
                          </option>
                        ))}
                      </CFormSelect>
                    </CCol>

                    <CCol md={3}>
                      <CFormLabel>Atelier</CFormLabel>
                      <CFormSelect value={atelier} onChange={(e) => setAtelier(e.target.value)}>
                        <option value="">Sélectionnez une Atelier</option>
                        {ateliers.map((atelier) => (
                          <option key={atelier.idatelier} value={atelier.idatelier}>
                            {atelier.atelier}
                          </option>
                        ))}
                      </CFormSelect>
                      <CFormFeedback invalid>Merci de remplir ce champs !!!</CFormFeedback>
                    </CCol>

                    <CCol md={3}>
                      <CFormLabel>Zone</CFormLabel>
                      <CFormSelect value={zone} onChange={(e) => setZone(e.target.value)}>
                        <option value="">Sélectionnez une Zone</option>
                        {zones.map((zone) => (
                          <option key={zone.idzone} value={zone.idzone}>
                            {zone.zone}
                          </option>
                        ))}
                      </CFormSelect>
                      <CFormFeedback invalid>Merci de remplir ce champs !!!</CFormFeedback>
                    </CCol>
                    <CCol md={3}>
                      <CFormLabel>Ligne</CFormLabel>
                      <CFormSelect value={ligne} onChange={(e) => setLigne(e.target.value)}>
                        <option value="">Sélectionnez une Ligne</option>
                        {lignes.map((ligne) => (
                          <option key={ligne.idligne} value={ligne.idligne}>
                            {ligne.ligne}
                          </option>
                        ))}
                      </CFormSelect>
                      <CFormFeedback invalid>Merci de remplir ce champs !!!</CFormFeedback>
                    </CCol>
                  </CRow>
                </CCard>
              </CCol>
              <CCard className="mb-4">
                <CCardHeader>Equipe </CCardHeader>
                <CCard className="mb-4">
                  <CCardHeader>Equipe </CCardHeader>
                  <CCardBody>
                    <CButtonGroup role="group" aria-label="Vertical button group">
                      <CFormInput type="search" onChange={handleChange}></CFormInput>
                      <CButton type="button" onClick={handleChange}>
                        OK
                      </CButton>
                    </CButtonGroup>
                  </CCardBody>
                  <CCollapse visible={visibleEQ}>
                    <CContainer>
                      <CRow>
                        {pilotes.map((pilote) => (
                          <CCol sm={5} md={6} key={pilote.idpilote}>
                            <CCard className="mb-4">
                              <CCardHeader>Equipe </CCardHeader>
                              <CButton onClick={() => handleAddMember(pilote)} disabled={etat}>
                                Ajouter Membre
                              </CButton>
                              <CCardBody>
                                <CCol xs>
                                  <CFormLabel className="col-sm-3 col-form-label">
                                    Matricule
                                  </CFormLabel>
                                  <CFormInput value={pilote.idpilote} readOnly />
                                </CCol>
                                <CCol xs>
                                  <CFormLabel className="col-sm-3 col-form-label">
                                    Nom & Prénom
                                  </CFormLabel>
                                  <CFormInput value={pilote.nom} readOnly />
                                  <CFormLabel className="col-sm-3 col-form-label">
                                    Fonction
                                  </CFormLabel>
                                  <CFormInput value={pilote.poste} readOnly />
                                </CCol>
                                <CCol xs>
                                  <CFormLabel className="col-sm-3 col-form-label">Rôle</CFormLabel>
                                  <CFormSelect
                                    value={pilote.role}
                                    onChange={(e) => handleRoleChange(e, pilote)}
                                    key={pilote.role}
                                    onSelect={handleRoleChange}
                                  >
                                    {roles.map((role) => (
                                      <option key={role.idrole} value={role.idrole}>
                                        {role.role}
                                      </option>
                                    ))}
                                  </CFormSelect>
                                  <CFormFeedback invalid>
                                    Merci de remplir ce champs !!!
                                  </CFormFeedback>
                                </CCol>
                              </CCardBody>
                            </CCard>
                          </CCol>
                        ))}
                      </CRow>
                    </CContainer>
                  </CCollapse>
                </CCard>
                <CContainer>
                  <CTable align="middle" className="mb-0 border" hover responsive>
                    <CTableHead color="light">
                      <CTableRow>
                        <CTableHeaderCell className="text-center">
                          <CIcon icon={icon.cilPeople} />
                        </CTableHeaderCell>
                        <CTableHeaderCell>Matricule</CTableHeaderCell>
                        <CTableHeaderCell>Nom & Prenom</CTableHeaderCell>
                        <CTableHeaderCell className="text-center">Tél</CTableHeaderCell>
                        <CTableHeaderCell className="text-center">Poste</CTableHeaderCell>
                        <CTableHeaderCell>Role</CTableHeaderCell>
                        <CTableHeaderCell>Action</CTableHeaderCell>
                      </CTableRow>
                    </CTableHead>
                    <CTableBody>
                      {equipes.map((membre) => (
                        <CTableRow v-for="item in tableItems" key={membre.idpilote}>
                          <CTableDataCell className="text-center">
                            <CAvatar size="md" src={avatar1} />
                          </CTableDataCell>
                          <CTableDataCell>
                            <div>{membre.idpilote}</div>
                          </CTableDataCell>
                          <CTableDataCell>
                            <div className="clearfix">
                              <div className="float-start">
                                <strong>{membre.nom}</strong>
                              </div>
                            </div>
                          </CTableDataCell>
                          <CTableDataCell className="text-center">
                            <CIcon size="xl" icon={icon.cilPhone} title={membre.tel} />
                          </CTableDataCell>
                          <CTableDataCell>
                            <div className="small text-medium-emphasis">Fonction</div>
                            <strong>{membre.poste}</strong>
                          </CTableDataCell>
                          <CTableDataCell>
                            <div className="small text-medium-emphasis">Role</div>
                            <strong>{membre.role}</strong>
                          </CTableDataCell>

                          <CTableDataCell>
                            <div className="small text-medium-emphasis">
                              <CIcon size="xl" icon={icon.cilAddressBook} title={membre.tel} />
                              <CButton onClick={() => handleRemoveMember(membre)}>
                                Supprimer
                              </CButton>
                            </div>
                          </CTableDataCell>
                        </CTableRow>
                      ))}
                    </CTableBody>
                  </CTable>
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
