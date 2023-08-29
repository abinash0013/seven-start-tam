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
  CFormSelect,
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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Announcement = () => {
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [itemValue, setItemValue] = useState("");
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [agentsData, setAgentsData] = useState([]);
  const [visible, setVisible] = useState(false)
  const [announcementId, setAnnouncementId] = useState("");
  const [announcementTitle, setAnnouncementTitle] = useState("");
  const [announcementMessage, setAnnouncementMessage] = useState("");

  useEffect(() => {
    announcement_list();
  }, []);

  const announcement_list = async () => {
    let result = await getApiCall(base.agentsList)
    setAgentsData(result)
  }

  const save_announcement = async () => {
    let req = {
      title: title.target.value,
      message: message.target.value,
    }
    console.log("saveAgentApiCallreq", req);
    let result = await postApiCall(base.saveAnnouncement, req)
    if (result.code == 200) {
      setVisible(false);
      toast.success("Successfully Created..!");
    }
  }

  const delete_announcement = async (value) => {
    let req = {
      id: value.announcement_id,
      status: "1"
    }
    console.log("iddddAgentreq", req);
    let result = await putApiCall(base.deleteAgent, req)
    console.log("iddddAgentresult", result);
    if (result.code == 200) {
      toast.error("Deleted Successfully..!");
    }
  }

  const get_edit_value = async (item) => {
    console.log("itemmm", item);
    setEditModalVisible(true)
    setId(item.announcement_id);
    setTitle(item.announcement_title);
    setMessage(item.announcement_message);
  }

  const edit_agent = async () => {
    let req = {
      id: id,
      name: name,
      email: email,
      phone: phone,
      Gender: gender,
    }
    console.log("reqreq", req);
    let result = await putApiCall(base.editAgent, req)
    console.log("resultresult", result);
    if (result.code == 200) {
      setEditModalVisible(false)
      toast.success("Updated Successfully..!");
    }
  }

  return (
    <CRow>
      <CCol xs={12} className='mb-4'>
        <CButton color="primary" onClick={() => { setVisible(true) }} onClose={() => setVisible(false)}>Add</CButton>
        <ToastContainer />
        <CModal alignment="center" visible={visible} onClose={() => setVisible(false)}>
          <CModalHeader>
            <CModalTitle>Add</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CForm>
              <div className="mb-3">
                <CFormLabel htmlFor="announcementTitle">Announcement Title</CFormLabel>
                <CFormInput
                  type="text"
                  id="announcementTitle"
                  placeholder="Announcement Title"
                  onChange={(e) => { setAnnouncementTitle(e) }}
                />
                <CFormLabel htmlFor="announcementMessage">Announcement Message</CFormLabel>
                <CFormInput
                  type="text"
                  id="announcementMessage"
                  placeholder="Announcement Message"
                  onChange={(e) => { setAnnouncementMessage(e) }}
                />
              </div>
            </CForm>
          </CModalBody>
          <CModalFooter>
            <CButton color="secondary" onClick={() => setEditModalVisible(false)}>
              Cancel
            </CButton>
            <CButton color="primary" onClick={() => save_announcement()}>Save</CButton>
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
                  <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Email</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Phone</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Gender</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {agentsData.map((item, index) => {
                  console.log("agentlistitem", item);
                  return <CTableRow key={index}>
                    <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                    <CTableDataCell>{item.agents_name}</CTableDataCell>
                    <CTableDataCell>{item.agents_email}</CTableDataCell>
                    <CTableDataCell>{item.agents_phone}</CTableDataCell>
                    <CTableDataCell>{item.agents_gender}</CTableDataCell>
                    <CTableDataCell>
                      <CButton color="warning" className='me-2' onClick={() => { get_edit_value(item) }}>Edit</CButton>
                      <CModal alignment="center" visible={editModalVisible}>
                        <CModalHeader>
                          <CModalTitle>Edit</CModalTitle>
                        </CModalHeader>
                        <CModalBody>
                          <CForm>
                            <div className="mb-3">
                              <CFormLabel htmlFor="name">Name</CFormLabel>
                              <CFormInput
                                type="text"
                                id="name"
                                placeholder="Agent Name"
                                onChange={(e) => { setName(e.target.value) }}
                                // name={name}
                                defaultValue={name}
                              />
                              <CFormLabel htmlFor="email">Email address</CFormLabel>
                              <CFormInput
                                type="email"
                                id="email"
                                placeholder="agent@example.com"
                                onChange={(e) => { setEmail(e) }}
                                defaultValue={email}
                              />
                              <CFormLabel htmlFor="phone">Phone</CFormLabel>
                              <CFormInput
                                type="text"
                                id="phone"
                                placeholder="Agent Phone"
                                onChange={(e) => { setPhone(e) }}
                                maxLength={10}
                                defaultValue={phone}
                              />
                              <CFormLabel htmlFor="gender">Gender</CFormLabel>
                              <CFormSelect defaultValue={gender} id="gender" onChange={(e) => { setGender(e.target.value) }}>
                                <option value="" selected disabled>Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Others">Others</option>
                              </CFormSelect>
                            </div>
                          </CForm>
                        </CModalBody>
                        <CModalFooter>
                          <CButton color="secondary" onClick={() => setEditModalVisible(false)}>
                            Cancel
                          </CButton>
                          <CButton color="primary" onClick={() => edit_agent()}>Update</CButton>
                        </CModalFooter>
                      </CModal>
                      <CButton color="danger" onClick={() => { setItemValue(item); setDeleteModalVisible(true) }}>Delete</CButton>
                      <CModal alignment="center" visible={deleteModalVisible} onClose={() => setDeleteModalVisible(false)}>
                        <CModalHeader>
                          <CModalTitle>Do You Want to Delete..</CModalTitle>
                        </CModalHeader>
                        <CModalFooter>
                          <CButton color="secondary" onClick={() => setVisible(false)}>
                            Cancel
                          </CButton>
                          <CButton color="primary" onClick={() => delete_agent(itemValue)}>yes.,Delete</CButton>
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
    </CRow >
  )

}

export default Announcement