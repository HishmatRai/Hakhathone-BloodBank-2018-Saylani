import React from 'react'
import{NavbarPage} from '../../Component/index'

import Footer from './../../Component/Footer/Footer'

export default class Myrequest extends React.Component {
  
   
    render() {
        return (
            <div>
                        <NavbarPage path={this.props.history} list={[{ name: 'Myrequest',path:'/Myrequest' }]} />

            <div style={{marginLeft:"20%"}}>
            <h1>Myrequest</h1>
            </div>

                   <Footer />
                    </div>
            
       
        )
    }
}