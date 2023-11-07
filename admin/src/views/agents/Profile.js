import {
  CButton,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CModalBody,
  CModalTitle,
  CRow,
} from '@coreui/react'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { base } from 'src/constants/Data.constant'
import { postApiCall } from 'src/services/AppSetting'
const profile = () => {
  const { id } = useParams()

  const [agentsDetails, setAgentsDetails] = useState([])
  const [agentsTransaction, setAgentsTransaction] = useState([])
  const [paidAmount, setPaidAmount] = useState('')

  useEffect(() => {
    agents_details()
    agents_transection_list()
  }, [])

  const agents_details = async () => {
    try {
      let body = {
        agent_id: id,
      }
      let result = await postApiCall(base.agentDetails, body)
      console.log('resultttee', result)
      setPaidAmount('')
      setAgentsDetails(result.data[0])
    } catch (e) {}
  }

  const agents_transection_list = async () => {
    try {
      let body = {
        agents_id: id,
      }
      let result = await postApiCall(base.agentTransacationList, body)
      console.log('resulttttt', result.data)
      setAgentsTransaction(result.data)
    } catch (e) {}
  }

  // const agents_transection_list = async () => {
  //   try {
  //     let body = {
  //       agents_id: id,
  //     }
  //     let result = await postApiCall(base.agentTransacationList, body)
  //     console.log('resulttttt', result)
  //     setAgentsTransaction(result.data[0])
  //   } catch (e) {}
  // }

  const agent_paid_amount = async () => {
    let amount = Number(agentsDetails.wallet) - Number(paidAmount.target.value)

    let body = {
      agent_id: id,
      amount: amount,
    }
    let result = await postApiCall(base.agentPaidAmount, body)
    if (result.status == true) {
      agents_details()
    } else {
      alert('err')
    }
  }

  return (
    <>
      <CRow className="wallent-agent">
        <CCol xs={6}>
          <view>
            <CModalTitle>{agentsDetails.agents_name}</CModalTitle>
            <CModalTitle>{agentsDetails.agents_email}</CModalTitle>
            <CModalTitle>{agentsDetails.agents_gender}</CModalTitle>
          </view>
        </CCol>
        <CCol xs={6}>
          <view className="wallet-amount">
            <CModalTitle>Wallet Balence : </CModalTitle>
            <CModalTitle> {agentsDetails.wallet}</CModalTitle>
          </view>
        </CCol>
        <CRow className="send-money">
          <CCol xs={12}>
            <CModalTitle>Send Money</CModalTitle>
            <CModalBody>
              <CForm>
                <CFormLabel>Amount</CFormLabel>
                <CFormInput
                  type="text"
                  id="amount"
                  placeholder="00"
                  onChange={(e) => {
                    setPaidAmount(e)
                  }}
                />
                <CButton
                  onClick={() => {
                    agent_paid_amount()
                  }}
                >
                  Send
                </CButton>
              </CForm>
            </CModalBody>
          </CCol>
        </CRow>
        {agentsTransaction?.map((item, index) => {
          console.log('itemmm', item)
          return (
            <CRow className="transection">
              <CModalTitle>Transaction</CModalTitle>
              <CRow className="trans-inner">
                <CCol xs={6}>
                  <CModalTitle>#{item.payment_id}</CModalTitle>
                  <CModalTitle>{item.amount}</CModalTitle>
                </CCol>
                <CCol xs={6}>
                  <CModalTitle>{item.create_at}</CModalTitle>
                  <CModalTitle>{item.type_cr_dr}</CModalTitle>
                </CCol>
              </CRow>
            </CRow>
          )
        })}
      </CRow>
    </>
  )
}
export default profile
