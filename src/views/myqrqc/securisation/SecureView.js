import React from 'react'
import {
  CButton,
  CBreadcrumb,
  CBreadcrumbItem,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CFormInput,
  CFormTextarea,
  CChartBar,
  CCardBody,
  CCardHeader,
  CCard,
  CRow,
  CCol,
} from '@coreui/react'
import StockTable from './StockTable'
const SecureView = () => {
  const [tableRows, setTableRows] = useState([
    {
      id: 1,
      niveauSecurisation: '',
      action: '',
      pilote: '',
      delai: '',
      status: '',
      evidence: '',
      fichierJoint: '',
    },
  ])

  const handleRowChange = (index, field, value) => {
    const newTableRows = [...tableRows]
    newTableRows[index][field] = value
    setTableRows(newTableRows)
  }

  const addTableRow = () => {
    setTableRows([
      ...tableRows,
      {
        id: tableRows.length + 1,
        niveauSecurisation: '',
        action: '',
        pilote: '',
        delai: '',
        status: '',
        evidence: '',
        fichierJoint: '',
      },
    ])
  }
  return (
    <div>
      {/* Breadcrumb Navigation */}
      <CBreadcrumb>
        <CBreadcrumbItem active>Home</CBreadcrumbItem>
        {/* ... additional breadcrumb items */}
      </CBreadcrumb>

      {/* Action Buttons */}
      <div style={{ marginBottom: '1rem' }}>
        <CButton color="primary">Nouveau</CButton>
        <CButton color="success">Enregistrer</CButton>
        <CButton color="info">Valider</CButton>
        {/* ... additional buttons */}
      </div>

      {/* Tabs */}
      <CNav variant="tabs">
        <CNavItem>
          <CNavLink active>Actions de sécurisation</CNavLink>
        </CNavItem>
        {/* ... additional nav items */}
      </CNav>

      <CTabContent>
        <CTabPane visible>
          {/* Immediate Securitization Actions Table */}
          <CRow>
            <CCol>
              <CCard>
                <CCardHeader>ACTIONS DE SÉCURISATION IMMÉDIATE</CCardHeader>
                <CCardBody>
                  <CTable striped>
                    <CTableHead>
                      <CTableRow>
                        <CTableHeaderCell>N°</CTableHeaderCell>
                        <CTableHeaderCell>Niveau sécurisation</CTableHeaderCell>
                        <CTableHeaderCell>Action</CTableHeaderCell>
                        <CTableHeaderCell>Pilote</CTableHeaderCell>
                        <CTableHeaderCell>Délai</CTableHeaderCell>
                        <CTableHeaderCell>Status</CTableHeaderCell>
                        <CTableHeaderCell>Evidence</CTableHeaderCell>
                        <CTableHeaderCell>Fichier Joint</CTableHeaderCell>
                      </CTableRow>
                    </CTableHead>
                    <CTableBody>
                      {tableRows.map((row, index) => (
                        <CTableRow key={row.id}>
                          <CTableDataCell>{row.id}</CTableDataCell>
                          <CTableDataCell>
                            <CFormInput
                              type="text"
                              value={row.niveauSecurisation}
                              onChange={(e) =>
                                handleRowChange(index, 'niveauSecurisation', e.target.value)
                              }
                            />
                          </CTableDataCell>
                          {/* ... other cells with inputs */}
                        </CTableRow>
                      ))}
                    </CTableBody>
                  </CTable>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>

          {/* Verification / Triage of Stock Table */}
          {/* This would be similar to the Immediate Securitization Actions Table */}

          {/* Learnings from Triage Text Area */}
          <CRow>
            <CCol>
              <CFormTextarea
                id="learnings-triage"
                rows="5"
                placeholder="QU'AVEZ-VOUS APPRIS DU TRI ?"
              />
            </CCol>
          </CRow>
          {/* EditableStockTable Component */}
          <CRow>
            <CCol>
              <StockTable />
            </CCol>
          </CRow>                      
          {/* Action Effectiveness Validation Chart */}
          <CRow>
            <CCol>
              <CChartBar
                data={{
                  labels: 'Data labels',
                  datasets: [
                    {
                      label: 'Client',
                      backgroundColor: '#f87979',
                      data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
                    },
                    // ... more datasets
                  ],
                }}
                options={{
                  tooltips: {
                    enabled: true,
                  },
                }}
              />
            </CCol>
          </CRow>
        </CTabPane>
      </CTabContent>
    </div>
  )
}

export default SecureView
