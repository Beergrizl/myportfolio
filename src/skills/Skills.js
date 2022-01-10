import React from "react";
import s from './Skills.module.scss';
import sContainer from './../common/styles/container.module.css'
import Skill from "./skill/Skill";
import Title from "../common/components/tilte/title";
import Fade from 'react-reveal/Fade';

function Skills() {
    return (
        <div className={s.skillsBlock} id='skills'>
            <div className={`${sContainer.container} ${s.skillsContainer} `}>
                <Fade bottom>
                <Title text={'Skills'}/>
                <div className={s.skills}>
                    <Skill/>
                </div>
                </Fade>
            </div>
        </div>
    );
}

export default Skills;


