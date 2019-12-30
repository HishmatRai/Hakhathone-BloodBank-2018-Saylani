import React from 'react'
import { NavbarPage } from '../../Component/index'

import Footer from './../../Component/Footer/Footer'

export default class Setting extends React.Component {


    render() {
        return (
            <div>
                <NavbarPage path={this.props.history} list={[{ name: 'Setting', path: '/Setting' }]} />

                <div style={{ marginLeft: "20%" }}>
                    <h1>Setting</h1>
                </div>

                <Footer />
            </div>


        )
    }
}