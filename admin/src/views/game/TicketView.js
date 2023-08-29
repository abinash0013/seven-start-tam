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
    console.log("resulttt", result);
    console.log("resultcardvieweeqw", result[0].ticket_set);
    console.log("resultcardvieweeq0000", result[0]);
    let convertJSON = JSON.parse(result[0].ticket_set);
    console.log("resultcardvieweeqqqw", convertJSON);
    setTicket(convertJSON)
  }

  const _render_ticket_card_view = (data) => {
    return data.map((item, index) => {
      console.log("dataitemm", item);
      return (
        <CCol sm={6} style={{ margin: "10px 0" }} key={index}>
          <CCard>
            <CCardBody>
              {/* <div className="ticket-container"> */}
              <div style={{
                display: "flex",
                justifyContent: "center",
                // marginTop: "20px",
                // flex: 1 
              }}>
                <div style={{
                  display: "flex",
                  flexWrap: "wrap",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "10px",
                  // padding: "10px",
                  // border: "1px solid #ccc",
                }}>
                  {item.dateSet.map((item, index) => (
                    <div style={{
                      width: "50px",
                      height: "50px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      border: "1px solid #ccc",
                      // margin: "2px",
                      fontWeight: "bold",
                    }}>
                      {/* {console.log("dataitemticket", ticket)} */}
                      {item.number}
                      {/* {"1"} */}
                    </div>
                  ))}
                </div>
              </div>
            </CCardBody>
          </CCard>
        </CCol >
        // <div>test1</div>
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