import React from "react";
import s from './Skill.module.css';
import {Icons} from "./IconData";


const Skill = () => (
    <>
        <ul className={s.ul}>
            {Icons
                .sort((a, b) => a.title.localeCompare(b.title))
                .map(({ icon, title, href }) => (
                    <li className={s.li} key={title}>
                        <a href={href} >
                            <img className={s.img} src={icon} />
                        </a>
                        <div className={s.div}>
                            <a href={href}>
                                <h4 className={s.h4}>{title}</h4>
                            </a>
                        </div>
                    </li>
                ))}
        </ul>
        </>)
export default Skill;


/*function Skill() {
    return (
               /!*<div className={s.skill}>
            <div className={s.icon}> </div>
            <h3>{props.title}</h3>
            <span className={s.description}> {props.description} </span>
        </div>*!/
    );
}*/


