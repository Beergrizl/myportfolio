import React from "react";
import s from './job.module.scss';
import ReactTypingEffect from 'react-typing-effect';

function JobOffer() {
    return (
        <div className={s.jobBlock}>
            <div className={s.jobContainer}>
                <h2>
                    <ReactTypingEffect
                        text={'I am available for freelance.'}
                    />
                </h2>
                <button > Send offer</button>
            </div>
        </div>
    );
}

export default JobOffer;