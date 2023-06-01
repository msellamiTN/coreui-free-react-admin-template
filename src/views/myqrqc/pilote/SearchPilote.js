import React, { Component } from 'react'
import { render } from 'react-dom'
import {
  CCardHeader,
  CCol,
  CInputGroup,
  CInputGroupPrepend,
  CFormGroup,
  CSelect,
  CCollapse,
  CButton,
  CInput,
  CCard,
  CCardBody,
  CDataTable,
} from '@coreui/react'
import PiloteDataService from '../../../services/service.pilote'
import CIcon from '@coreui/icons-react'
import SweetAlert from 'sweetalert2-react'
import axios from 'axios'
let url_api = 'http://127.0.0.1:8000/api/'
let url_api_list_pilote = url_api + 'pilotes/'
export default class SearchPilote extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pilotes: [],
      search: '',
      showResults: false,
      alert: null,
      fields: [
        'id',
        'nom',
        'poste',
        'tel',
        'adresse',
        'email',
        'login',
        'password',
        'categorie',
        'photo',
      ],
    }

    this.handleView = this.handleView.bind(this)
    //.handleEdit = this.handleEdit.bind(this);
    this.onDelete = this.onDelete.bind(this)
    this.onchange = this.onchange.bind(this)
    this.onSearchchange = this.onSearchchange.bind(this)
  }
  onSearchchange = (e) => {
    this.setState({ search: e.target.value })
    //alert(e.target.value);
    this.getPiloteByName(e.target.value)
  }
  getPiloteByName(name) {
    PiloteDataService.get(name)
      .then((response) => {
        this.setState({ pilotes: response.data })
        this.setState({ showResults: true })
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  componentDidMount() {
    axios({
      method: 'get',
      url: url_api_list_pilote,
      withCredentials: false,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then((response) => {
        if (response && response.data) {
          this.setState({ clients: response.data })
        }
      })
      .catch((error) => console.log(error))
  }
  popupdel(Code) {
    alert(Code)
    return (
      <SweetAlert
        warning
        showCancel
        confirmBtnText="Supprimer"
        confirmBtnBsStyle="danger"
        cancelBtnBsStyle="Annuler"
        title="Êtes-vous sûr de supprimer ce client ?"
        onConfirm={() => this.ondelete(Code)}
        onCancel={() => this.onCancel()}
      >
        Vous ne pouvez pas restaurer ce client !
      </SweetAlert>
    )
    const getAlert = () => (
      <SweetAlert
        warning
        showCancel
        confirmBtnText="Supprimer"
        confirmBtnBsStyle="danger"
        cancelBtnBsStyle="Annuler"
        title="Êtes-vous sûr de supprimer ce client ?"
        onConfirm={() => this.ondelete(Code)}
        onCancel={() => this.onCancel()}
      >
        Vous ne pouvez pas restaurer ce client !
      </SweetAlert>
    )
    this.setState({
      alert: getAlert(),
    })
  }
  onCancel() {
    this.setState({
      alert: null,
    })
  }
  onDelete(Code) {
    axios.delete(url_api_list_pilote + Code).then(
      function (clients) {
        this.setState({
          clients: clients.records,
        })
        this.setState({
          alert: null,
        })
        /*swal("Êtes-vous sûr de supprimer ce client ?", {
          buttons: ["Annuler", "Supprimer"],*/
        window.location.reload()
      }.bind(this),
    )
  }
  onchange = (e) => {
    this.setState({ search: e.target.value })
  }
  handleView(Code) {
    try {
      console.log('Voir client')
      this.props.history.push('url_api_list_pilote' + Code)
    } catch (error) {
      this.setState({ error })
    }
  }

  render() {
    let { pilotes } = this.state
    const { search } = this.state

    const filteredPilotes = pilotes.filter((pilote) => {
      return pilote.nom.toLowerCase().indexOf(search.toLowerCase()) !== -1
    })

    return (
      <div className="animated fadeIn">
        <CCard>
          <CCardHeader>Equipe de participants au projet QRQC</CCardHeader>
          <CCardBody>
            <CFormGroup row>
              <CCol md="12">
                <CInputGroup>
                  <CInputGroupPrepend>
                    <CButton type="button" color="primary">
                      <CIcon name="cil-magnifying-glass" /> Search
                    </CButton>
                  </CInputGroupPrepend>
                  <CInput
                    type="search"
                    onChange={this.onSearchchange}
                    id="input1-group2"
                    name="input1-group2"
                    placeholder="Ajouter Membre"
                  />
                </CInputGroup>
              </CCol>
            </CFormGroup>
            <CCollapse show={filteredPilotes.size != 0}>
              <CDataTable
                items={filteredPilotes}
                fields={this.fields}
                //   itemsPerPage={5}
                //  pagination
                //columnFilter
                // tableFilter
                // footer
                //  hover
                //  sorter
                scopedSlots={{
                  Role: (item) => (
                    <td>
                      <CFormGroup>
                        <CFormGroup row>
                          <CCol xs="12" md="9">
                            <CSelect custom name="Role" id="select" onChange={this.handleChange}>
                              <option value="0">Choisir un Rôle</option>
                              <option value="Supeviseur">Supeviseur</option>
                              <option value="Membre">Membre</option>
                              <option value="Copilote">Copilote</option>
                            </CSelect>
                          </CCol>
                        </CFormGroup>
                      </CFormGroup>
                    </td>
                  ),
                  Action: (item) => (
                    <td>
                      <CButton
                        onClick={this.AdTeamMember(item.id)}
                        type="add"
                        size="sm"
                        color="primary"
                      >
                        <CIcon name="cil-scrubber" /> Ajouter (({item.poste})
                      </CButton>
                    </td>
                  ),
                }}
              />
            </CCollapse>
          </CCardBody>
        </CCard>
      </div>
    )
  }
}
