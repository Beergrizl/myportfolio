import React from "react";
import s from './job.module.css';


function JobOffer() {
    return (
        <div className={s.jobBlock}>
            <div className={s.jobContainer}>
                <h2 className={s.h2}>Рассматриваю варианты удаленной работы</h2>
                <button> Предложить оффер</button>
            </div>
        </div>
    );
}

export default JobOffer;