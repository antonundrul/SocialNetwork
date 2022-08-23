import React from "react";
import {Field, reduxForm} from "redux-form";
import {CustomFormElement} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";


const Input = CustomFormElement('input')
const LoginForm = (props) => {
    return (
        <form action="" onSubmit={props.handleSubmit}>
            <div>
                <Field name={"login"}
                       component={Input}
                       validate={[required]}
                       placeholder={"login"}/>
            </div>
            <div>
                <Field name={"password"}
                       component={Input}
                       type={"password"}
                       validate={required}
                       placeholder={"password"}/>
            </div>
            <div>
                <Field name={"rememberMe"} component={Input} type={"checkbox"}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)


const Login = (props) => {

    const onSubmit = (formData) => {
        console.log(formData)
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}


export default Login;