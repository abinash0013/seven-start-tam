import React, { useEffect, useState } from 'react'
import {
  CInput,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSwitch,
  CFormTextarea,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CFormSelect,
} from '@coreui/react'
import { getApiCall, postApiCall, putApiCall } from 'src/services/AppSetting'
import { base } from 'src/constants/Data.constant'
import Toast from 'src/components/toast/Toast'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import TicketView from './TicketView'
import { Link } from 'react-router-dom'
import TimePicker from 'react-time-picker'

const Game = () => {
  const [deleteModalVisible, setDeleteModalVisible] = useState(false)
  const [editModalVisible, setEditModalVisible] = useState(false)
  const [editOption, setEditOption] = useState(false)
  const [gameData, setGameData] = useState([])
  const [visible, setVisible] = useState(false)
  const [gameId, setGameId] = useState('')
  const [id, setId] = useState('')
  const [gameName, setGameName] = useState('')
  const [gameStartDate, setGameStartDate] = useState('')
  const [gameStartTime, setGameStartTime] = useState('')
  const [gameMaximumTicketSell, setGameMaximumTicketSell] = useState('')
  const [gameAmount, setGameAmount] = useState('')
  const [gameAmountPerTicketToAgent, setGameAmountPerTicketToAgent] = useState('')
  const [gameQuickFire, setGameQuickFire] = useState(false)
  const [gameQuickSevenPrize, setGameQuickSevenPrize] = useState('')
  const [gameStar, setGameStar] = useState(false)
  const [gameTopLine, setGameTopLine] = useState(false)
  const [gameTopLinePrize, setGameTopLinePrize] = useState(false)
  const [gameMiddleLine, setGameMiddleLine] = useState(false)
  const [gameMiddleLinePrize, setGameMiddleLinePrize] = useState(false)
  const [gameBottomLine, setGameBottomLine] = useState(false)
  const [gameBottomLinePrize, setGameBottomLinePrize] = useState(false)
  const [gameCorner, setGameCorner] = useState(false)
  const [gameHalfSheet, setGameHalfSheet] = useState(false)
  const [gameHousefull, setGameHousefull] = useState(false)
  const [gameHouseFullPrize, setGameHouseFullPrize] = useState(false)
  const [gameSecondHousefull, setGameSecondHousefull] = useState(false)
  const [gameSecondHouseFullPrize, setGameSecondHouseFullPrize] = useState(false)
  const [gameStatus, setGameStatus] = useState('')
  const [time, setTime] = useState(new Date())
  const [search, setSearch] = useState([])
  const [prevPage, setPrevPage] = useState(0)
  const [nextPage, setNextPage] = useState(10)

  const handleTimeChange = (newTime) => {
    setTime(newTime)
  }

  const clearState = () => {
    setGameQuickFire(false)
    setGameTopLine(false)
    setGameMiddleLine(false)
    setGameBottomLine(false)
    setGameHousefull(false)
    setGameSecondHousefull(false)
  }

  useEffect(() => {
    // game_list(prevPage, nextPage)
    game_list()
  }, [])

  const game_list = async (min, max) => {
    let result = await getApiCall(base.gameList)
    console.log('resulttttList', result)
    // let req = {
    //   min: min,
    //   max: max,
    // }
    // console.log('reqreqreq', req)
    // let result = await postApiCall(base.gameList, req)
    // console.log('resultresultresult', result)
    setGameData(result)
    // setSearch(result.data)
  }

  const save_game = async () => {
    console.log(
      'gameQuickSevenPrizelength',
      gameQuickSevenPrize.target.value,
      gameTopLinePrize.target.value,
      gameMiddleLinePrize.target.value,
      gameBottomLinePrize.target.value,
      gameHouseFullPrize.target.value,
      gameSecondHouseFullPrize.target.value
    )
    if (gameName == '') {
      toast.error('Game Name is Mandatory')
    } else if (gameStartDate == '') {
      toast.error('Game Start Date is Mandatory')
    } else if (gameStartTime == '') {
      toast.error('Game Start Time is Mandatory')
    } else if (gameMaximumTicketSell == '') {
      toast.error('Game Maximum Ticket Sell is Mandatory')
    } else if (gameAmount == '') {
      toast.error('Game Amount is Mandatory')
    } else if (gameAmountPerTicketToAgent == '') {
      toast.error('Game Amount Per Ticket To Agent is Mandatory')
      // } else if (gameQuickFire == true && gameQuickSevenPrize.target.value == '') {
      //   toast.error('Quick Seven Prize is Mandatory')
      // } else if (gameTopLine == true && gameTopLinePrize.target.value == '') {
      //   toast.error('Quick Seven Prize is Mandatory')
      // } else if (gameMiddleLine == true && gameMiddleLinePrize.target.value == '') {
      //   toast.error('Quick Seven Prize is Mandatory')
      // } else if (gameBottomLine == true && gameBottomLinePrize.target.value == '') {
      //   toast.error('Quick Seven Prize is Mandatory')
      // } else if (gameHousefull == true && gameHouseFullPrize.target.value == '') {
      //   toast.error('Quick Seven Prize is Mandatory')
      // } else if (gameSecondHousefull == true && gameSecondHouseFullPrize.target.value == '') {
      //   toast.error('Quick Seven Prize is Mandatory')
    } else {
      let req = {
        gameName: gameName.target.value,
        gameStartDate: gameStartDate.target.value,
        gameStartTime: gameStartTime.target.value,
        gameMaximumTicketSell: gameMaximumTicketSell.target.value,
        gameAmount: gameAmount.target.value,
        gameAmountPerTicketToAgent: gameAmountPerTicketToAgent.target.value,
        gameQuickFire: gameQuickFire,
        gameQuickSevenPrize: gameQuickFire == false ? '0' : gameQuickSevenPrize.target.value,
        // gameStar: gameStar,
        gameTopLine: gameTopLine,
        gameTopLinePrize: gameTopLine == false ? '0' : gameTopLinePrize.target.value,
        gameMiddleLine: gameMiddleLine,
        gameMiddleLinePrize: gameMiddleLine == false ? '0' : gameMiddleLinePrize.target.value,
        gameBottomLine: gameBottomLine,
        gameBottomLinePrize: gameBottomLine == false ? '0' : gameBottomLinePrize.target.value,
        // gameCorner: gameCorner,
        // gameHalfSheet: gameHalfSheet,
        gameHousefull: gameHousefull,
        gameHouseFullPrize: gameHousefull == false ? '0' : gameHouseFullPrize.target.value,
        gameSecondHousefull: gameSecondHousefull,
        gameSecondHouseFullPrize:
          gameSecondHousefull == false ? '0' : gameSecondHouseFullPrize.target.value,
        gameStatus: 'Deactive',
      }
      console.log('saveGameApiCallreq', req)
      // debugger;
      let result = await postApiCall(base.saveGame, req)
      // console.log("saveGameApiCall", result);
      if (result.code == 200) {
        setVisible(false)
        game_list()
        successToast()
        // <Toast />
      }
    }
  }

  // const indexOfLastRecord = currentPage * recordsPerPage;
  // const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  // // Records to be displayed on the current page
  // const currentRecords = data.slice(indexOfFirstRecord,indexOfLastRecord);
  // const nPages = Math.ceil(data.length / recordsPerPage)

  const handlePrevFunction = () => {
    setPrevPage(Number(prevPage) + 10)
    game_list(Number(prevPage) - 10, nextPage)
  }
  const handleNextFunction = () => {
    setNextPage(Number(nextPage) + 10)
    game_list(prevPage, Number(nextPage) + 10)
  }

  const successToast = () => {
    toast.success('Success !', {
      position: toast.POSITION.TOP_RIGHT,
    })
  }

  const delete_game = async (id) => {
    console.log('delete_game_id_log', id)
    let req = {
      id: id,
      status: '1',
    }
    console.log('reqqqq', req)
    let result = await putApiCall(base.deleteGame, req)
    console.log('reqqqqresult', result)
    if (result.length > 0) {
      alert('Deleted Successfully...')
    }
  }

  const get_edit_value = async (item) => {
    console.log('get_edit_valueeee', item)
    setEditModalVisible(true)
    setId(item.users_id)
    setGameName(item.game_name)
    setGameStartDate(item.game_start_date)
    setGameStartTime(item.game_start_time)
    setGameMaximumTicketSell(item.game_maximum_ticket_sell)
    setGameAmount(item.game_amount)
    setGameQuickFire(item.game_quick_fire)
    setGameStar(item.game_star)
    setGameTopLine(item.game_top_line)
    setGameMiddleLine(item.game_middle_line)
    setGameBottomLine(item.game_bottom_line)
    setGameCorner(item.game_corner)
    setGameHalfSheet(item.game_half_sheet)
    setGameHousefull(item.game_housefull)
    setGameStatus(item.game_status)
  }

  const edit_game = async () => {
    if (gameName == '') {
      toast.error('Game Name is Mandatory')
    } else if (gameStartDate == '') {
      toast.error('Game Start Date is Mandatory')
    } else if (gameStartTime == '') {
      toast.error('Game Start Time is Mandatory')
    } else if (gameMaximumTicketSell == '') {
      toast.error('Game Maximum Ticket Sell is Mandatory')
    } else if (gameAmount == '') {
      toast.error('Game Amount is Mandatory')
    } else if (gameStatus == '') {
      toast.error('Game Amount Per Ticket To Agent is Mandatory')
    } else {
      let req = {
        id: id,
        gameName: gameName,
        gameStartDate: gameStartDate,
        gameStartTime: gameStartTime,
        gameMaximumTicketSell: gameMaximumTicketSell,
        gameAmount: gameAmount,
        gameQuickFire: gameQuickFire,
        gameStar: gameStar,
        gameTopLine: gameTopLine,
        gameMiddleLine: gameMiddleLine,
        gameBottomLine: gameBottomLine,
        gameCorner: gameCorner,
        gameHalfSheet: gameHalfSheet,
        gameHousefull: gameHousefull,
        gameStatus: gameStatus,
      }
      console.log('reqofedituser', req)
      let result = await putApiCall(base.editGame, req)
      console.log('resultofedituser', result)
      if (result.code == 200) {
        successToast()
        setEditModalVisible(false)
        setEditOption(false)
      }
    }
  }

  return (
    <CRow>
      <CCol xs={12} className="mb-4">
        <div className="d-flex justify-content-between">
          <CButton
            color="primary"
            onClick={() => {
              setVisible(true)
            }}
            onClose={() => setVisible(false)}
          >
            Create Game
          </CButton>
          {/* <div className="w-25">
            <CFormInput
              type="text"
              id="search"
              placeholder="Search"
              onChange={(e) => {
                setSearch(
                  gameData.filter((data) =>
                    data.game_name.toLowerCase().includes(e.target.value.toLowerCase())
                  )
                )
              }}
            />
          </div> */}
        </div>
        <ToastContainer />
        <CModal
          alignment="center"
          visible={visible}
          onClose={() => {
            setVisible(false)
            clearState()
          }}
        >
          <CModalHeader>
            <CModalTitle>Add</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CForm>
              <div className="mb-3">
                <CFormLabel htmlFor="gameName">Game Name</CFormLabel>
                <CFormInput
                  type="text"
                  id="gameName"
                  placeholder="Game Name"
                  onChange={(e) => {
                    setGameName(e)
                  }}
                />
                <CFormLabel htmlFor="gameStartDate">Game Start Date</CFormLabel>
                <CFormInput
                  type="date"
                  id="gameStartDate"
                  placeholder="Game Start Date"
                  onChange={(e) => {
                    setGameStartDate(e)
                  }}
                  maxDate={new Date()}
                />
                {/* <input
                  type="time"
                  id="gameStartTime"
                  placeholder="Game Start Time"
                // onChange={(e) => { setGameStartTime(e) }}
                /> */}
                <CFormLabel htmlFor="gameStartTime">Game Start Time</CFormLabel>
                {/* <CTimePicker label="Game Start Time" locale="en-US" time="02:17:35 PM" />*/}
                <CFormInput
                  type="time"
                  id="gameStartTime"
                  placeholder="Game Start Time"
                  onChange={(e) => {
                    setGameStartTime(e)
                  }}
                />
                {/* <div> */}
                {/* <CInput
                  type="text"
                  value={time.toString()} // Display the selected time
                  readOnly // Ensure the input is read-only
                />
                <TimePicker
                  onChange={handleTimeChange}
                  value={time}
                /> */}
                {/* </div> */}
                <CFormLabel htmlFor="gameMaximumTicketSell">Game Maximum Ticket Sell</CFormLabel>
                <CFormInput
                  type="text"
                  id="gameMaximumTicketSell"
                  placeholder="Game Maximum Ticket Sell"
                  onChange={(e) => {
                    setGameMaximumTicketSell(e)
                  }}
                />
                <CFormLabel htmlFor="gameAmount">Game Amount Per Ticket</CFormLabel>
                <CFormInput
                  type="text"
                  id="gameAmount"
                  placeholder="Game Amount Per Ticket"
                  onChange={(e) => {
                    setGameAmount(e)
                  }}
                />
                <CFormLabel htmlFor="gameAmount">Game Amount Pay Per Ticket to Agents</CFormLabel>
                <CFormInput
                  type="text"
                  id="gameAmountPerTicketToAgent"
                  placeholder="Game Amount Per Ticket to Agent"
                  onChange={(e) => {
                    setGameAmountPerTicketToAgent(e)
                  }}
                />
                <CFormSwitch
                  label="Game Quick Seven"
                  id="gameQuickFire"
                  defaultChecked={gameQuickFire}
                  onChange={() => setGameQuickFire(!gameQuickFire)}
                />
                {gameQuickFire && (
                  <CFormInput
                    type="text"
                    id="gameQuickSevenPrize"
                    placeholder="Game Quick Seven Prize"
                    onChange={(e) => {
                      setGameQuickSevenPrize(e)
                    }}
                  />
                )}
                {/* <CFormSwitch
                  label="Game Star"
                  id="gameStar"
                  defaultChecked={gameStar}
                  onChange={() => setGameStar(!gameStar)}
                /> */}
                <CFormSwitch
                  label="Game Top Line"
                  id="gameTopLine"
                  defaultChecked={gameTopLine}
                  onChange={() => setGameTopLine(!gameTopLine)}
                />
                {gameTopLine && (
                  <CFormInput
                    type="text"
                    id="gameTopLinePrize"
                    placeholder="Game Top Line Prize"
                    onChange={(e) => {
                      setGameTopLinePrize(e)
                    }}
                  />
                )}
                <CFormSwitch
                  label="Game Middle Line"
                  id="gameMiddleLine"
                  defaultChecked={gameMiddleLine}
                  onChange={() => setGameMiddleLine(!gameMiddleLine)}
                />
                {gameMiddleLine && (
                  <CFormInput
                    type="text"
                    id="gameMiddleLinePrize"
                    placeholder="Game Middle Line Prize"
                    onChange={(e) => {
                      setGameMiddleLinePrize(e)
                    }}
                  />
                )}
                <CFormSwitch
                  label="Game Bottom Line"
                  id="gameBottomLine"
                  defaultChecked={gameBottomLine}
                  onChange={() => setGameBottomLine(!gameBottomLine)}
                />
                {gameBottomLine && (
                  <CFormInput
                    type="text"
                    id="gameBottomLinePrize"
                    placeholder="Game Bottom Line Prize"
                    onChange={(e) => {
                      setGameBottomLinePrize(e)
                    }}
                  />
                )}
                {/* <CFormSwitch
                  label="Game Corner"
                  id="gameCorner"
                  defaultChecked={gameCorner}
                  onChange={() => setGameCorner(!gameCorner)}
                /> */}
                {/* <CFormSwitch
                  label="Game Half Sheet"
                  id="gameHalfSheet"
                  defaultChecked={gameHalfSheet}
                  onChange={() => setGameHalfSheet(!gameHalfSheet)}
                /> */}
                <CFormSwitch
                  label="First Full house"
                  id="gameHousefull"
                  defaultChecked={gameHousefull}
                  onChange={() => setGameHousefull(!gameHousefull)}
                />
                {gameHousefull && (
                  <CFormInput
                    type="text"
                    id="gameHousefullPrize"
                    placeholder="Game Housefull Prize"
                    onChange={(e) => {
                      setGameHouseFullPrize(e)
                    }}
                  />
                )}
                <CFormSwitch
                  label="Second Full house"
                  id="gameSecondHousefull"
                  defaultChecked={gameSecondHousefull}
                  onChange={() => setGameSecondHousefull(!gameSecondHousefull)}
                />
                {gameSecondHousefull && (
                  <CFormInput
                    type="text"
                    id="gameSecondHousefullPrize"
                    placeholder="Game Second Housefull Prize"
                    onChange={(e) => {
                      setGameSecondHouseFullPrize(e)
                    }}
                  />
                )}
                <CFormLabel htmlFor="gameStatus">Game Statuss</CFormLabel>
                <CFormInput
                  type="text"
                  id="gameSecondHousefullPrize"
                  placeholder="Game Second Housefull Prize"
                  value={'Deactive'}
                  disabled
                />
                {/* <CFormSelect defaultValue={gameStatus} id="gameStatus" onChange={(e) => { setGameStatus(e.target.value) }}>
                  <option value="Active" >Active</option>
                  <option selected disabled>Deactive</option>
                </CFormSelect> */}
              </div>
            </CForm>
          </CModalBody>
          <CModalFooter>
            {/* <CButton color="secondary" onClick={() => setEditModalVisible(false)}>
              Cancel
            </CButton> */}
            <CButton color="primary" onClick={() => save_game()}>
              Save
            </CButton>
          </CModalFooter>
        </CModal>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardBody>
            <CTable hover responsive>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">#</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Game Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Game Start Date</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Game Start Time</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Game Maximum Ticket</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Amount Per Ticket</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Ticket</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {gameData.map((item, index) => {
                  console.log('gameListttt', item)
                  return (
                    <CTableRow key={index}>
                      <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                      <CTableDataCell>{item.game_name}</CTableDataCell>
                      <CTableDataCell>{item.game_start_date}</CTableDataCell>
                      <CTableDataCell>{item.game_start_time}</CTableDataCell>
                      <CTableDataCell>{item.game_maximum_ticket_sell}</CTableDataCell>
                      <CTableDataCell>{item.game_amount}</CTableDataCell>
                      <CTableDataCell>{item.game_status}</CTableDataCell>
                      <CTableDataCell>
                        <Link to={`/ticketView/${item.game_id}`}>
                          <CButton color="info" className="me-2">
                            Ticket
                          </CButton>
                        </Link>
                      </CTableDataCell>
                      <CTableDataCell>
                        <CButton
                          color="warning"
                          className="me-2"
                          onClick={() => {
                            get_edit_value(item)
                          }}
                        >
                          More
                        </CButton>
                        <CModal alignment="center" visible={editModalVisible}>
                          <CModalHeader>
                            <CModalTitle>View</CModalTitle>
                          </CModalHeader>
                          <CModalBody>
                            <CForm>
                              {editOption == false ? (
                                <div className="mb-3">
                                  <CFormLabel htmlFor="gameName">Game Name</CFormLabel>
                                  <CFormInput
                                    type="text"
                                    id="gameName"
                                    placeholder="Game Name"
                                    defaultValue={gameName}
                                    disabled
                                  />
                                  <CFormLabel htmlFor="gameStartDate">Game Start Date</CFormLabel>
                                  <CFormInput
                                    type="text"
                                    id="gameStartDate"
                                    placeholder="Game Start Date"
                                    defaultValue={gameStartDate}
                                    disabled
                                  />
                                  <CFormLabel htmlFor="gameStartTime">Game Start Time</CFormLabel>
                                  <CFormInput
                                    type="text"
                                    id="gameStartTime"
                                    placeholder="Game Start Time"
                                    defaultValue={gameStartTime}
                                    disabled
                                  />
                                  <CFormLabel htmlFor="gameMaximumTicketSell">
                                    Game Maximum Ticket Sell
                                  </CFormLabel>
                                  <CFormInput
                                    type="text"
                                    id="gameMaximumTicketSell"
                                    placeholder="Game Maximum Ticket Sell"
                                    defaultValue={gameMaximumTicketSell}
                                    disabled
                                  />
                                  <CFormLabel htmlFor="gameAmount">Game Amount</CFormLabel>
                                  <CFormInput
                                    type="text"
                                    id="gameAmount"
                                    placeholder="Game Amount"
                                    defaultValue={gameAmount}
                                    disabled
                                  />
                                  <CFormSwitch
                                    label="Game Quick Fire"
                                    id="gameQuickFire"
                                    defaultChecked={gameQuickFire}
                                    onChange={() => setGameQuickFire(!gameQuickFire)}
                                    disabled
                                  />
                                  <CFormSwitch
                                    label="Game Star"
                                    id="gameStar"
                                    defaultChecked={gameStar}
                                    onChange={() => setGameStar(!gameStar)}
                                    disabled
                                  />
                                  <CFormSwitch
                                    label="Game Top Line"
                                    id="gameTopLine"
                                    defaultChecked={gameTopLine}
                                    onChange={() => setGameTopLine(!gameTopLine)}
                                    disabled
                                  />
                                  <CFormSwitch
                                    label="Game Middle Line"
                                    id="gameMiddleLine"
                                    defaultChecked={gameMiddleLine}
                                    onChange={() => setGameMiddleLine(!gameMiddleLine)}
                                    disabled
                                  />
                                  <CFormSwitch
                                    label="Game Bottom Line"
                                    id="gameBottomLine"
                                    defaultChecked={gameBottomLine}
                                    onChange={() => setGameBottomLine(!gameBottomLine)}
                                    disabled
                                  />
                                  <CFormSwitch
                                    label="Game Corner"
                                    id="gameCorner"
                                    defaultChecked={gameCorner}
                                    onChange={() => setGameCorner(!gameCorner)}
                                    disabled
                                  />
                                  <CFormSwitch
                                    label="Game Half Sheet"
                                    id="gameHalfSheet"
                                    defaultChecked={gameHalfSheet}
                                    onChange={() => setGameHalfSheet(!gameHalfSheet)}
                                    disabled
                                  />
                                  <CFormSwitch
                                    label="Game Housefull"
                                    id="gameHousefull"
                                    defaultChecked={gameHousefull}
                                    onChange={() => setGameHousefull(!gameHousefull)}
                                    disabled
                                  />
                                  <CFormLabel htmlFor="gameStatus">Game Status</CFormLabel>
                                  <CFormSelect
                                    defaultValue={gameStatus}
                                    id="gameStatus"
                                    onChange={(e) => {
                                      setGameStatus(e.target.value)
                                    }}
                                  >
                                    <option value="" selected disabled>
                                      Select Status
                                    </option>
                                    <option value="Active">Active</option>
                                    <option value="Deactive">Deactive</option>
                                  </CFormSelect>
                                </div>
                              ) : (
                                <div className="mb-3">
                                  <CFormLabel htmlFor="gameName">Game Name</CFormLabel>
                                  <CFormInput
                                    type="text"
                                    id="gameName"
                                    placeholder="Game Name"
                                    onChange={(e) => {
                                      setGameName(e)
                                    }}
                                    defaultValue={gameName}
                                  />
                                  <CFormLabel htmlFor="gameStartDate">Game Start Date</CFormLabel>
                                  <CFormInput
                                    type="text"
                                    id="gameStartDate"
                                    placeholder="Game Start Date"
                                    onChange={(e) => {
                                      setGameStartDate(e)
                                    }}
                                    defaultValue={gameStartDate}
                                  />
                                  <CFormLabel htmlFor="gameStartTime">Game Start Time</CFormLabel>
                                  <CFormInput
                                    type="text"
                                    id="gameStartTime"
                                    placeholder="Game Start Time"
                                    onChange={(e) => {
                                      setGameStartTime(e)
                                    }}
                                    defaultValue={gameStartTime}
                                  />
                                  <CFormLabel htmlFor="gameMaximumTicketSell">
                                    Game Maximum Ticket Sell
                                  </CFormLabel>
                                  <CFormInput
                                    type="text"
                                    id="gameMaximumTicketSell"
                                    placeholder="Game Maximum Ticket Sell"
                                    onChange={(e) => {
                                      setGameMaximumTicketSell(e)
                                    }}
                                    defaultValue={gameMaximumTicketSell}
                                  />
                                  <CFormLabel htmlFor="gameAmount">Game Amount</CFormLabel>
                                  <CFormInput
                                    type="text"
                                    id="gameAmount"
                                    placeholder="Game Amount"
                                    onChange={(e) => {
                                      setGameAmount(e)
                                    }}
                                    defaultValue={gameAmount}
                                  />
                                  <CFormSwitch
                                    label="Game Quick Fire"
                                    id="gameQuickFire"
                                    defaultChecked={gameQuickFire}
                                    onChange={() => setGameQuickFire(!gameQuickFire)}
                                  />
                                  <CFormSwitch
                                    label="Game Star"
                                    id="gameStar"
                                    defaultChecked={gameStar}
                                    onChange={() => setGameStar(!gameStar)}
                                  />
                                  <CFormSwitch
                                    label="Game Top Line"
                                    id="gameTopLine"
                                    defaultChecked={gameTopLine}
                                    onChange={() => setGameTopLine(!gameTopLine)}
                                  />
                                  <CFormSwitch
                                    label="Game Middle Line"
                                    id="gameMiddleLine"
                                    defaultChecked={gameMiddleLine}
                                    onChange={() => setGameMiddleLine(!gameMiddleLine)}
                                  />
                                  <CFormSwitch
                                    label="Game Bottom Line"
                                    id="gameBottomLine"
                                    defaultChecked={gameBottomLine}
                                    onChange={() => setGameBottomLine(!gameBottomLine)}
                                  />
                                  <CFormSwitch
                                    label="Game Corner"
                                    id="gameCorner"
                                    defaultChecked={gameCorner}
                                    onChange={() => setGameCorner(!gameCorner)}
                                  />
                                  <CFormSwitch
                                    label="Game Half Sheet"
                                    id="gameHalfSheet"
                                    defaultChecked={gameHalfSheet}
                                    onChange={() => setGameHalfSheet(!gameHalfSheet)}
                                  />
                                  <CFormSwitch
                                    label="Game Housefull"
                                    id="gameHousefull"
                                    defaultChecked={gameHousefull}
                                    onChange={() => setGameHousefull(!gameHousefull)}
                                  />
                                  <CFormLabel htmlFor="gameStatus">Game Status</CFormLabel>
                                  <CFormSelect
                                    defaultValue={gameStatus}
                                    id="gameStatus"
                                    onChange={(e) => {
                                      setGameStatus(e.target.value)
                                    }}
                                  >
                                    <option value="" selected disabled>
                                      Select Status
                                    </option>
                                    <option value="Active">Active</option>
                                    <option value="Deactive">Deactive</option>
                                  </CFormSelect>
                                </div>
                              )}
                            </CForm>
                          </CModalBody>
                          <CModalFooter>
                            <CButton color="secondary" onClick={() => setEditModalVisible(false)}>
                              Cancel
                            </CButton>
                            {/* <CButton color="primary" onClick={() => edit_game()}>Edit</CButton> */}
                            {editOption == false ? (
                              <>
                                <CButton color="primary" onClick={() => setEditOption(true)}>
                                  Edit
                                </CButton>
                                <CButton
                                  color="danger"
                                  onClick={() => {
                                    setDeleteModalVisible(true)
                                  }}
                                >
                                  Delete
                                </CButton>
                                <CModal
                                  alignment="center"
                                  visible={deleteModalVisible}
                                  onClose={() => setDeleteModalVisible(false)}
                                >
                                  <CModalHeader>
                                    <CModalTitle>Do You Want to Delete..</CModalTitle>
                                  </CModalHeader>
                                  <CModalFooter>
                                    <CButton color="secondary" onClick={() => setVisible(false)}>
                                      Cancel
                                    </CButton>
                                    <CButton
                                      color="primary"
                                      onClick={() => delete_game(item.users_id)}
                                    >
                                      Yes.,Delete
                                    </CButton>
                                  </CModalFooter>
                                </CModal>
                              </>
                            ) : (
                              <CButton color="primary" onClick={() => edit_game()}>
                                Update
                              </CButton>
                            )}
                          </CModalFooter>
                        </CModal>
                      </CTableDataCell>
                      {/* <CTableDataCell>
                      <CButton color="warning" className='me-2' onClick={() => { get_edit_value(item) }}>Edit</CButton>
                      <CModal alignment="center" visible={editModalVisible}>
                        <CModalHeader>
                          <CModalTitle>Edit</CModalTitle>
                        </CModalHeader>
                        <CModalFooter>
                          <CButton color="secondary" onClick={() => setEditModalVisible(false)}>
                            Cancel
                          </CButton>
                          <CButton color="primary" onClick={() => edit_game()}>Update</CButton>
                        </CModalFooter>
                      </CModal>
                      <CButton color="danger" onClick={() => { setDeleteModalVisible(true) }}>Delete</CButton>
                      <CModal alignment="center" visible={deleteModalVisible} onClose={() => setDeleteModalVisible(false)}>
                        <CModalHeader>
                          <CModalTitle>Do You Want to Delete..</CModalTitle>
                        </CModalHeader>
                        <CModalFooter>
                          <CButton color="secondary" onClick={() => setVisible(false)}>
                            Cancel
                          </CButton>
                          <CButton color="primary" onClick={() => delete_game(item.users_id)}>Yes.,Delete</CButton>
                        </CModalFooter>
                      </CModal>
                    </CTableDataCell> */}
                    </CTableRow>
                  )
                })}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
        {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div
            style={{ margin: 10 }}
            onClick={() => {
              handlePrevFunction()
            }}
          >
            Prev
          </div>
          <div
            style={{ margin: 10 }}
            onClick={() => {
              handleNextFunction()
            }}
          >
            Next
          </div>
        </div> */}
      </CCol>
    </CRow>
  )
}

export default Game
