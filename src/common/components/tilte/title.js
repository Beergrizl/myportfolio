import React from "react";
import s from './title.module.scss';


function Title(props) {
    return (
        <div className={s.title}>
            <h2>{props.text}</h2>
        </div>
    );
}

export default Title;