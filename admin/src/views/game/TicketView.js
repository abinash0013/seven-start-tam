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

const TicketView = (props) => {

  const [ticket, setTicket] = useState([]);
  useEffect(() => {
    ticketCardView();
  }, [props]);
  const { id } = useParams();
  console.log("iidd", id);
  const ticketCardView = async () => {
    let req = {
      gameId: id,
    }
    // let result = await getApiCall(base.ticketCardView)
    let result = await postApiCall(base.ticketCardView, req)
    // console.log("resultttweww", JSON.stringify(result));
    // console.log("resultcardvieweeqw", JSON.stringify(result[0].game_number_set));
    // console.log("resultcardvieweeqw", JSON.stringify(result[0]));
    // console.log("resultcardvieweeq000012", typeof result.data[0].game_number_set[0]);
    try {
      let convertJSON = JSON.parse(result.data[0].game_number_set)
      setTicket(convertJSON)
    } catch (error) {

    }

  }

  const _render_ticket_card_view = (data) => {
    console.log("123data4", data);
    return data[0]?.map((item, index) => {
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
                  {/* {item.dateSet.map((item, index) => ( */}
                  {item.map((item, index) => (
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
    // <div style={{ flex: 1, background: 'red' }}></div>
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