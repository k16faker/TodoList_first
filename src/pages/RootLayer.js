import { Outlet } from "react-router-dom";

import classes from "./RootLayer.module.css";
import MainNavigation from "../components/MainNavigation";

const RootLayer = () => {

    return (
        <div className={classes.rootcomponent}>
            <div className={classes.navzone}>
                <MainNavigation />
            </div>
            <Outlet />
        </div>
    )
};


export default RootLayer;