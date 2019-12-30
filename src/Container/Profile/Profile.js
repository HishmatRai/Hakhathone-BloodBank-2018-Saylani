import React from 'react'
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux'
import { resendEmail, Logout } from '../../Store/Actions/auth-action'
import './Profile.css'
import Map from './../../Component/Map/Map'
import{NavbarPage} from '../../Component/index'
import { firebaseApp } from './../../Config/Firebase/firebase'

class Verify extends React.Component {
 
    render() {
    
      
     
        return (
            <div>
 <NavbarPage path={this.props.history} list={[{ name: 'Profile',path:'/Profile' }]} />
                <Paper style={{ width: "90%", margin: "0 auto", marginTop: "100px",marginBottom:"100px" }}>

               

<table>
<tr>
    <th colspan="2" style={{textAlign:"center",fontSize:"30px"}}>Your Profile</th>
   
  </tr>
  <tr>
    <td>Name :</td>
    <td>Hishmat Rai </td>
   
  </tr>
  <tr>
    <td>Address : </td>
    <td>Karachi</td>
  
  </tr>
  <tr>
    <td>Email : </td>
    <td>hishmatrai@gmail,com</td>
    
  </tr>
  <tr>
    <td>Mobile Number : </td>
    <td>03322404609</td>
    
  </tr>
 
 
 
</table>

<Map />

               
                </Paper>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        message: state.message,
        errormessage: state.errormessage
      
    }
}
const mapDispatchToProps = dispatch => {
    return {
        userLogout: () => dispatch(Logout()),

    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Verify)