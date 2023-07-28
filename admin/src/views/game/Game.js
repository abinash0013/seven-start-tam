import React, { useEffect, useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
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
} from '@coreui/react'
import { getApiCall, postApiCall, putApiCall } from 'src/services/AppSetting';
import { base } from 'src/constants/Data.constant';
import Toast from 'src/components/toast/Toast';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Game = () => {
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [gameData, setGameData] = useState([]);
  const [visible, setVisible] = useState(false);
  const [gameId, setGameId] = useState("");
  const [gameName, setGameName] = useState("");
  const [gameStartDate, setGameStartDate] = useState("");
  const [gameStartTime, setGameStartTime] = useState("");
  const [gameMaximumTicketSell, setGameMaximumTicketSell] = useState("");
  const [gameAmount, setGameAmount] = useState("");
  const [gameQuickFire, setGameQuickFire] = useState(true);
  const [gameStar, setGameStar] = useState(true);
  const [gameTopLine, setGameTopLine] = useState(true);
  const [gameMiddleLine, setGameMiddleLine] = useState(true);
  const [gameBottomLine, setGameBottomLine] = useState(true);
  const [gameCorner, setGameCorner] = useState(true);
  const [gameHalfSheet, setGameHalfSheet] = useState(true);
  const [gameHousefull, setGameHousefull] = useState(true);
  const [gameStatus, setGameStatus] = useState("");

  useEffect(() => {
    game_list();
  }, []);

  const game_list = async () => {
    let result = await getApiCall(base.gameList)
    setGameData(result)
  }

  const save_game = async () => {
    let req = {
      gameName: gameName.target.value,
      gameStartDate: gameStartDate.target.value,
      gameStartTime: gameStartTime.target.value,
      gameMaximumTicketSell: gameMaximumTicketSell.target.value,
      gameAmount: gameAmount.target.value,
      gameQuickFire: gameQuickFire.target.value,
      gameStar: gameStar.target.value,
      gameTopLine: gameTopLine.target.value,
      gameMiddleLine: gameMiddleLine.target.value,
      gameBottomLine: gameBottomLine.target.value,
      gameCorner: gameCorner.target.value,
      gameHalfSheet: gameHalfSheet.target.value,
      gameHousefull: gameHousefull.target.value,
      gameStatus: gameStatus.target.value,
    }
    console.log("saveGameApiCallreq", req);
    let result = await postApiCall(base.saveGame, req)
    console.log("saveGameApiCall", result);
    if (result.code == 200) {
      setVisible(false);
      successToast();
      // <Toast />
    }
  }

  const successToast = () => {
    toast.success('Success !', {
      position: toast.POSITION.TOP_RIGHT
    })
  }

  // const showToasts = () => {
  //   //     toast.success("Successfully Created.!");
  //   //     toast.error("I'm never gonna toast you!");
  //   //     toast.warning("I'm never gonna toast you!");
  //   //     toast.info("I'm never gonna toast you!");
  // }

  const delete_game = async (id) => {
    console.log("delete_game_id_log", id);
    let req = {
      id: id,
      status: "1"
    }
    console.log("reqqqq", req);
    let result = await putApiCall(base.deleteGame, req)
    console.log("reqqqqresult", result);
    if (result.length > 0) {
      alert("Deleted Successfully...");
    }
  }

  const get_edit_value = async (item) => {
    console.log("getEditValueitemmm", item);
    setEditModalVisible(true)
    setId(item.users_id);
    setName(item.users_name);
    setEmail(item.users_email);
    setPhone(item.users_phone);
    setGender(item.users_gender);
  }

  const edit_game = async () => {
    let req = {
      id: id,
      name: name.target.value,
      email: email.target.value,
      phone: phone.target.value,
      Gender: gender.target.value,
    }
    console.log("reqofedituser", req);
    let result = await putApiCall(base.editGame, req)
    console.log("resultofedituser", result);
    // if (result.length > 0) {
    if (result.code == 200) {
      // alert("Updated Successfully...");
      successToast();
    }
  }

  return (
    <CRow>
      <CCol xs={12} className='mb-4'>
        {/* <CButton color="primary" onClick={() => { showToasts(); }} onClose={() => setVisible(false)}>Add</CButton> */}
        <CButton color="primary" onClick={() => { setVisible(true) }} onClose={() => setVisible(false)}>Add</CButton>
        <ToastContainer />
        <CModal alignment="center" visible={visible} onClose={() => setVisible(false)}>
          <CModalHeader>
            <CModalTitle>Add</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CForm>
              <div className="mb-3">
                <CFormLabel htmlFor="name">Game Name</CFormLabel>
                <CFormInput
                  type="text"
                  id="name"
                  placeholder="Game Name"
                  onChange={(e) => { setGameName(e) }}
                />
                <CFormLabel htmlFor="gameStartDate">Game Start Date</CFormLabel>
                <CFormInput
                  type="text"
                  id="gameStartDate"
                  placeholder="Game Start Date"
                  onChange={(e) => { setGameStartDate(e) }}
                />
                <CFormLabel htmlFor="gameStartDate">Game Start Time</CFormLabel>
                <CFormInput
                  type="text"
                  id="gameStartDate"
                  placeholder="Game Start Date"
                  onChange={(e) => { setGameStartTime(e) }}
                />
                <CFormLabel htmlFor="gameAmount">Game Amount Per Ticket</CFormLabel>
                <CFormInput
                  type="text"
                  id="gameAmount"
                  placeholder="Game Amount Per Ticket"
                  onChange={(e) => { setGameAmount(e) }}
                />
                <CFormLabel htmlFor="gameMaximumTicketSell">Game Maximum Ticket Sell</CFormLabel>
                <CFormInput
                  type="text"
                  id="gameMaximumTicketSell"
                  placeholder="Game Maximum Ticket Sell"
                  onChange={(e) => { setGameMaximumTicketSell(e) }}
                />
                <CFormSwitch label="Game Quick Fire" id="gameQuickFire" onChange={() => setGameQuickFire(!gameQuickFire)} />
                <CFormSwitch label="Game Star" id="gameStar" onChange={() => setGameStar(!gameStar)} />
                <CFormSwitch label="Game Top Line" id="gameTopLine" onChange={() => setGameTopLine(!gameTopLine)} />
                <CFormSwitch label="Game Middle Line" id="gameMiddleLine" onChange={() => setGameMiddleLine(!gameMiddleLine)} />
                <CFormSwitch label="Game Bottom Line" id="gameBottomLine" onChange={() => setGameBottomLine(!gameBottomLine)} />
                <CFormSwitch label="Game Corner" id="gameCorner" onChange={() => setGameCorner(!gameCorner)} />
                <CFormSwitch label="Game Half Sheet" id="gameHalfSheet" onChange={() => setGameHalfSheet(!gameHalfSheet)} />
                <CFormSwitch label="Game Housefull" id="gameHousefull" onChange={() => setGameHousefull(!gameHousefull)} />
                <CFormLabel htmlFor="gameStatus">Game Status</CFormLabel>
                <CFormInput
                  type="text"
                  id="gameStatus"
                  placeholder="Game Status"
                  onChange={(e) => { setGameStatus(e) }}
                />
              </div>
            </CForm>
          </CModalBody>
          <CModalFooter>
            <CButton color="secondary" onClick={() => setEditModalVisible(false)}>
              Cancel
            </CButton>
            <CButton color="primary" onClick={() => save_game()}>Save</CButton>
          </CModalFooter>
        </CModal>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardBody>
            <CTable hover>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">#</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Game Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Game Start Date</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Game Start Time</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Game Maximum Ticket</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Amount Per Ticket</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Quick Fire</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Game Star</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Top Line</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Middle Line</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Bottom Line</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Corner</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Half Sheet</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Housefull</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {gameData.map((item, index) => {
                  console.log("gameListttt", item);
                  return <CTableRow key={index}>
                    <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                    <CTableDataCell>{item.game_name}</CTableDataCell>
                    <CTableDataCell>{item.game_start_date}</CTableDataCell>
                    <CTableDataCell>{item.game_start_time}</CTableDataCell>
                    <CTableDataCell>{item.game_maximum_ticket_sell}</CTableDataCell>
                    <CTableDataCell>{item.game_amount}</CTableDataCell>
                    <CTableDataCell>{item.game_quick_fire}</CTableDataCell>
                    <CTableDataCell>{item.game_star}</CTableDataCell>
                    <CTableDataCell>{item.game_top_line}</CTableDataCell>
                    <CTableDataCell>{item.game_middle_line}</CTableDataCell>
                    <CTableDataCell>{item.game_bottom_line}</CTableDataCell>
                    <CTableDataCell>{item.game_corner}</CTableDataCell>
                    <CTableDataCell>{item.game_half_sheet}</CTableDataCell>
                    <CTableDataCell>{item.game_housefull}</CTableDataCell>
                    <CTableDataCell>{item.game_status}</CTableDataCell>
                    <CTableDataCell>
                      <CButton color="warning" className='me-2' onClick={() => { get_edit_value(item) }}>Edit</CButton>
                      {/* <CModal alignment="center" visible={editModalVisible} onClose={() => setEditModalVisible(false)}> */}
                      <CModal alignment="center" visible={editModalVisible}>
                        <CModalHeader>
                          <CModalTitle>Edit</CModalTitle>
                        </CModalHeader>
                        {/* <CModalBody>
                          <CForm>
                            <div className="mb-3">
                              <CFormLabel htmlFor="name">Name</CFormLabel>
                              <CFormInput
                                type="text"
                                id="name"
                                placeholder="User Name"
                                onChange={(e) => { setName(e) }}
                                defaultValue={name}
                              />
                              <CFormLabel htmlFor="email">Email address</CFormLabel>
                              <CFormInput
                                typedefaultValue="email"
                                id="email"
                                placeholder="user@example.com"
                                onChange={(e) => { setEmail(e) }}
                                defaultValue={email}
                              />
                              <CFormLabel htmlFor="phone">Phone</CFormLabel>
                              <CFormInput
                                type="text"
                                id="phone"
                                placeholder="User Phone"
                                onChange={(e) => { setPhone(e) }}
                                defaultValue={phone}
                              />
                              <CFormLabel htmlFor="gender">Gender</CFormLabel>
                              <CFormInput
                                type="text"
                                id="gender"
                                placeholder="User Gender"
                                onChange={(e) => { setGender(e) }}
                                defaultValue={gender}
                              />
                            </div>
                          </CForm>
                        </CModalBody> */}
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
                          <CButton color="primary" onClick={() => delete_game(item.users_id)}>yes.,Delete</CButton>
                        </CModalFooter>
                      </CModal>
                    </CTableDataCell>
                  </CTableRow>
                })}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Game