import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { postApiCall } from 'src/services/AppSetting'
import { base } from 'src/constants/Data.constant'

const Login = () => {
  const navigate = useNavigate()
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const submitLogin = async () => {
    console.log("first")
    if (userName == "") {
      alert("username is mandatory")
    } else if (password == "") {
      alert("password is mandatory")
    } else {
      let req = {
        username: userName.target.value,
        password: password.target.value
      }
      console.log("first", req)
      let result = await postApiCall(base.agentLogin, req)
      console.log("logoflogin", result);
      alert("login successfully")
      if (result.status == true) {
        alert("Login successfully")
        let test = await localStorage.setItem("agentLoginId", result.data[0].agents_id);
        console.log("testeee", test);
        navigate("/dashboard");
      } else {
        alert("Login failed")
      }
    }
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={4}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Agent Login</h1>
                    <p className="text-medium-emphasis">Login to access your Agent Dashboard</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput placeholder="Username" autoComplete="username" onChange={(e) => { setUserName(e) }} />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        onChange={(e) => { setPassword(e) }}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" className="px-4" onClick={() => submitLogin()}>
                          Login
                        </CButton>
                      </CCol>
                      {/* <CCol xs={6} className="text-right"> */}
                      {/* <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton> */}
                      {/* <CButton color="link" className="px-0" to="/register">
                          Register Now!
                        </CButton> */}
                      {/* </CCol> */}
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              {/* <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard> */}
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
