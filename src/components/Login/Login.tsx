import FormLogin from "./FormLogin/FormLogin";
import {reduxForm} from "redux-form";
import {useDispatch, useSelector} from "react-redux";
import {loginUser} from "../../redux/authReduce";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";
import React from "react";

export const Login: React.FC = () => {
    const dispatch = useDispatch()
    const captchaUrl = useSelector((state: AppStateType) => state.auth.captchaUrl)
    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)
    const onSubmit = (fromData: LoginUserType): void => {
        const {email, password, rememberMe, captcha} = fromData
        dispatch(loginUser(email, password, rememberMe, captcha))
    }
    if (isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div>
            <h1>Form</h1>
            {/*@ts-ignore*/}
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
        </div>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login',
    // @ts-ignore
})(FormLogin);

type LoginUserType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}





