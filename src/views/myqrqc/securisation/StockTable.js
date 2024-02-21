import React, { useState } from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CButton,
  CRow,
  CCol,
  CFormTextarea,
  CTable,
  CTableBody,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CFormInput,
} from '@coreui/react';

// EditableStockTable Component
const  StockTable = () => {
  const [stockData, setStockData] = useState([
    { emplacement: 'Matière première', piecesTrie: 23, piecesNC: 2 },
    { emplacement: 'En cours de prod.', piecesTrie: 233, piecesNC: 343 },
    { emplacement: 'Stock en magasin', piecesTrie: 434, piecesNC: 43 },
    // ...add other initial stock data
  ]);

  const updateField = (index, field, value) => {
    const updatedStockData = stockData.map((item, i) =>
      i === index ? { ...item, [field]: parseFloat(value) || 0 } : item
    );
    setStockData(updatedStockData);
  };

  return (
    <CTable striped hover>
      <CTableHead>
        <CTableRow>
          <CTableHeaderCell>Emplacement</CTableHeaderCell>
          <CTableHeaderCell>N. Pièces triées</CTableHeaderCell>
          <CTableHeaderCell>N. Pièces NC</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        {stockData.map((row, index) => (
          <CTableRow key={index}>
            <CTableDataCell>{row.emplacement}</CTableDataCell>
            <CTableDataCell>
              <CFormInput
                type="number"
                value={row.piecesTrie}
                onChange={(e) => updateField(index, 'piecesTrie', e.target.value)}
              />
            </CTableDataCell>
            <CTableDataCell>
              <CFormInput
                type="number"
                value={row.piecesNC}
                onChange={(e) => updateField(index, 'piecesNC', e.target.value)}
              />
            </CTableDataCell>
          </CTableRow>
        ))}
      </CTableBody>
    </CTable>
  );
};
