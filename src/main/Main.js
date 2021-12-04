import React from "react";
import s from './Main.module.scss';
import sContainer from './../common/styles/container.module.css'
import samurai from '../assets/images/samurai.jpg'

function Main() {
    return (
        <div className={s.block} id={'main'}>
            <div className={sContainer.container}>
                <div className={s.text}>
                    <h1>Hi there, i am Artsiom</h1>
                    <p>Software Engineer with a focus on Frontend with React/TypeScript.</p>
                </div>
                <div className={s.photo}>
                    <img src={samurai}/>
                </div>
            </div>
        </div>
    );
}

export default Main;