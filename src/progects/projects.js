import React from "react";
import s from './projects.module.css';
import SingleProject from './project/singleProject';
import Title from '../common/components/tilte/title';
import social from './../assets/images/social.png';
import todoList from './../assets/images/todoList.png';

function Projects() {
    const socialNetwork = {
        backgroundImage: `url(${social})`,
    };
const todo = {
        backgroundImage: `url(${todoList})`,
    };


    return (
        <div className={s.projectsBlock}>
            <div className={s.projectContainer}>
                <Title text={'Projects'}/>
                <div className={s.singleProject}>
                    <SingleProject style={socialNetwork} title={'Social network'} description={'Social network for the best friends.'}/>
                    <SingleProject style={todo} title={'TodoList'}
                                   description={'Best way to check dfshrrt hdere rhretjhrrg rgehj rehj thwjthg wghrje gwhr your work tasks.'}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;