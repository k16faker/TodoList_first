import { useState, useRef } from "react";

import classes from "./LoginForm.module.css";


const LoginForm = () => {
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const [isValid, setIsValid] = useState(true);

    
    
        return (
                <div className={classes.formdiv}>
                    <form className={classes.forms}>
                        <div className={classes.idzone}>
                            <label htmlFor="id">Email</label>
                            <input type="text" placeholder="email" ref={emailInputRef} />
                        </div>
                        <div className={classes.passwordzone}>
                            <label htmlFor="password">Password</label>
                            <input type="password" placeholder="password" ref={passwordInputRef} />
                        </div>
                        <div className={classes.buttonzone}>
                            <button type="button">Login</button>
                            <button type="button">Sign Up</button>
                        </div>
                    </form>
                </div>
        );
};


export default LoginForm;