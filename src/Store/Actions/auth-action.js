import { firebaseApp, provider } from "../../Config/Firebase/firebase";
import swal from 'sweetalert'
import { async } from "q";
//  User Signup


const Signup = (data, path) => {

    return dispatch => {
        console.log(data)
        firebaseApp.auth().createUserWithEmailAndPassword(data.email, data.password).then((res) => {
            firebaseApp.firestore().collection('users').doc(res.user.uid).set(data).then(
                firebaseApp.auth().currentUser.sendEmailVerification().then(function () {
                    swal("Sign Up!", "Sucessfully!", "success");
                    dispatch({
                        type: "Signup",
                    })
                    path.push('/')
                })
            )
        })
            .catch((error) => {
                var errorMessage = error.message;
                dispatch({
                    type: "error",
                    message: errorMessage
                })
                setTimeout(() => {
                    dispatch({
                        type: "errorerutn",
                    })
                }, 3000)
            });
    }
}







// user login
const LoginFunc = (data, path) => {

    return dispatch => {
        console.log(path)
        firebaseApp.auth().signInWithEmailAndPassword(data.email, data.password).then(resolve => {
            console.log(resolve.user)

            firebaseApp.firestore().collection('users').doc(resolve.user.uid).get().then(res => {
                let checkData = res.data()

                swal("Login!", "Sucessfully!", "success");
                path.push('/Home')
                localStorage.setItem('user', JSON.stringify(checkData))
                dispatch({
                    type: "Login",
                })
            })
        })
            .catch((error) => {
                var errorMessage = error.message;
                dispatch({
                    type: "errormessage",
                    message: errorMessage
                })
                setTimeout(() => {
                    dispatch({
                        type: "returnmessae",
                    })
                }, 3000)
            });
    }
}




// Logout

const Logout = (path) => {

    return dispatch => {
        firebaseApp.auth().signOut().then(function () {
            dispatch({ type: 'logout' })
            path.push('/')
        }, function (error) {
            console.error('Sign Out Error', error);
        });

    }

}
// resendEmail


// 
let resendEmail = () => {
    // alert("Re send Email")
    return dispatch => {
        var user = firebaseApp.auth().currentUser.sendEmailVerification().then(function () {
            swal("Re Send Email!", "Sucessfully!", "success");
            dispatch({
                type: "Resend"
            })
        });
        console.log(user)

    }
}





export {
    Signup,

    // UserSignup,
    LoginFunc,
    Logout,
    resendEmail,
 
}
















