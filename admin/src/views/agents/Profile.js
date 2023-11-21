import React, { useState, useEffect } from 'react'
import {
  CRow,
  CCol,
  CForm,
  CButton,
  CFormInput,
  CFormLabel,
  CModalBody,
  CModalTitle,
  CFormSelect,
} from '@coreui/react'
import { useParams } from 'react-router-dom'
import { base } from 'src/constants/Data.constant'
import { postApiCall } from 'src/services/AppSetting'

const Profile = () => {
  const { id } = useParams()
  const [agentsDetails, setAgentsDetails] = useState([])
  const [agentsTransaction, setAgentsTransaction] = useState([])
  const [transactionAmount, setTransactionAmount] = useState('')
  const [transactionRemarks, setTransactionRemarks] = useState('')
  const [transactionType, setTransactionType] = useState('')
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
      setTransactionAmount('')
      setAgentsDetails(result.data[0])
    } catch (e) {}
  }

  const agents_transection_list = async () => {
    try {
      let body = {
        agents_id: id,
      }
      let result = await postApiCall(base.agentTransacationList, body)
      console.log('agentTransacationListresulttttt', result)
      setAgentsTransaction(result.data)
    } catch (e) {}
  }

  const agent_paid_amount = async () => {
    let amount = Number(agentsDetails.wallet) - Number(transactionAmount.target.value)
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

  const wallet_action = async () => {
    console.log(
      'wallet_action_log_',
      transactionAmount.target.value.length,
      transactionRemarks.target.value.length
    )
    // if (transactionAmount.target.value.length == 0) {
    //   console.log('Transaction Amount is Mandatory')
    // } else if (transactionRemarks.target.value.length == 0) {
    //   console.log('Transaction Remarks is Mandatory')
    //   // } else if (transactionType == '') {
    //   //   console.log('Transaction Type is Mandatory')
    // } else {
    let req = {
      agentId: id,
      transactionType: transactionType,
      remarks: transactionRemarks.target.value,
      amount: transactionAmount.target.value,
    }
    console.log('walletactionreqlog', req)
    let result = await postApiCall(base.walletAction, req)
    console.log('walletactionresultlog', result)
    if (result.status == true) {
      clearFormInput()
      agents_details()
      console.log('Record Saved Successfully.!!')
      // alert('Record Saved Successfully.!!')
    }
    // }
  }

  const clearFormInput = async () => {
    setTransactionType('')
    setTransactionAmount('')
    setTransactionRemarks('')
  }

  return (
    <>
      <CRow className="wallent-agent">
        <CCol xs={6}>
          <CModalTitle>{agentsDetails.agents_name}</CModalTitle>
          <CModalTitle>{agentsDetails.agents_email}</CModalTitle>
          <CModalTitle>{agentsDetails.agents_gender}</CModalTitle>
        </CCol>
        <CCol xs={6}>
          <div className="wallet-amount">
            <CModalTitle>Wallet Balance : </CModalTitle>
            <CModalTitle> {agentsDetails.wallet}</CModalTitle>
          </div>
        </CCol>
        <CRow className="send-money">
          <CCol xs={12}>
            <CModalTitle>Wallet Action</CModalTitle>
            <CModalBody>
              <CForm>
                <CFormLabel>Amount</CFormLabel>
                <CFormInput
                  type="text"
                  id="amount"
                  placeholder="00"
                  onChange={(e) => {
                    setTransactionAmount(e)
                  }}
                  defaultValue={transactionAmount}
                />
                <CFormLabel>Remarks</CFormLabel>
                <CFormInput
                  type="text"
                  id="remarks"
                  placeholder="Transaction Remarks"
                  onChange={(e) => {
                    setTransactionRemarks(e)
                  }}
                  defaultValue={transactionRemarks}
                />
                <CFormLabel htmlFor="gameStatus">Transaction Type</CFormLabel>
                <CFormSelect
                  defaultValue={transactionType}
                  id="transactionType"
                  onChange={(e) => {
                    setTransactionType(e.target.value)
                  }}
                >
                  <option value="" selected disabled>
                    Select Transaction Type
                  </option>
                  <option value="Credit">Credit</option>
                  <option value="Debit">Debit</option>
                </CFormSelect>
                <CButton
                  onClick={() => {
                    // agent_paid_amount()
                    wallet_action()
                  }}
                >
                  Submit
                </CButton>
              </CForm>
            </CModalBody>
          </CCol>
        </CRow>
        {agentsTransaction?.map((item, index) => {
          console.log('itemmm', item)
          return (
            <CRow className="transection" key={index}>
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
                <CCol xs={6}></CCol>
              </CRow>
            </CRow>
          )
        })}
      </CRow>
    </>
  )
}
export default Profile
