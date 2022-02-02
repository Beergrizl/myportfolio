import React from "react";
import s from './footer.module.scss';
import github from '../assets/images/github.png'
import telegram from '../assets/images/telegram.png'
import open from '../assets/images/open.png'
import codeWarsIcon from '../assets/images/codewars (1).png'
import Title from "../common/components/tilte/title";


function Footer() {
    return (
        <div className={s.footerBlock}>
            <div className={s.footerContainer}>
                <div className={s.formBlock}>
                    <a href={'https://github.com/Beergrizl'}> <img className={s.image} src={github}/> </a>
                    <a href={'https://t.me/ArtsiomSadouski'}> <img className={s.image} src={telegram}/> </a>
                    <a href={'mailto:a.sadovskii@tut.by'}> <img className={s.image} src={open}/> </a>
                    <a href={'https://www.codewars.com/users/Beergrizl'}> <img className={s.image} src={codeWarsIcon}/>
                    </a>

                </div>
                <span> email: a.sadovskii@tut.by </span>
                <h2 className={s.h2}>©2021 all rights reserved</h2>

            </div>
        </div>
    );
}

export default Footer;