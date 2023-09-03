import React, { useEffect, useState } from 'react';
import "./GameStart.css";
import { getApiCall } from '../../services/AppSetting';
import { base } from '../../constants/Data.constant';

const GameStart = () => {
  // const numbers = [];
  // for (let i = 1; i <= 100; i++) {
  //   numbers.push(i);
  // }



  useEffect(() => {
    cutTicketNumberIfMatched();
  }, []);

  const [number, setNumber] = useState([]);
  const cutTicketNumberIfMatched = async () => {
    let result = await getApiCall(base.getNumberOneToHundredForCalling)
    console.log("resulttt", result[0].game_number_set);
    let convertJSON = JSON.parse(result[0].game_number_set);
    console.log("resultcardvieweeqqq", convertJSON);
    setNumber(convertJSON)
  }

  // useEffect(() => {
  //   //Implementing the setInterval method
  //   const interval = setInterval(() => {
  //     getVal()
  //   }, 1000);
  //   //Clearing the interval
  //   return () => clearInterval(interval);
  // }, []);


  return (
    <>
      <div class="ticketSection">
        <div class="outerContainer">
          <div class="container mx-auto mt-8">
            <div class="number-card">
              {number?.map((itemNumber, index) => (
                // console.log("itemNumberrrr", itemNumber.number)
                <div class="number" key={index} style={{ backgroundColor: itemNumber.status == "true" ? "red" : "" }}>
                  {itemNumber.number}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default GameStart