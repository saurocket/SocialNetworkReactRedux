

import classes from './Login.module.css'
import FormLogin from "./FormLogin/FormLogin";
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import {loginUser} from "../../redux/authReduce";
import {Redirect} from "react-router-dom";
const Login= (props) => {

    const onSubmit = (fromData) => {
      const {email, password, rememberMe} = fromData
       console.log(email, password, rememberMe);
       props.loginUser(email, password, rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
       <div>
           <h1>Form</h1>
           <LoginReduxForm onSubmit={onSubmit}/>
       </div>
    )
}
const LoginReduxForm  = reduxForm({
    form: 'login',
})(FormLogin);


const mapStateToProps = (state) => {
    return {isAuth: state.auth.isAuth}

}



export default connect(mapStateToProps, {loginUser})(Login)


