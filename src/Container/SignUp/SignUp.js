import React from 'react'
import { connect } from 'react-redux'
import { Signup, Logout } from '../../Store/Actions/auth-action'
import { BrowserRouter as Router, Link } from "react-router-dom";
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBFormInline,
  MDBAnimation
} from "mdbreact";
import "./SignUP.css";
import Button from '@material-ui/core/Button';

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      password: '',
      lastname: '',
      email: '',
      name: '',
      bloodgroup: ""

    }
    this.name = React.createRef()
    this.email = React.createRef()
    this.lastname = React.createRef()
    this.password = React.createRef()
    this.bloodgroup = React.createRef()


  }

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  signup = async () => {

    let flag = false;
    for (var key in this.state) {
      console.log(this.state[key])
      if (this.state[key] == "") {
        flag = true;
        this[key].current.setFocus()
      }
    }
    if (flag === false) {
      let obj = {
        name: this.state.name,
        lastname: this.state.lastname,
        email: this.state.email,
        password: this.state.password,
        bloodgroup: this.state.bloodgroup,


      }
      await this.props.userSignUp(obj, this.props.history)
      console.log(obj)
    }

  }

  render() {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.toggleCollapse("navbarCollapse")}
      />
    );
    return (
      <div style={{ background: "url('http://sheffieldhatters.com/wp-content/uploads/2014/09/backgrounds-for-websites-3.jpg')" }} id="classicformpage">
        <Router>
          <div>
            <MDBNavbar dark expand="md" fixed="top">
              <MDBContainer>
                <MDBNavbarBrand>
                  <strong className="white-text">Wel Come</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler
                  onClick={this.toggleCollapse("navbarCollapse")}
                />
                <MDBCollapse
                  id="navbarCollapse"
                  isOpen={this.state.collapseID}
                  navbar
                >

                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>
            {this.state.collapseID && overlay}
          </div>
        </Router>

        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow center>
                <MDBCol md="6" xl="5" className="mb-4">
                  <MDBAnimation type="fadeIn Right" delay=".3s">
                    <MDBCard id="classic-card">
                      <MDBCardBody className="white-text">
                        <h3 className="text-center">
                          <MDBIcon icon="user" /> Sign UP
                            </h3>
                        <hr className="hr-light" />
                        <MDBInput
                          className="white-text"
                          onChange={(e) => this.setState({ name: e.target.value })}
                          ref={this.name}
                          iconClass="white-text"
                          label="first name"
                          icon="user"
                        />
                        <MDBInput
                          className="white-text"
                          iconClass="white-text"
                          label="last name"
                          ref={this.lastname}
                          onChange={(e) => this.setState({ lastname: e.target.value })}
                          icon="user"
                        />

                        <div style={{ color: '#AA66CC', backgroundColor: "black" }}>


                          <select className="browser-default custom-select" backgroundColor='black' border='none' color=''
                            ref={this.dropdown}
                            onChange={(e) => this.setState({ bloodgroup: e.target.value })}>
                            <option>Choose your option</option>
                            <option value="A Positive">A Positive </option>
                            <option value="B Positive">B Positive</option>
                            <option value="O Positive">O Positive</option>
                            <option value="A Negitive">A Negitive</option>
                            <option value="B Negitive">B Negitive</option>
                            <option value="O Negitive">O Negitive</option>


                          </select>
                        </div>

                        <MDBInput
                          className="white-text"
                          iconClass="white-text"
                          ref={this.email}
                          onChange={(e) => this.setState({ email: e.target.value })}
                          label="Your email"
                          icon="envelope"
                        />

                        <MDBInput
                          className="white-text"
                          iconClass="white-text"
                          label="Your password"
                          ref={this.password}
                          onChange={(e) => this.setState({ password: e.target.value })}
                          icon="lock"
                          type="password"
                        />
                        <div className="text-center mt-4 black-text">

                          <Button onClick={() => this.signup()} style={{ backgroundColor: "#3AAFA9", color: "white" }} >sign up</Button>
                          <span class="vl-innertext"> OR </span>
                          <Link to='/'>

                            <Button style={{ backgroundColor: "#3AAFA9", color: "white" }}>log in</Button>
                          </Link>
                          <hr className="hr-light" />
                          <div className="text-center d-flex justify-content-center white-label" >




                          </div>

                        </div>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBAnimation>
                  <div id="snackbar" className={this.props.message}>{this.props.errormessage}</div>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>


      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.SignupErr, state.snackBar)
  return {
    message: state.message,
    errormessage: state.errormessage
  }
}
const mapDispatchToProps = dispatch => {
  return {
    userSignUp: (data, path) => dispatch(Signup(data, path)),
    userLogout: () => dispatch(Logout()),

  }

}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)