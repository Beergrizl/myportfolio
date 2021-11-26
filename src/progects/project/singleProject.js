import React from "react";
import s from './singleProgect.module.scss';
import {Project} from "./ProjectData";

function SingleProject(props) {
    return (
        <div  className={s.project}>
            <div style={props.style} className={s.picture}>
                <a href={Project.hrefSite} className={s.btn}> site </a>
                <a href={Project.hrefSource}className={s.btn}>source</a>
            </div>
            <div className={s.content}>
                <h3 className={s.text}>{props.title}</h3>
                <span className={s.description}> {props.description}</span>
            </div>
        </div>
    );
}

export default SingleProject;