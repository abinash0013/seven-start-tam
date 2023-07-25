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
import { getApiCall, postApiCall } from 'src/services/AppSetting';
import { base } from 'src/constants/Data.constant';

const Agents = () => {
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [agentsData, setAgentsData] = useState([]);
  const [visible, setVisible] = useState(false)
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");

  useEffect(() => {
    agents_list();
  }, []);

  const agents_list = async () => {
    let result = await getApiCall(base.agentsList)
    setAgentsData(result)
  }

  const save_agent = async () => {
    let req = {
      name: name.target.value,
      email: email.target.value,
      phone: phone.target.value,
      Gender: gender.target.value,
    }
    let result = await postApiCall(base.saveAgent, req)
    if (result.length > 0) {
      setVisible(false);
      alert("agent save successfully");
    }
  }

  const delete_agent = async (id) => {
    let req = {
      id: id,
      status: "1"
    }
    let result = await postApiCall(base.deleteAgent, req)
    if (result.length > 0) {
      alert("Deleted Successfully...");
    }
  }

  const get_edit_value = async (item) => {
    console.log("itemmm", item);
    setEditModalVisible(true)
    setId(item.agents_id);
    setName(item.agents_name);
    setEmail(item.agents_email);
    setPhone(item.agents_phone);
    setGender(item.agents_gender);
  }

  const edit_agent = async () => {
    let req = {
      id: id,
      name: name.target.value,
      email: email.target.value,
      phone: phone.target.value,
      Gender: gender.target.value,
    }
    let result = await postApiCall(base.editAgent, req)
    if (result.length > 0) {
      alert("Updated Successfully...");
    }
  }

  // const deleteModalOpen = () => {
  //   return 
  // }

  return (
    <CRow>
      <CCol xs={12} className='mb-4'>
        <CButton color="primary" onClick={() => { setVisible(true) }} onClose={() => setVisible(false)}>Add</CButton>
        <CModal alignment="center" visible={visible} onClose={() => setVisible(false)}>
          <CModalHeader>
            <CModalTitle>Add</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CForm>
              <div className="mb-3">
                <CFormLabel htmlFor="name">Name</CFormLabel>
                <CFormInput
                  type="text"
                  id="name"
                  placeholder="Agent Name"
                  onChange={(e) => { setName(e) }}
                />
                <CFormLabel htmlFor="email">Email address</CFormLabel>
                <CFormInput
                  type="email"
                  id="email"
                  placeholder="agent@example.com"
                  onChange={(e) => { setEmail(e) }}
                />
                <CFormLabel htmlFor="phone">Phone</CFormLabel>
                <CFormInput
                  type="text"
                  id="phone"
                  placeholder="Agent Phone"
                  onChange={(e) => { setPhone(e) }}
                />
                <CFormLabel htmlFor="gender">Gender</CFormLabel>
                <CFormInput
                  type="text"
                  id="gender"
                  placeholder="Agent Gender"
                  onChange={(e) => { setGender(e) }}
                />
              </div>
            </CForm>
          </CModalBody>
          <CModalFooter>
            <CButton color="secondary" onClick={() => setEditModalVisible(false)}>
              Cancel
            </CButton>
            <CButton color="primary" onClick={() => save_agent()}>Save</CButton>
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
                                value={email}
                              />
                              <CFormLabel htmlFor="phone">Phone</CFormLabel>
                              <CFormInput
                                type="text"
                                id="phone"
                                placeholder="Agent Phone"
                                onChange={(e) => { setPhone(e) }}
                                value={phone}
                              />
                              <CFormLabel htmlFor="gender">Gender</CFormLabel>
                              <CFormInput
                                type="text"
                                id="gender"
                                placeholder="Agent Gender"
                                onChange={(e) => { setGender(e) }}
                                value={gender}
                              />
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
                      <CButton color="danger" onClick={() => { setDeleteModalVisible(true) }}>Delete</CButton>
                      <CModal alignment="center" visible={deleteModalVisible} onClose={() => setDeleteModalVisible(false)}>
                        <CModalHeader>
                          <CModalTitle>Do You Want to Delete..</CModalTitle>
                        </CModalHeader>
                        <CModalFooter>
                          <CButton color="secondary" onClick={() => setVisible(false)}>
                            Cancel
                          </CButton>
                          <CButton color="primary" onClick={() => delete_agent(item.agents_id)}>yes.,Delete</CButton>
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

export default Agents
