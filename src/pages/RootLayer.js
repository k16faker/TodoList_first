import { Outlet } from "react-router-dom";

import classes from "./RootLayer.module.css";
import MainNavigation from "../components/MainNavigation";

const RootLayer = () => {
    let locationtf = false;


    if(window.location.pathname === "/") {
        locationtf = true;
    } else {
        locationtf = false;
    }

    return (
        <div className={classes.rootcomponent}>
            <MainNavigation />
            {locationtf && <h2>Welcome to my TodoList</h2>}
            {!locationtf && <Outlet />}
        </div>
    )
};


export default RootLayer;