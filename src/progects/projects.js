import React from "react";
import s from './projects.module.css';
import SingleProject from "./project/singleProject";




function Projects() {
    return (
        <div className={s.projectsBlock}>

                <div className={s.projectContainer}>
                    <h2 className={s.title}> Projects</h2>
                    <div className={s.singleProject}>
                        <SingleProject title={'Social network'} description={'Social network for the best friends.'}/>
                        <SingleProject title={'TodoList'} description={'Best way to check your work tasks.'}/>

                    </div>
                </div>
                    </div>
    );
}

export default Projects;