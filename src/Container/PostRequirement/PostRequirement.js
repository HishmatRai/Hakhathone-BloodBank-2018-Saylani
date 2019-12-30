import React from 'react'
import { NavbarPage } from '../../Component/index'
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux'
import { fiebase } from './../../Config/Firebase/firebase'
import Button from '@material-ui/core/Button';
import Footer from './../../Component/Footer/Footer'

import { firebaseApp } from "./../../Config/Firebase/firebase"
export default class Postrequirement extends React.Component {
    constructor() {
        super();
        this.state = {
            bloodgroup: "",
            units: "",
            urgency: "",
            country: "",
            prov: "",
            city: "",
            hospital: "",
            additional: "",
            contact: "",
            patinet: "",




        }
    }


    post = () => {
        console.log(this.state)
        firebaseApp.firestore().collection("Post").doc().set(this.state)
    }
    render() {
        console.log("All===>", this.props)
        return (
            <div>
                <NavbarPage path={this.props.history} list={[{ name: 'Postrequirement', path: '/Postrequirement' }]} />

                <div style={{ marginLeft: "20%" }}>
                    <Paper style={{ width: "80%", padding: "10px" }}>


                        <select className="browser-default custom-select" backgroundColor='black' border='none' color=''

                            onChange={(e) => this.setState({ bloodgroup: e.target.value })}>
                            <option>Choose your option</option>
                            <option value="A Positive">A Positive </option>
                            <option value="B Positive">B Positive</option>
                            <option value="O Positive">O Positive</option>
                            <option value="A Negitive">A Negitive</option>
                            <option value="B Negitive">B Negitive</option>
                            <option value="O Negitive">O Negitive</option>

                        </select>
                        <hr />
                        <input type="number" placeholder="number" style={{ marginRight: "5px", border: "1px solid #3AAFA9", width: "100%", padding: "7px", borderRadius: "5px" }}
                            onChange={(e) => this.setState({ units: e.target.value })}
                        />
                        <hr />
                        <select className="browser-default custom-select" backgroundColor='black' border='none' color=''

                            onChange={(e) => this.setState({ urgency: e.target.value })}>
                            <option>Urgency</option>
                            <option value="Urgent">Urgent </option>
                            <option value="Within 5 hours">Within 5 hours</option>
                            <option value="Within 12 hours">Within 12 hours</option>
                            <option value="Within 24 hours">Within 24 hours</option>
                            <option value="Within Week">Within Week</option>

                        </select>
                        <hr />

                        <select className="browser-default custom-select" backgroundColor='black' border='none' color=''

                            onChange={(e) => this.setState({ country: e.target.value })}>
                            <option>Country</option>
                            <option value="Pakistan">Pakistan </option>
                            <option value="India">India</option>
                            <option value="Dubai">Dubai</option>
                            <option value="USA">USA</option>
                            <option value="China">China</option>

                        </select>
                        <hr />

                        <select className="browser-default custom-select" backgroundColor='black' border='none' color=''

                            onChange={(e) => this.setState({ prov: e.target.value })}>
                            <option>State</option>
                            <option value="Sindh">Sindh </option>
                            <option value="Punjab">Punjab</option>
                            <option value="KPK">KPK</option>


                        </select>
                        <hr />


                        <select className="browser-default custom-select" backgroundColor='black' border='none' color=''

                            onChange={(e) => this.setState({ city: e.target.value })}>
                            <option>City</option>
                            <option value="Karachi">Karachi </option>
                            <option value="Mithi">Mithi</option>
                            <option value="Hyd">Hyd</option>
                            <option value="Lahore">Lahore</option>
                            <option value="Multan">Multan</option>

                        </select>
                        <hr />

                        <select className="browser-default custom-select" backgroundColor='black' border='none' color=''

                            onChange={(e) => this.setState({ hospital: e.target.value })}>
                            <option>Hospital</option>
                            <option value="Indus Hospital">Indus Hospital </option>
                            <option value="Ziauddin Hospital">Ziauddin Hospital</option>
                            <option value="Agha Khan Hospital">Agha Khan Hospital</option>
                            <option value="Liaquat National Hospital">Liaquat National Hospital</option>
                            <option value="Jinnah Hospital">Jinnah Hospital</option>

                        </select>
                        <hr />

                        <select className="browser-default custom-select" backgroundColor='black' border='none' color=''

                            onChange={(e) => this.setState({ patinet: e.target.value })}>
                            <option>Your relationship with patient</option>
                            <option value="Father">Father </option>
                            <option value="Mother">Mother</option>
                            <option value="Son">Son</option>
                            <option value="Daughter">Daughter</option>
                            <option value="Aunt">Aunt</option>
                            <option value="Uncle">Uncle</option>
                            <option value="Nephew">Nephew</option>
                            <option value="Niece">Niece</option>
                            <option value="Friend">Friend</option>
                            <option value="Neighbour">Neighbour</option>
                            <option value="None">None</option>


                        </select>
                        <hr />
                        <input type="number" placeholder="Contact number" style={{ marginRight: "5px", border: "1px solid #3AAFA9", width: "100%", padding: "7px", borderRadius: "5px" }}
                            onChange={(e) => this.setState({ contact: e.target.value })}
                        />
                        <hr />

                        <textarea onChange={(e) => this.setState({ additional: e.target.value })}
                            rows="4" cols="50" placeholder="additional instructions" style={{ marginRight: "5px", border: "1px solid #3AAFA9", width: "100%", padding: "7px", borderRadius: "5px" }}>

                        </textarea>
                        <center>
                            {/* <link to ="/Home">  */}
                            <Button onClick={() => this.post()} style={{ backgroundColor: "#3AAFA9", color: "white" }} >submit</Button>
                            {/* </link>  */}
                        </center>

                    </Paper>
                </div>
                <br />
                <br />

                <Footer />
            </div>


        )
    }
}



