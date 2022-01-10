import React from "react";
import s from './projects.module.scss';
import Title from '../common/components/tilte/title';
import {Project} from "./project/ProjectData";
import st from './project/singleProgect.module.scss'
import Fade from 'react-reveal/Fade';

const Projects = () => (
    <div className={s.projectsBlock} id={'projects'}>
        <div className={s.projectContainer}>
            <Fade bottom>
                <Title text={'Projects'}/>
                <div className={s.singleProject}>
                    {Project
                        .map(({style, hrefSite, hrefSource, title, description}) => (
                            <div className={st.project}>
                                <div style={style} className={st.picture}>
                                    <a href={hrefSite} className={st.btn}> site </a>
                                    <a href={hrefSource} className={st.btn}>source</a>
                                </div>
                                <div className={st.content}>
                                    <h3 className={st.text}>{title}</h3>
                                    <span className={st.description}> {description}</span>
                                </div>
                            </div>))}
                </div>
            </Fade>
        </div>
    </div>

);
export default Projects;

