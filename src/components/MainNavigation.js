import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css"

const MainNavigation = () => {


    return (
        <div className={classes.header}>
            <h2 className={classes.logo}><NavLink to="/">MyTodoList</NavLink></h2>
            <ul className={classes.unordered}>
                <li><NavLink to="/list">List</NavLink></li>
                <li><NavLink to="/upload">Upload</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
            </ul>
        </div>
    );
}

export default MainNavigation;