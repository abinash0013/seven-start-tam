import React, { useEffect, useState } from 'react'
import "./Winner.css"

const Winner = (props) => {
  const { ticket } = props;
  const [quickSeven, setQuickSeven] = useState("");
  const [topLine, setTopLine] = useState("");
  const [middleLine, setMiddleLine] = useState("");
  const [bottomLine, setBottomLine] = useState("");
  const [firstFullHouse, setFirstFullHouse] = useState("");
  const [secondFullHouse, setSecondFullHouse] = useState("");
  // const [ticketData, setTicketData] = useState([]);

  useEffect(() => {
    setWinnerPrize();
  }, [props]);

  const setWinnerPrize = async () => {
    try {
      ticket.map((ticketItem, ticketIndex) => {
        console.log("ticketItemee", ticketItem.winnerTag, ticketItem.userName);
        if (ticketItem.winnerTag == 'quick_seven') {
          setQuickSeven(ticketItem.userName)
        }
        if (ticketItem.winnerTag == 'top_line') {
          setTopLine(ticketItem.userName)
        }
        if (ticketItem.winnerTag == 'middle_line') {
          setMiddleLine(ticketItem.userName)
        }
        if (ticketItem.winnerTag == 'bottom_line') {
          setBottomLine(ticketItem.userName)
        }
        if (ticketItem.winnerTag == 'firstFullHouse') {
          setFirstFullHouse(ticketItem.userName)
        }
        if (ticketItem.winnerTag == 'secondFullHouse') {
          setSecondFullHouse(ticketItem.userName)
        }
      })
    } catch (e) {
      console.log("errorlog", e);
    }
  }

  return (
    <>
      {/* <div className='winnerSectionHeadingContainer'>Winner Section{JSON.stringify(ticket)}</div> */}
      <div className='winnerSectionHeadingContainer'>Winner Section</div>

      <div className='winnerSectionContainer'>
        <div className='winnerSectionInnerContainer'>
          <p className='winnerSectionContainerTitle'>Quick Seven : {quickSeven}</p>
        </div>
        <div className='winnerSectionInnerContainer'>
          <p className='winnerSectionContainerTitle'>Top Line: {topLine}</p>
        </div>
        <div className='winnerSectionInnerContainer'>
          <p className='winnerSectionContainerTitle'>Middle Line:{middleLine}</p>
        </div>
        <div className='winnerSectionInnerContainer'>
          <p className='winnerSectionContainerTitle'>Bottom Line:{bottomLine}</p>
        </div>
        <div className='winnerSectionInnerContainer'>
          <p className='winnerSectionContainerTitle'>First Full House:{firstFullHouse}</p>
        </div>
        <div className='winnerSectionInnerContainer'>
          <p className='winnerSectionContainerTitle'>Second Full House:{secondFullHouse}</p>
        </div>
      </div>
    </>
  )
}

export default Winner