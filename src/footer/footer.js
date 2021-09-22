import React from "react";
import s from './footer.module.css';


function Footer() {
    return (
        <div className={s.footerBlock}>
            <div className={s.footerContainer}>
                <h2 className={s.h2}>Artem Sadovski</h2>
                <div className={s.formBlock}>
                    <div className={s.image}></div>
                    <div className={s.image}></div>
                    <div className={s.image}></div>
                    <div className={s.image}></div>
                </div>
                    <h2 className={s.h2}>©2021 all rights reserved</h2>

            </div>
        </div>
    );
}

export default Footer;