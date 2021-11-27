import React from "react";
import s from './job.module.scss';
import Title from "../common/components/tilte/title";


function JobOffer() {
    return (
        <div className={s.jobBlock}>
            <div className={s.jobContainer}>
                <Title text={'I am available for freelance'}/>
                <button> Send offer </button>
            </div>
        </div>
    );
}

export default JobOffer;