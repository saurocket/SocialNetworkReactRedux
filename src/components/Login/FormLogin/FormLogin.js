import classes from "./FormLogin.module.css"
import {Field} from "redux-form";
import {Input} from "../../common/FormsControll/FormsControll";
import {required} from "../../../utils/validators/validators";

const FormLogin = ({handleSubmit, error}) => {

    return (
            <form onSubmit={handleSubmit} className={classes.form}>
                <div>
                    <Field
                        placeholder={'email'}
                        name={"email"}
                        component={Input}
                        validate={[required]}
                    />
                </div>
                <div>
                    <Field
                        placeholder={'password'}
                        name={"password"}
                        type="password"
                        component={Input}
                        validate={[required]}
                    />
                </div>
                <div>
                    Remember me  <Field type={"checkbox"} name={"rememberMe"} component={Input}/>
                </div>
                <div>
                    <button>LoginForm</button>
                </div>

                {error && <div className={classes.formSummaryError}>
                    {error}
                </div>}


            </form>
    )
}
export default FormLogin;