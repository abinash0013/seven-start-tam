// import db from "./../../firebase";
import React, { useEffect, useState } from 'react';
import "./GameStart.css";
import { getApiCall } from '../../services/AppSetting';
import { base } from '../../constants/Data.constant';
import { firebase, db } from './../../firebase';

const GameStart = () => {
  // Import Firebase

  // Initialize Firebase with your config
  const firebaseConfig = {
    apiKey: "AIzaSyAHTly3YJDEfgw4-LjpOGLdbsK43iCodec",
    authDomain: "sevenstarttambola.firebaseapp.com",
    projectId: "sevenstarttambola",
    storageBucket: "sevenstarttambola.appspot.com",
    messagingSenderId: "58410367493",
    appId: "1:58410367493:web:5f11a4d6d5a5922ed27a6c",
    measurementId: "G-BS4T9F2MK2"
  };

  firebase.initializeApp(firebaseConfig);

  // var db = firebase.firestore();
  // const numbers = [];
  // for (let i = 1; i <= 100; i++) {
  //   numbers.push(i);
  // }

  // Fetch the required data using the get() method
  const Fetchdata = () => {
    db.collection("game").get().then((querySnapshot) => {

      // Loop through the data and store
      // it in array to display
      querySnapshot.forEach(element => {
        var data = element.data().number_set;
        // setNumber(arr => [...arr, data]);
      });
    })
  }

  useEffect(() => {
    Fetchdata();
    cutTicketNumberIfMatched();
  }, []);

  const [number, setNumber] = useState([]);
  const cutTicketNumberIfMatched = async () => {
    // let result = await getApiCall(base.getNumberOneToHundredForCalling)
    // console.log("resulttt", result[0].game_number_set);
    // let convertJSON = JSON.parse(result[0].game_number_set);
    // console.log("resultcardvieweeqqq", convertJSON);
    // setNumber(convertJSON)
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