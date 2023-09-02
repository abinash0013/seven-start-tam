import React, { useEffect, useState } from 'react';
import "./GameStart.css";

const GameStart = () => {
  const numbers = [];
  for (let i = 1; i <= 100; i++) {
    numbers.push(i);
  }

  // Function to shuffle an array randomly
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // Create an array with numbers from 1 to 100
  const numbers1 = Array.from({ length: 100 }, (_, i) => i + 1);

  useEffect(() => {
    const timmer = async () => {
      let inter = setInterval(getVal(), 1000)
    }
    timmer();
  }, [])
  const getVal = () => {
    console.log("getVA");
    // Shuffle the array randomly
    // shuffleArray(numbers1);

    // Pop values from the shuffled array to get unique values
    // const uniqueValues = [];

    // while (numbers.length > 0) {
    //   uniqueValues.push(numbers.pop());
    // }

    // console.log("poplog", numbers1.pop());

  }


  return (
    <div class="ticketSection">
      <div class="outerContainer">
        <div class="container mx-auto mt-8">
          <div class="number-card">
            {numbers.map((number, index) => (
              <div class="number" key={index}>{number}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameStart