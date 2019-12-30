import React from 'react'
import { firebaseApp } from '../../Config/Firebase/firebase'
import { Verify } from '../index'
import { NavbarPage } from '../../Component/index'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Footer from './../../Component/Footer/Footer'
export default class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            commentSub: "",
            commentget: [],

        }
    }


    componentDidMount() {
        let { commentget } = this.state
        firebaseApp.firestore().collection("Comment").get()
            .then(res => {
                res.forEach(value => {
                    console.log(value.data())
                    commentget.push(value.data())
                    this.setState({
                        commentget
                    })
                })
            })




    }

    add = () => {
        console.log(this.state)
        let obj = {
            commentget: this.state.commentSub,

        }

        firebaseApp.firestore().collection("Comment").doc().set(obj)
    }

    render() {
        let aa = this.props.history.location.state

        return (
            <div>


                <NavbarPage path={this.props.history} list={[{ name: 'Home', path: '/Home' }]} />

                <div style={{ marginLeft: "20%" }}>
                    <Paper style={{ width: '90%', padding: "10px" }}>
                        <h3>Hishmat Rai</h3>

                        <p>
                            {aa.units} Unit of  {aa.bloodgroup} required.At{aa.hospital} for my {aa.patinet}. <br />
                            <strong>Urgency : </strong>{aa.urgency}<br />
                            <strong>Contact :</strong>{aa.contact}<br />
                            <strong>Additional Instructions :</strong> {aa.additional}<br />
                            <strong>Volunteers uptill now: </strong>5<br />
                            <strong>current requirement: </strong>2 <br />
                        </p>
                        <hr />
                        <div>

                            <ul style={{ listStyleType: "none" }}>
                                {this.state.commentget && this.state.commentget.map((v, i) => {
                                    return <li key={i}>
                                        {/* {v.name}   */}
                                        {v.commentget}</li>
                                })}
                            </ul>
                        </div>


                        <hr />
                        <input onChange={(e) => this.setState({ commentSub: e.target.value })}
                            type="text" placeholder="Type here comment" style={{ marginRight: "5px", border: "1px solid #3AAFA9", width: "70%", padding: "7px", borderRadius: "5px" }} />
                        <Button onClick={() => this.add()}
                            style={{ backgroundColor: "#3AAFA9", color: "white", width: "20%" }}>post</Button>

                    </Paper>
                </div>
                <br />
                <br />
                <br />

                <Footer />
            </div>
        )
    }
}