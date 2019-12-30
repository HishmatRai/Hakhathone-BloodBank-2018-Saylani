import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Login, SignUp, Home, Verify, Profile, Notification, Setting, PostRequirement, Myrequest, Detail } from '../../Container/index'



export default class BasicRouter extends React.Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={Login} />
                <Route exact path="/Sign-Up" component={SignUp} />
                <Route exact path="/Home" component={Home} />
                <Route exact path="/verify-email" component={Verify} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/notification" component={Notification} />
                <Route exact path="/setting" component={Setting} />
                <Route exact path="/postrequirement" component={PostRequirement} />
                <Route exact path="/myrequest" component={Myrequest} />
                <Route exact path="/detail" component={Detail} />

            </Router>
        )
    }
}