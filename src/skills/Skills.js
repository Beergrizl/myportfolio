import React from "react";
import s from './Skills.module.css';
import sContainer from './../common/styles/container.module.css'
import Skill from "./skill/Skill";

function Skills() {
    return (
        <div className={s.skillsBlock}>
<div className={`${sContainer.container} ${s.skillsContainer} `}>
<h2 className={s.title}> Skills</h2>
    <div className={s.skills}>
    <Skill title={'HTML'} description={'Search for the keywords to learn more about each warning.\n' +
    'To ignore, add // eslint-disable-next-line to the line before.\n'}/>
    <Skill title={'JS'} description={'Search for the keywords to learn more about each warning.\n' +
    'To ignore, add // eslint-disable-next-line to the line before.\n'}/>
    <Skill title={'React'} description={'Search for the keywords to learn more about each warning.\n' +
    'To ignore, add // eslint-disable-next-line to the line before.\n'}/>

    </div>
</div>
        </div>
    );
}

export default Skills;