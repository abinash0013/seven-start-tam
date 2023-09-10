import React, { useState, useEffect } from 'react';
import "./Ticket.css";
import GameInfo from '../GameInfo/GameInfo'

import { getApiCall, postApiCall, putApiCall } from '../../services/AppSetting';
// import { base } from './../../services/AppSetting';
import { base } from '../../constants/Data.constant';

const Ticket = (props) => {
  const { number, gameId } = props;
  const [ticket, setTicket] = useState([]);
  const [ticket1, setTicket1] = useState([]);

  useEffect(() => {
    ticketCardView();
    number.map((numberData, index) => {
      // console.log("numberDataaaa", numberData);
      ticket?.map((ticketData) => {
        // console.log("sssss", ticketData)
        ticketData?.dateSet?.map((ticketDataNumber, index) => {
          // console.log("ticketDataNumberrrr", ticketDataNumber);
          if (numberData.number == ticketDataNumber.number && numberData.status == "true") {
            ticketDataNumber.status = "true"
          }
        })
        setTicket1(ticketData)
        console.log("logticketData", JSON.stringify(ticketData));
      })
    })
  }, [number]);

  // const updateTicketStatus = async () => {
  //   let result = await putApiCall(base.updateTicketStatus)
  // }

  const ticketCardView = async () => {
    let result = await getApiCall(base.ticketCardView)
    // console.log("resultcardvieweeq", result[0].ticket_set);
    // setTicket(result[0].ticket_set)
    let convertJSON = JSON.parse(result[0].ticket_set);
    console.log("resultcardvieweeqqq", convertJSON);
    setTicket(convertJSON)
  }

  // const ticketNumberUpdate = async () => {
  //   number.map((numberData, index) => {
  //     console.log("one");
  //     ticket.map((ticketData) => {
  //       console.log("two");
  //       JSON.parse(ticketData.dateSet).map((ticketDataNumber) => {
  //         console.log("logticketData", JSON.stringify(ticketDataNumber));
  //         // if (numberData.number == ticketDataNumber.number && numberData.status == "true") {
  //         //   ticketDataNumber.status == true
  //         // }
  //       })
  //       console.log("logticketData", JSON.stringify(ticketData.dateSet));
  //     })
  //   })
  // }

  return (
    <div class="ticketSection">
      <div class="outerContainer">
        <div class="container mx-auto mt-8">
          <div class="containerInfo">
            <div class="containerInfoFirstInnerItem">
              <div class="containerInfoInnerItemSerial">1</div>
              <div class="containerInfoInnerItem">Abinash</div>
            </div>
            <div class="containerInfoInnerItem">Status</div>
          </div>
          <div class="number-card">
            {/* {console.log("eeeeewwew1", ticket[0].dateSet)}
            {console.log("eeeeewwew2", JSON.stringify(ticket.dateSet[0]))} */}
            {/* {ticket1?.map((itemData) => { */}
            {ticket1?.dateSet?.map((item) => {

              return <div class="number" style={{ color: item.status && 'red' }}>{item.number}</div>
            })
            }
            {/* } */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ticket