import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCardText,
  CCardTitle,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSwitch,
  CFormTextarea,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { getApiCall, postApiCall, putApiCall } from 'src/services/AppSetting';
import { base } from 'src/constants/Data.constant';
import Toast from 'src/components/toast/Toast';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TicketView = () => {
  const [ticket, setTicket] = useState([]);
  useEffect(() => {
    ticketCardView();
  }, []);
  const { id } = useParams();
  const ticketCardView = async () => {
    let result = await getApiCall(base.ticketCardView)
    // console.log("resultcardvieweeq", result[0].ticket_set);
    // setTicket(result[0].ticket_set)
    let convertJSON = JSON.parse(result[0].ticket_set);
    console.log("resultcardvieweeqqq", convertJSON);

    setTicket(convertJSON)
  }

  const _render_ticket_card_view = (data) => {
    return data.map((item, index) => {
      return (
        <CCol sm={6} key={index}>
          <CCard>
            <CCardBody>
              {/* <div className="ticket-container"> */}
              <div style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                marginTop: "20px"
              }}>
                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  margin: "10px",
                  padding: "10px",
                  border: "1px solid #ccc",
                }} >
                  {/* // key={index}> */}
                  {/* {ticket.map((number, i) => ( */}
                  {item.dateSet.map((ticket, index) => (
                    <div style={{
                      width: "40px",
                      height: "40px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      border: "1px solid #ccc",
                      margin: "2px",
                      fontWeight: "bold",
                    }}>{ticket}</div>
                  ))}
                </div>
                {/* ))} */}
              </div>
            </CCardBody>
          </CCard>
        </CCol>
      )
    })
  }

  return (
    <CRow>
      {_render_ticket_card_view(ticket || [])}
    </CRow>
  )
}
// const Styles = {
//   ticket- container: {
//     display: flex,
//     flex-wrap: wrap,
//       justify : content: center,
//         margin : top: 20px,
// }}

//   .ticket {
//     display: flex;
//   flex - direction: column;
//   align - items: center;
//   margin: 10px;
//   padding: 10px;
//   border: 1px solid #ccc;
// }

//   .ticket - cell {
//     width: 40px;
//   height: 40px;
//   display: flex;
//   justify - content: center;
//   align - items: center;
//   border: 1px solid #ccc;
//   margin: 2px;
//   font - weight: bold;
// }}
// </style>

export default TicketView