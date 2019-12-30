import React from 'react'
import { NavbarPage } from '../../Component/index'

import Footer from './../../Component/Footer/Footer'

export default class Notification extends React.Component {


    render() {
        return (
            <div>
                <NavbarPage path={this.props.history} list={[{ name: 'Notification', path: '/Notification' }]} />

                <div style={{ marginLeft: "20%" }}>
                    <h1>Notification</h1>
                </div>

                <Footer />

            </div>


        )
    }
}