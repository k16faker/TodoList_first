import { Outlet } from "react-router-dom";

import classes from "./RootLayer.module.css";
import MainNavigation from "../components/MainNavigation";

const RootLayer = () => {

    return (
        <div className={classes.rootcomponent}>
            <MainNavigation />
            <Outlet />
        </div>
    )
};


export default RootLayer;