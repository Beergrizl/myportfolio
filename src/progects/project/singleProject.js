import React from "react";
import s from './singleProgect.module.css';


function SingleProject(props) {
    return (
        <div className={s.project}>
            <div className={s.picture}>
                <a> Come in</a>
            </div>
            <div className={s.content}>
                <h3 className={s.text}>{props.title}</h3>
                <span className={s.description}> {props.description}</span>
            </div>
        </div>
    );
}

export default SingleProject;