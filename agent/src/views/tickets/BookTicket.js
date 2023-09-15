import React, { useEffect, useState } from 'react'
import "./BookTicket.css"
import { CButton, CCard, CCol, CForm, CFormCheck, CFormInput, CFormLabel, CFormTextarea, CRow, CWidgetStatsB } from '@coreui/react';
import { getApiCall, postApiCall, putApiCall } from 'src/services/AppSetting';
import { base } from 'src/constants/Data.constant';
import { useParams } from 'react-router-dom';

const BookTicket = () => {
  const [bookTicketNumber, setBookTicketNumber] = useState("");
  const [ticketSerialNumber, setTicketSerialNumber] = useState([]);
  const [ticketSelectByAgent, setTicketSelectByAgent] = useState([]);
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");

  useEffect(() => {
    console.log("bookticket");
    viewTicketForAgents();
  }, []);

  const { id } = useParams();

  const viewTicketForAgents = async () => {
    let req = {
      gameId: id
    }
    console.log("viewTicketForAgentsreqqtt", req);
    let result = await postApiCall(base.viewTicketForAgents, req)
    console.log("viewTicketForAgentsresulttt", result);
    let datamerge = JSON.parse(result.data[0].ticket_set)
    // if (datamerge.length > 0) {
    setTicketSerialNumber(datamerge)
    // } else {
    //   console.log("No Data Foundddd.");
    // }
  }

  const selectTicketForBookByAgent = async (data, index) => {
    let arr = [...ticketSerialNumber]
    arr[index].status = !arr[index].status
    setTicketSerialNumber(arr)
    if (arr[index].status != true) {
      ticketSelectByAgent.push(data.id)
      // console.log("storeDataav", ticketSelectByAgent);
    } else {
      ticketSelectByAgent.splice(index, 1);
      // console.log("storeDataaaaindex", index);
    }
    console.log("storeDataaaaindexvv", ticketSelectByAgent);
  }

  const requestForTicketBook = async (ticketSerialNumberVal) => {
    console.log("ticketSerialNumberVallll", ticketSerialNumberVal);
    let req = {
      ticketSet: JSON.stringify(ticketSerialNumberVal),
      gameId: id
    }
    console.log("stringreq", req);
    let result = await putApiCall(base.bookTicketByAgents, req)
    console.log("resultresulteerrrage", result);
  }

  const bookTicketByAgents = async () => {
    ticketSelectByAgent.map((item, index) => {
      console.log("itemmmmmtes", item);
      item.agentId = "2";
      item.userName = userName.target.value;
      item.userPhone = userPhone.target.value;

      ticketSerialNumber.map((serialItem, index) => {
        if (serialItem.id == item.id) {
          serialItem = item
        }
      })
      requestForTicketBook(ticketSerialNumber);
    });



    // let datamerge = JSON.parse(result[0].ticket_set)
    // // console.log("datamergeee", datamerge);
    // setTicketSerialNumber(datamerge)
  }


  // ticketSelectByAgent
  return (
    <CCard className="p-4">
      <CRow>
        <CCol xs={12}>
          {/* <CWidgetStatsB
            className="mb-3"
            progress={{ color: 'success', value: 75 }}
            title="Ticket Book isme all ticket aiga per game ka or dusre agent ne jo dicket kata h wo v dikhega"
            value="89.9%"
          /> */}
          <CRow className='mb-3'>
            <CCol xs={12} className='m-1' style={{ display: "flex", flexWrap: "wrap" }}>
              {ticketSerialNumber?.map((item, index) => {
                console.log("eeerererer", item.userName);
                return <div className='customBox'>
                  <CFormCheck button={{ color: item.status != "" ? 'primary' : 'secondary', variant: item.status == "" ? '' : 'outline' }} id={item.id} autoComplete="off" label={item.id} onClick={() => { selectTicketForBookByAgent(item, index) }} />
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
              <CFormInput type="text" id="name" placeholder="Enter Name" onChange={(e) => { setUserName(e) }} />
            </CCol>
            <CCol xs={5}>
              <CFormLabel htmlFor="phone" className="visually-hidden">
                Phone
              </CFormLabel>
              <CFormInput type="text" id="phone" placeholder="Enter Phone" onChange={(e) => { setUserPhone(e) }} />
            </CCol>
            <CCol xs={2}>
              <CButton type="submit" className="mb-3" onClick={() => { bookTicketByAgents() }}>
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