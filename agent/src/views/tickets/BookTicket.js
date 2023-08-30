import React, { useEffect, useState } from 'react'
import "./BookTicket.css"
import { CButton, CCard, CCol, CForm, CFormCheck, CFormInput, CFormLabel, CFormTextarea, CRow, CWidgetStatsB } from '@coreui/react';
import { getApiCall, postApiCall } from 'src/services/AppSetting';
import { base } from 'src/constants/Data.constant';

const BookTicket = () => {
  const [bookTicketNumber, setBookTicketNumber] = useState("");
  const numbers = [];
  for (let i = 1; i <= 600; i++) {
    numbers.push(i);
  }

  useEffect(() => {
    viewTicketForAgents();
  }, []);

  const [ticketSerialNumber, setTicketSerialNumber] = useState([]);
  const viewTicketForAgents = async () => {
    let result = await getApiCall(base.viewTicketForAgents)
    console.log("resultresulteerrr", result);
    // try({}).catch({})
    let datamerge = JSON.parse(result.ticket_set)
    setTicketSerialNumber(datamerge)
  }

  return (
    <CCard className="p-4">
      <CRow>
        <CCol xs={12}>
          <CWidgetStatsB
            className="mb-3"
            progress={{ color: 'success', value: 75 }}
            title="Ticket Book"
            value="89.9%"
          />
          <CRow className='mb-3'>
            <CCol xs={12} className='m-1' style={{ display: "flex", flexWrap: "wrap" }}>
              {ticketSerialNumber?.map((item, index) => {
                console.log("eeerererer", item);
                return <div className='customBox'>
                  <CFormCheck button={{ color: 'primary', variant: 'outline' }} id={item.id} autoComplete="off" label={item.id} />
                </div>
              })}
              {/* <CFormCheck button={{ color: 'primary', variant: 'outline' }} id="number" autoComplete="off" label="Single toggle" /> */}
              {/* <CFormCheck button={{ color: 'secondary', variant: 'outline' }} id="btn-check-2-outlined" autoComplete="off" label="Checked" defaultChecked />
              <CFormCheck button={{ color: 'success', variant: 'outline' }} type="radio" name="options-outlined" id="success-outlined" autoComplete="off" label="Radio" defaultChecked />
              <CFormCheck button={{ color: 'danger', variant: 'outline' }} type="radio" name="options-outlined" id="danger-outlined" autoComplete="off" label="Radio" /> */}
            </CCol>
          </CRow>
          <CForm className="row justify-between">
            <CCol xs={5}>
              <CFormLabel htmlFor="name" className="visually-hidden">
                Name
              </CFormLabel>
              <CFormInput type="text" id="name" placeholder="Enter Name" />
            </CCol>
            <CCol xs={5}>
              <CFormLabel htmlFor="phone" className="visually-hidden">
                Phone
              </CFormLabel>
              <CFormInput type="text" id="phone" placeholder="Enter Phone" />
            </CCol>
            <CCol xs={2}>
              <CButton type="submit" className="mb-3">
                Book
              </CButton>
            </CCol>
          </CForm>
        </CCol>
      </CRow>
    </CCard>
  )
}

export default BookTicket