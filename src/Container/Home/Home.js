import React from 'react'
import { firebaseApp } from '../../Config/Firebase/firebase'
import { Verify } from '../index'
import { NavbarPage } from '../../Component/index'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import Footer from './../../Component/Footer/Footer'
import './Home.css'
import Map from './../../Component/Map/Map'

// import Drawar from './../Drawers/Drawers'
export default class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            check: '',
            userEmail: '',
            post: [],
            //    usesrname : ''
        }
    }
    componentDidMount() {
        let that = this
        firebaseApp.auth().onAuthStateChanged(function (user) {
            if (user) {
                console.log(user.email);
                let emailVerified = user.emailVerified;
                that.setState({
                    name: user.displayName

                })
          
            } else {
                // No user is signed in.
            }
        });




        // 
        let { post } = this.state
        firebaseApp.firestore().collection("Post").get()
            .then(res => {
                res.forEach(value => {
                    console.log(value.data())
                    post.push(value.data())

                    this.setState({
                        post
                    })
                })
            })


    }
    render() {
        console.log(this.state.post)

        return (
            <div>


                <NavbarPage user={this.state.users} path={this.props.history} list={[{ name: 'Home', path: '/Home' }]} />
                <div style={{ marginLeft: "20%" }}>
                    <Map />
                    <Paper style={{ width: '50%', padding: "10px" }}>
                        {this.state.post.map((v, i) => {
                            return <p key={i} style={{ display: "float", margin: "10px", }}>

                                <h3 style={{ margin: "10px" }}>Hishmat Rai</h3>
                                {v.units}
                                Unit of  {v.bloodgroup} required.At{v.hospital} for my {v.patinet}
                                <br />
                                <strong>Urgency : </strong>{v.urgency}<br />
                                <strong>Contact : </strong>{v.contact}<br />
                                <strong>Additional Instructions :</strong> {v.additional}<br />
                                <strong>Volunteers uptill now: </strong>5<br />
                                <strong>current requirement: </strong>2 <br />
                                <Button style={{ backgroundColor: "#3AAFA9", color: "white", marginRight: "5px", width: "50%" }}>Volunteer</Button>

                                <Button onClick={() => this.props.history.push("/detail", v)} style={{ backgroundColor: "#3AAFA9", color: "white", width: "40%" }}>Comment</Button>

                            </p>
                        })}







                    </Paper>
                </div>
                <Footer />
            </div>




        )
    }
}