import React, { Fragment } from "react";
import mealPic from "../../assets/meals.jpeg";
import classes from "./Header.module.css"

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>PiXEL Foods</h1>
                <button>Cart</button>
            </header>
            <div className={classes['main-image']}>
                <img src={mealPic} alt="Food Table" />
            </div>
        </Fragment>
    );
};

export default Header;
