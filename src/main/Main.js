import React from "react";
import s from './Main.module.css';
import sContainer from './../common/styles/container.module.css'

function Main() {
    return (
        <div className={s.main}>
            <div className={sContainer.container}>
            <div className={s.text}>
            <span>Hi there</span>
            <h1>Hi, i am Artem</h1>
            <p>Frontend developer</p>
            </div>
            <div className={s.photo}></div>
            </div>
        </div>
    );
}

export default Main;