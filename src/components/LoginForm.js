

import classes from "./LoginForm.module.css";


const LoginForm = () => {
    
        return (
                <div className={classes.formdiv}>
                    <form className={classes.forms}>
                        <div className={classes.idzone}>
                            <label htmlFor="id">ID</label>
                            <input type="text" placeholder="id" />
                        </div>
                        <div className={classes.passwordzone}>
                            <label htmlFor="password">Password</label>
                            <input type="password" placeholder="password" />
                        </div>
                        <div className={classes.buttonzone}>
                            <button type="submit">Login</button>
                            <button type="button">Sign Up</button>
                        </div>
                    </form>
                </div>
        );
};


export default LoginForm;