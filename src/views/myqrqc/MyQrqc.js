import React, { useState } from 'react'
import { CCard, CCardBody, CTabContent, CTabPane, CNav, CNavItem, CNavLink } from '@coreui/react'
import '@glideapps/glide-data-grid/dist/index.css'
import Project from './project/Projet'
import ClientView from './clientview/ClientView'
import InternaltView from './internalview/InternaltView'
const MyQrqc = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)
  const initiateur = 'MSELLAMI'

  const [activeKey, setActiveKey] = useState(1)
  return (
    <CCard className="mb-4">
      <CCardBody>
        <>
          <CNav variant="tabs" role="tablist">
            <CNavItem>
              <CNavLink href="#/MyQrqc" active={activeKey === 1} onClick={() => setActiveKey(1)}>
                Projet
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="#/MyQrqc" active={activeKey === 2} onClick={() => setActiveKey(2)}>
                Vue Client
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="#/MyQrqc" active={activeKey === 3} onClick={() => setActiveKey(3)}>
                Vue Createur
              </CNavLink>
            </CNavItem>
          </CNav>
          <CTabContent>
            <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 1}>
              <Project />
            </CTabPane>
            <CTabPane role="tabpanel" aria-labelledby="profile-tab" visible={activeKey === 2}>
              <ClientView />
            </CTabPane>
            <CTabPane role="tabpanel" aria-labelledby="contact-tab" visible={activeKey === 3}>
              <InternaltView />
            </CTabPane>
          </CTabContent>
        </>
      </CCardBody>
    </CCard>
  )
}

export default MyQrqc
