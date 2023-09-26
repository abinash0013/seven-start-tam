import React, { useEffect, useState } from 'react'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'
import { useNavigate } from 'react-router-dom'

const Dashboard = (props) => {
  // const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
  const progressGroupExample2 = [
    { title: 'Total Ticket', icon: cilUser, value: 600 },
    { title: 'Sold Ticket', icon: cilUser, value: 0 },
    { title: 'Total Haftsheet Booked', icon: cilUser, value: 28 },
    { title: 'Total Fullsheet Booked', icon: cilUser, value: 7 },
    { title: 'Ticket Left', icon: cilUser, value: 544 },
    { title: 'Ticket Price', icon: cilUser, value: 30 },
    { title: 'Agent Commission', icon: cilUser, value: 0 },
    { title: 'Total Revenue', icon: cilUser, value: 0 },
    { title: 'Total Profit', icon: cilUser, value: 0 },
  ]

  // { console.log("authenticateddd", agentLoginId) }

  const tableExample = [
    {
      avatar: { src: avatar1, status: 'success' },
      user: {
        name: 'Yiorgos Avraamu',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'USA', flag: cifUs },
      usage: {
        value: 50,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'success',
      },
      payment: { name: 'Mastercard', icon: cibCcMastercard },
      activity: '10 sec ago',
    },
    {
      avatar: { src: avatar2, status: 'danger' },
      user: {
        name: 'Avram Tarasios',
        new: false,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Brazil', flag: cifBr },
      usage: {
        value: 22,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'info',
      },
      payment: { name: 'Visa', icon: cibCcVisa },
      activity: '5 minutes ago',
    },
    {
      avatar: { src: avatar3, status: 'warning' },
      user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2021' },
      country: { name: 'India', flag: cifIn },
      usage: {
        value: 74,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'warning',
      },
      payment: { name: 'Stripe', icon: cibCcStripe },
      activity: '1 hour ago',
    },
    {
      avatar: { src: avatar4, status: 'secondary' },
      user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2021' },
      country: { name: 'France', flag: cifFr },
      usage: {
        value: 98,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'danger',
      },
      payment: { name: 'PayPal', icon: cibCcPaypal },
      activity: 'Last month',
    },
    {
      avatar: { src: avatar5, status: 'success' },
      user: {
        name: 'Agapetus Tadeáš',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Spain', flag: cifEs },
      usage: {
        value: 22,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'primary',
      },
      payment: { name: 'Google Wallet', icon: cibCcApplePay },
      activity: 'Last week',
    },
    {
      avatar: { src: avatar6, status: 'danger' },
      user: {
        name: 'Friderik Dávid',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Poland', flag: cifPl },
      usage: {
        value: 43,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'success',
      },
      payment: { name: 'Amex', icon: cibCcAmex },
      activity: 'Last week',
    },
  ]

  return (
    <>
      {/* <WidgetsDropdown /> */}
      {/* <CCard className="mb-4">
        <CCardFooter>
          <CRow xs={{ cols: 1 }} md={{ cols: 5 }} className="text-center">
            {progressExample.map((item, index) => (
              <CCol className="mb-sm-2 mb-0" key={index}>
                <div className="text-medium-emphasis">{item.title}</div>
                <strong>
                  {item.value} ({item.percent}%)
                </strong>
                <CProgress thin className="mt-2" color={item.color} value={item.percent} />
              </CCol>
            ))}
          </CRow>
        </CCardFooter>
      </CCard> */}

      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Business Info</CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs={12} md={12} xl={12}>
                  <CRow>
                    <CCol sm={4}>
                      <div className="border-start border-start-4 border-start-warning py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Agent Name</div>
                        <div className="fs-5 fw-semibold">Abinash</div>
                      </div>
                    </CCol>
                    <CCol sm={4}>
                      <div className="border-start border-start-4 border-start-success py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Agent Phone</div>
                        <div className="fs-5 fw-semibold">1234567890</div>
                      </div>
                    </CCol>
                    <CCol sm={4}>
                      <div className="border-start border-start-4 border-start-success py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Agent Gender</div>
                        <div className="fs-5 fw-semibold">Male</div>
                      </div>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />

                  {progressGroupExample2.map((item, index) => (
                    <div className="progress-group mb-4" key={index}>
                      <div className="progress-group-header">
                        <CIcon className="me-2" icon={item.icon} size="lg" />
                        <span>{item.title}</span>
                        <span className="ms-auto fw-semibold">{item.value}%</span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="warning" value={item.value} />
                      </div>
                    </div>
                  ))}
                  <div className="mb-5"></div>
                </CCol>
              </CRow>
              <br />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>


      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Agents List</CCardHeader>
            <CTable align="middle" className="mb-0 border" hover responsive>
              <CTableHead color="light">
                <CTableRow>
                  <CTableHeaderCell className="text-center">
                    <CIcon icon={cilPeople} />
                  </CTableHeaderCell>
                  <CTableHeaderCell>Agent Name</CTableHeaderCell>
                  <CTableHeaderCell className="text-center">Ticket Sold</CTableHeaderCell>
                  {/* <CTableHeaderCell className="text-center">Amount</CTableHeaderCell> */}
                  {/* <CTableHeaderCell>Activity</CTableHeaderCell> */}
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {tableExample.map((item, index) => (
                  <CTableRow v-for="item in tableItems" key={index}>
                    <CTableDataCell className="text-center">
                      <CAvatar size="md" src={item.avatar.src} />
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>{item.user.name}</div>
                      <div className="small text-medium-emphasis">
                        <span>{item.user.new ? 'New' : 'Recurring'}</span> | Registered:{' '}
                        {item.user.registered}
                      </div>
                    </CTableDataCell>
                    <CTableDataCell className="text-center">
                      {/* <CIcon size="xl" icon={item.payment.icon} /> */}
                      <div>{"1000"}</div>
                    </CTableDataCell>
                    {/* <CTableDataCell>
                        <div className="small text-medium-emphasis">Last login</div>
                        <strong>{item.activity}</strong>
                      </CTableDataCell> */}
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
