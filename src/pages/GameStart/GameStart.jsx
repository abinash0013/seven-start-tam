import React, { useEffect, useState } from 'react';
import "./GameStart.css";
import "firebase/compat/database";
import Ticket from '../Ticket/Ticket';
import firebase from 'firebase/compat/app';
import { base } from '../../constants/Data.constant';
import { getApiCall, postApiCall } from '../../services/AppSetting';
import Winner from '../Winner/Winner';
import Banner from '../Banner/Banner';

const GameStart = () => {
  const [number, setNumber] = useState([]);
  const [gameId, setGameId] = useState("");
  const [currentNumberCall, setCurrentNumberCall] = useState("");
  const [ticket, setTicket] = useState([]);

  // Initialize Firebase with your config
  const firebaseConfig = {
    apiKey: "AIzaSyAHTly3YJDEfgw4-LjpOGLdbsK43iCodec",
    authDomain: "sevenstarttambola.firebaseapp.com",
    projectId: "sevenstarttambola",
    storageBucket: "sevenstarttambola.appspot.com",
    messagingSenderId: "58410367493",
    appId: "1:58410367493:web:5f11a4d6d5a5922ed27a6c",
    measurementId: "G-BS4T9F2MK2",
    databaseURL: "https://sevenstarttambola-default-rtdb.firebaseio.com"
  };
  firebase.initializeApp(firebaseConfig);
  var db = firebase.database();
  var ref = db.ref('game')

  // const database = firebase.database();
  // console.log("databaseee", database);
  // var db = firebase.firestore();
  // const numbers = [];
  // for (let i = 1; i <= 100; i++) {
  //   numbers.push(i);
  // }

  // Fetch the required data using the get() method
  const fetch_data = () => {
    ref.on("value", snapshot => {
      console.log("snapshotttt", snapshot.val());
      if (snapshot.val() != null) {
        setNumber(JSON.parse(snapshot.val().number_set));
        setGameId(snapshot.val().game_id);
        setCurrentNumberCall(snapshot.val().currentCalledNumber)
        ticketCardView(snapshot.val().game_id);
        handleSpeak(snapshot.val().currentCalledNumber)
      }
    })
  }

  const synth = window.speechSynthesis;

  const handleSpeak = (val) => {
    let seprateNumber = val.toString().split('');
    let textForCalling = seprateNumber[0] + "and" + seprateNumber[1] + val
    // Create a new SpeechSynthesisUtterance object
    const utterance = new SpeechSynthesisUtterance(textForCalling);

    // Specify a female voice (you may need to adjust this based on available voices)
    const voices = synth.getVoices();
    const femaleVoice = voices.find((voice) => voice.name.includes('Female'));

    if (femaleVoice) {
      utterance.voice = femaleVoice;
    }

    // Set the speech rate (0.5 is slower, 2.0 is faster)
    utterance.rate = 1; // Adjust the rate as needed

    // Speak the text
    synth.speak(utterance);
  };

  useEffect(() => {
    fetch_data();
    cutTicketNumberIfMatched();
  }, []);

  const ticketCardView = async (gameId) => {
    // console.log("one");
    let req = {
      gameId: gameId
    }
    let result = await postApiCall(base.ticketCardViewForUser, req)
    // console.log("resultttweww", result);
    try {
      let convertJSON = JSON.parse(result.data[0].ticket_set);
      // console.log("convertJSONnn", convertJSON);
      setTicket(convertJSON)
    } catch (error) {
      // console.log("errorjson", error);
    }
  }

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
      <Banner number={currentNumberCall} />

      <div class="ticketSection">
        <div class="outerContainer">
          <div class="container mx-auto mt-8">
            <div class="number-card">
              {/* {console.log("testingggga", number)} */}
              {number?.map((itemNumber, index) => (
                // console.log("itemNumberrrr", itemNumber.number)
                <div div class="number" key={index} style={{ backgroundColor: itemNumber.status == "true" ? "red" : "" }}>
                  {itemNumber.number}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Ticket number={number} gameId={gameId} setTicket={setTicket} ticket={ticket} />
      <Winner ticket={ticket} />
    </>
  )
}

export default GameStart