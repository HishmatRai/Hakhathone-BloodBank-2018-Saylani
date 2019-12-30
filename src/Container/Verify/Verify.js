import React from 'react'
import './Verify.css'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {connect} from 'react-redux'
import {resendEmail,Logout} from '../../Store/Actions/auth-action'
import {MDBBtn} from 'mdbreact'
import iconVerify from '../../Images/verify.jpg'
import Button from '@material-ui/core/Button';

class Verify extends React.Component {
    render() {
        return (
            <div>
                {/* <Grid justify='center' container> */}
                    {/* <Grid item xs={12} sm={12} lg={12} md={12}> */}
                    <Paper style={{width:"90%",margin:"0 auto",marginTop:"40px",padding:"10px"}}>
                    <div className="verify-container">
                        <div className="img-div">
                            <img className="img-div" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShA_Z2oSfFTKEn5zn_wJJY4AvhWkozlX-MlpFYWfl_spST_F9q" />
                            <p className="head1">Verify your email to proceed</p>
                            <p className="para">We just sent an email to the address:<span style={{color:"green"}}> {this.props.email} </span><b></b></p>
                            <p className="para2">Please check your email and click on the link provided to verify your address.</p>
                            <p className="para2"><strong><span style={{color:"red"}}>Note :</span> </strong>After verification please refresh the page</p>
                            <Button  onClick={()=>this.props.resendEmail()} style={{backgroundColor:"#3AAFA9",color:"white"}}>resend verification email</Button>
                            </div>
                    </div> 
                    </Paper>
                    {/* </Grid>
                    </Grid> */}
            </div>
                )
            }
}

const mapStateToProps = state => {
      return {
  message: state.message,
  errormessage:state.errormessage
      }
  }
  const mapDispatchToProps = dispatch => {
      return {
        resendEmail: () => dispatch(resendEmail()),
         userLogout: () => dispatch(Logout()),
         
      }
  
  }
  export default connect(mapStateToProps,mapDispatchToProps)(Verify)