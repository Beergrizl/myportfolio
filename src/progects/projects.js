import React from "react";
import s from './projects.module.scss';
//import SingleProject from './project/singleProject';
import Title from '../common/components/tilte/title';
//import social from './../assets/images/social.png';
//import todoList from './../assets/images/todoList.png';
import {Project} from "./project/ProjectData";
import st from './project/singleProgect.module.scss'

const Projects = () => (
    <div className={s.projectsBlock} id={'projects'}>
        <div className={s.projectContainer}>
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
        </div>
    </div>
);
export default Projects;

/*
<SingleProject style={Project.style} title={Project.title}
                                   description={Project.description} key={title}/>
<SingleProject style={todo} title={'TodoList'}
                                   description={'Best way to check your work tasks.'}/>*/
/*const socialNetwork = {
      backgroundImage: `url(${social})`,
  };*/
/*const todo = {
    backgroundImage: `url(${todoList})`,
};*/