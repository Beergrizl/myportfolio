import React from "react";
import s from './Nav.module.scss';


function Nav() {

    return (
        <div className={s.nav}>
            <a href='/Main'>Main</a>
            <a href='/Skills'>Skills</a>
            <a href='/Projects'>Projects</a>
            <a href='Contacts'>Contacts</a>
        </div>
    );
}

export default Nav;