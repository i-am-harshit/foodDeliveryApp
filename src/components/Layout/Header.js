import React, { Fragment } from "react";
import mealPic from "../../assets/meals.jpeg";
import classes from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>PiXEL Foods</h1>
                <HeaderCartButton />
            </header>
            <div className={classes['main-image']}>
                <img src={mealPic} alt="Food Table" />
            </div>
        </Fragment>
    );
};

export default Header;
