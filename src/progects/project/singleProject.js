import React from "react";
import s from './singleProgect.module.css';


function SingleProject(props) {
    return (
        <div className={s.project}>
            <div className={s.picture}>
                <button> Come in</button>
            </div>
            <div className={s.content}>
                <p className={s.text}>{props.title}</p>
                <span className={s.description}> {props.description}</span>
            </div>
        </div>
    );
}

export default SingleProject;