import React, { useEffect, useState } from "react"
import "./BookTicket.css"
import {
  CButton,
  CCard,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CRow,
  CWidgetStatsB,
} from "@coreui/react"
import { getApiCall, postApiCall, putApiCall } from "src/services/AppSetting"
import { base } from "src/constants/Data.constant"
import { useParams } from "react-router-dom"

const BookTicket = () => {
  const [bookTicketNumber, setBookTicketNumber] = useState("")
  const [ticketSerialNumber, setTicketSerialNumber] = useState([])
  const [ticketSelectByAgent, setTicketSelectByAgent] = useState([])
  const [userName, setUserName] = useState("")
  const [userPhone, setUserPhone] = useState("")
  const [selectedTicket, setSelectedTicket] = useState([])
  const [ticketIdForCondition, setTicketIdForCondition] = useState("")

  useEffect(() => {
    console.log("bookticket")
    viewTicketForAgents()
  }, [])

  const { id } = useParams()

  const viewTicketForAgents = async () => {
    let req = {
      gameId: id,
    }
    console.log("viewTicketForAgentsreqqtt", req)
    let result = await postApiCall(base.viewTicketForAgents, req)
    console.log("viewTicketForAgentsresulttt", result)
    let datamerge = JSON.parse(result.data[0].ticket_set)
    // if (datamerge.length > 0) {
    setTicketSerialNumber(datamerge)
    // } else {
    //   console.log("No Data Foundddd.");
    // }
  }

  const selectTicketForBookByAgent = async (data, index) => {
    let dataArr = [...ticketSerialNumber]
    dataArr[index].is_select = !dataArr[index].is_select
    setTicketSerialNumber(dataArr)

    // if (selectedTicket.includes(data.id)) {
    //   // selectedTicket.splice(index, 1)
    //   // setTicketIdForCondition("")
    //   console.log("if", index, selectedTicket)
    // } else {
    // selectedTicket.push(data.id)
    setTicketIdForCondition(data.id)
    //   console.log("else")
    // }
    console.log("selectedTicketByAgent", selectedTicket)
  }

  const bookTicketByAgentsFun = async () => {
    console.log("selectedTickettt", userPhone.target.value.length)
    if (userName == "") {
      alert("Please Enter Username")
    } else if (userPhone == "") {
      alert("Please Enter Userphone")
    } else if (userPhone.target.value.length != 10) {
      alert("Phone Number Should be atleast 10 digit")
    } else {
      let selectedTicket = []
      ticketSerialNumber.map((item, index) => {
        if (item.is_select) {
          selectedTicket.push(item.id)
        }
      })
      let req = {
        agentId: "2",
        gameId: id,
        userName: userName.target.value,
        userPhone: userPhone.target.value,
        selectedIdsForTicketBooking: JSON.stringify(selectedTicket),
      }
      console.log("selectedIdsForTicketBookinggg", req)
      // let result = await putApiCall(base.bookTicketByAgents, req)
      let result = await postApiCall(base.bookTicketByAgents, req)
      console.log("resultresulteerrrageagentId", result.agentId)
      if (result.status == true) {
        alert("Ticket Booked Successfully.!")
        setUserName("")
        setUserPhone("")
        viewTicketForAgents()
      } else {
        alert("false")
      }
    }
  }

  const requestForTicketBook = async (ticketSerialNumberVal) => {
    // console.log("ticketSerialNumberVallll", ticketSerialNumberVal);
    let req = {
      ticketSet: JSON.stringify(ticketSerialNumberVal),
      gameId: id,
    }
    // console.log("stringreq", req);
    // let result = await putApiCall(base.bookTicketByAgents, req)
    // console.log("resultresulteerrrage", result);
    // if (result.status == true) {
    //   alert("Ticket Booked Successfully.!")
    //   setUserName("");
    //   setUserPhone("");
    // }
  }

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
          <CRow className="mb-3">
            <CCol xs={12} className="m-1" style={{ display: "flex", flexWrap: "wrap" }}>
              {ticketSerialNumber?.map((item, index) => {
                console.log("ticketSerialNumberrr", item)
                return (
                  <div className="customBox" key={index}>
                    {item.agentId !== "" ? (
                      <CFormCheck
                        button={{ color: item.agentId != "" ? "primary" : "secondary" }}
                        id={item.id}
                        autoComplete="off"
                        label={item.id}
                        disabled
                      />
                    ) : (
                      <CFormCheck
                        button={{
                          color:
                            item.agentId != "" ? "red" : item.is_select ? "primary" : "warning",
                          variant: item.agentId != "" ? "filled" : item.is_select ? "outline" : "",
                          // variant: ticketIdForCondition != "" ? "" : "outline",
                        }}
                        id={item.id + "," + item.agentId}
                        autoComplete="off"
                        label={item.id}
                        onClick={() => {
                          selectTicketForBookByAgent(item, index)
                        }}
                      />
                    )}
                  </div>
                )
              })}
            </CCol>
          </CRow>
          <CForm className="row justify-between">
            <CCol xs={5}>
              <CFormLabel htmlFor="name" className="visually-hidden">
                Name
              </CFormLabel>
              <CFormInput
                type="text"
                id="name"
                placeholder="Enter Name"
                onChange={(e) => {
                  setUserName(e)
                }}
              />
            </CCol>
            <CCol xs={5}>
              <CFormLabel htmlFor="phone" className="visually-hidden">
                Phone
              </CFormLabel>
              <CFormInput
                type="text"
                id="phone"
                placeholder="Enter Phone"
                maxLength={10}
                onChange={(e) => {
                  setUserPhone(e)
                }}
              />
            </CCol>
            <CCol xs={2}>
              {ticketIdForCondition != "" ? (
                <CButton
                  type="submit"
                  className="mb-3"
                  onClick={() => {
                    bookTicketByAgentsFun()
                  }}
                >
                  Book
                </CButton>
              ) : (
                <CButton
                  type="submit"
                  className="mb-3"
                  onClick={() => {
                    alert("Please Select a Ticket")
                  }}
                >
                  Please Select a Ticket
                </CButton>
              )}
            </CCol>
          </CForm>
        </CCol>
      </CRow>
    </CCard>
  )
}

export default BookTicket
