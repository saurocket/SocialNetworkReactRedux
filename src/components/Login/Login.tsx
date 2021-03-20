
import FormLogin from "./FormLogin/FormLogin";
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import {loginUser} from "../../redux/authReduce";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";


type LoginUserType = {
    email:string
    password:string
    rememberMe: boolean
    captcha: string
}
type PropsType = {
    loginUser: (email:string, password:string,rememberMe: boolean, captcha: string )=> void
    isAuth: boolean
    captchaUrl: string | null
}

const Login:React.FC<PropsType> = (props) => {

    const onSubmit = (fromData: LoginUserType):void => {
      const {email, password, rememberMe, captcha} = fromData
       props.loginUser(email, password, rememberMe, captcha)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }


    return (
       <div>
           <h1>Form</h1>
          {/*@ts-ignore*/}
           <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
       </div>
    )
}

const LoginReduxForm  = reduxForm({
    form: 'login',
    // @ts-ignore
})(FormLogin);


const mapStateToProps = (state: AppStateType) => {
    return {isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }

}



export default connect(mapStateToProps, {loginUser})(Login)


