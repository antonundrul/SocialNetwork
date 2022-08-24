import React from "react";
import {Field, reduxForm} from "redux-form";
import {CustomFormElement} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/reducers/authReducer";
import {Navigate} from "react-router-dom";
import styles from "./../common/FormsControls/FormsControl.module.css"


const Input = CustomFormElement('input')
const LoginForm = (props) => {
    return (
        <form action="" onSubmit={props.handleSubmit}>
            <div>
                <Field name={"email"}
                       component={Input}
                       validate={[required]}
                       placeholder={"email"}/>
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
            {props.error&& <div className={styles.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)


const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email,formData.password, formData.rememberMe)
    }

    if(props.isAuth) return <Navigate to={"/profile"}/>
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps,{login})(Login);