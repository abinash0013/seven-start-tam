import React, { useState, useEffect } from "react";
import "./Ticket.css";
import GameInfo from "../GameInfo/GameInfo";

import { getApiCall, postApiCall, putApiCall } from "../../services/AppSetting";
// import { base } from './../../services/AppSetting';
import { base } from "../../constants/Data.constant";

const Ticket = (props) => {
  const { number, gameId, ticket, setTicket } = props;
  // console.log("numberrrrrticket", ticket);
  // const [ticket, setTicket] = useState([]);
  const [ticket1, setTicket1] = useState([]);

  // useEffect(() => {
  //   ticketCardView();
  // }, [props])

  useEffect(() => {
    const ticketCutHiglight = async () => {
      number?.map((numberData, index) => {
        // console.log("numberDataaaa", numberData.number);
        let aarr = ticket;
        aarr?.map((ticketData) => {
          // console.log("sssss", ticketData)
          ticketData?.dateSet?.map((ticketDataNumber, index) => {
            // console.log("ticketDataNumberrrr", ticketDataNumber);
            // console.log("ifcon1", numberData.number, ticketDataNumber.number, numberData.status);
            if (
              numberData.number == ticketDataNumber.number &&
              numberData.status == "true"
            ) {
              // console.log("ifcon", numberData.number, ticketDataNumber.number, numberData.status);
              ticketDataNumber.status = true;
            }
          });
          // console.log("ticketDatasetttypoflh", typeof ticketData)
          // console.log("ticketDatasetttypoflengthhh", ticketData)
          // setTicket(ticketData)
        });
        setTicket1(aarr);

        // console.log("logticketData", JSON.stringify(ticket));
      });
    };
    ticketCutHiglight();
  }, [number]);

  // const ticketCardView = async () => {
  //   console.log("one");
  //   let req = {
  //     gameId: gameId
  //   }
  //   let result = await postApiCall(base.ticketCardViewForUser, req)
  //   // console.log("resultttweww", result);
  //   try {
  //     let convertJSON = JSON.parse(result.data[0].ticket_set);
  //     // console.log("convertJSONnn", convertJSON);
  //     setTicket(convertJSON)
  //   } catch (error) {
  //     // console.log("errorjson", error);
  //   }
  // }

  // const ticketNumberUpdate = async () => {
  //   number.map((numberData, index) => {
  //     console.log("one");
  //     ticket.map((ticketData) => {a
  //       console.log("two");
  //       JSON.parse(ticketData.dateSet).map((ticketDataNumber) => {
  //         console.log("logticketData", JSON.stringify(ticketDataNumber));
  //         if (numberData.number == ticketDataNumber.number && numberData.status == "true") {
  //           ticketDataNumber.status == true
  //         }
  //       })
  //       console.log("logticketData", JSON.stringify(ticketData.dateSet));
  //     })
  //   })
  // }

  return (
    <div className="ticketSection">
      {/* {JSON.stringify(ticket1)} */}
      {ticket1?.length > 0 &&
        ticket1?.map((item, index) => {
          // console.log("itemitemitem22", item);
          return (
            <div className="outerContainer">
              <div className="container mx-auto mt-8">
                <div className="containerInfo">
                  <div className="containerInfoFirstInnerItem">
                    <div className="containerInfoInnerItemSerial">
                      {item.id}
                    </div>
                    <div className="containerInfoInnerItem">
                      {item.userName}
                      {item.userPhone}
                    </div>
                  </div>
                  {/* <div className="containerInfoInnerItem">{item.winnerTag},{item.winnerPrize}</div> */}
                  <div className="containerInfoInnerItem">{item.winnerTag}</div>
                </div>
                <div className="number-card">
                  {/* {console.log("eeeeewwew1", ticket[0].dateSet)}
              {console.log("eeeeewwew2", JSON.stringify(ticket.dateSet[0]))} */}
                  {/* {ticket?.map((itemData) => { */}
                  {item?.dateSet?.map((item) => {
                    // console.log("itemdatasetitemmnumbetypof", item);
                    return (
                      <div
                        className="number"
                        style={{
                          background: item.status == true ? "red" : "#fff",
                          color: item.status == true ? "#fff" : "#000",
                          borderRadius: item.status == true && "100%",
                        }}
                      >
                        {item.number}
                        {item.status}
                      </div>
                    );
                  })}
                  {/* } */}
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Ticket;
