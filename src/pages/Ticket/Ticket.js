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
      console.log("numberDataaaa", numberData);
      ticket1.map((ticketData) => {
        console.log("sssss", ticketData)
        // ticketData?.dateSet?.map((ticketDataNumber, index) => {
        //   console.log("ticketDataNumberrrr", ticketDataNumber);
        //   if (numberData.number == ticketDataNumber.number && numberData.status == "true") {
        //     ticketDataNumber.status = "true"
        //   }
        //   console.log("ticketDatasett", ticketDataNumber)
        // })
        // setTicket1(ticketData)
      })
      // console.log("logticketData", JSON.stringify(ticket));
    })
  }, [number]);

  // const updateTicketStatus = async () => {
  //   let result = await putApiCall(base.updateTicketStatus)
  // }

  const ticketCardView = async () => {
    console.log("one");
    let req = {
      gameId: gameId
    }
    let result = await postApiCall(base.ticketCardViewForUser, req)
    console.log("resultttweww", result);
    try {
      let convertJSON = JSON.parse(result.data[0].ticket_set);
      console.log("convertJSONnn", convertJSON);
      setTicket1(convertJSON)
    } catch (error) {
      console.log("errorjson", error);
    }
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
    <div className="ticketSection">
      {ticket1.map((item, index) => {
        return <div className="outerContainer">
          <div className="container mx-auto mt-8">
            <div className="containerInfo">
              <div className="containerInfoFirstInnerItem">
                <div className="containerInfoInnerItemSerial">1</div>
                <div className="containerInfoInnerItem">Abinash</div>
              </div>
              <div className="containerInfoInnerItem">Status</div>
            </div>
            <div className="number-card">
              {/* {console.log("eeeeewwew1", ticket[0].dateSet)}
              {console.log("eeeeewwew2", JSON.stringify(ticket.dateSet[0]))} */}
              {/* {ticket1?.map((itemData) => { */}
              {item?.dateSet?.map((item) => {
                return <div className="number" style={{ color: item.status && 'red' }}>{item.number}</div>
              })
              }
              {/* } */}
            </div>
          </div>
        </div>
      }
      )}

    </div>
  )
}

export default Ticket