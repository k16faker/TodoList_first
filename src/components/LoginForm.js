import { useState, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";

import classes from "./LoginForm.module.css";


const LoginForm = () => {
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const nameInputRef = useRef();

    const [isValid, setIsValid] = useState(true);
    const [searchParams] = useSearchParams();
    const isLogin = searchParams.get("mode") === "login";


    const postSignUp = async (email, password, namein) => {
        const url = "https://mylisttest-be9b5-default-rtdb.firebaseio.com/users.json";
        try {
            await axios.post(url, {
                id:email,
                password:password,
                name:namein
            });
        } catch(err) {
            console.log(err);
        }
    }

    const signinHandler = (event) => {
        event.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        const enteredName = nameInputRef.current.value;

        if(enteredEmail.trim().length === 0 || enteredPassword.trim().length === 0) {
            setIsValid(false);
            return;
        }

        postSignUp(enteredEmail, enteredPassword, enteredName);
        window.alert('회원가입이 완료되었습니다.');
        emailInputRef.current.value = '';
        passwordInputRef.current.value = '';
        nameInputRef.current.value = '';

    };

    const loginHandler = () =>{};

    const finbtnHandler = () => {
        if(!isLogin) {
            signinHandler();
        } else {
            loginHandler();
        }
    };

    
    
        return (
                <div className={classes.formdiv}>
                    <Link to={`?mode=${isLogin ? 'signup' : 'login'}`} className={classes.btnlink}>
                        {isLogin ? 'Go to Signup' : 'Go to Login'}
                    </Link>
                    <div className={classes.forms}>
                        <div className={classes.idzone}>
                            <label htmlFor="id">Email</label>
                            <input type="text" placeholder="email" ref={emailInputRef} />
                        </div>
                        <div className={classes.passwordzone}>
                            <label htmlFor="password">Password</label>
                            <input type="password" placeholder="password" ref={passwordInputRef} />
                        </div>
                        {
                        !isLogin && 
                            <div className={classes.namezone}>
                                <label htmlFor="name">name</label>
                                <input type="text" placeholder="name" ref={nameInputRef} />
                            </div>
                        }
                        <div className={classes.buttonzone}>
                            <div className={classes.finbtn}>
                                <button type="button" onClick={signinHandler}>{isLogin ? 'Login' : 'signup'}</button>
                            </div>
                        </div>
                    </div>
                </div>
        );
};


export default LoginForm;