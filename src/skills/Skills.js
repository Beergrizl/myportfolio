import React from "react";
import s from './Skills.module.scss';
import sContainer from './../common/styles/container.module.css'
import Skill from "./skill/Skill";
import Title from "../common/components/tilte/title";

function Skills() {
    return (
        <div className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.skillsContainer} `}>
                <Title text={'Skills'}/>
                <div className={s.skills}>
                    <Skill/>
                </div>
            </div>
        </div>
    );
}

export default Skills;


{/*<Skill title={'HTML'} description={'Search for the keywords to learn more about each warning.\n' +
    'To ignore, add // eslint-disable-next-line to the line before.\n'}/>*/
}
{/* <Skill title={'JS'} description={'Search for the keywords to learn more about each warning.\n' +
    'To ignore, add // eslint-disable-next-line to the line before.\n'}/>
    <Skill title={'React'} description={'Search for the keywords to learn more about each warning.\n' +
    'To ignore, add // eslint-disable-next-line to the line before.\n'}/>*/
}