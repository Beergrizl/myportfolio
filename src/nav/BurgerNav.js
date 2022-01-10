import React, {useState} from "react";
import s from './BurgerNav.module.scss';
import { Link, animateScroll as scroll } from "react-scroll";


function BurgerNav() {
const [menuIsOpen, setBurgerMenu]= useState(false);
let onBurgerClick=()=>{
    setBurgerMenu(!menuIsOpen)
}
    return (
        <div className={s.burgerNav}>
            <div className={menuIsOpen ? `${s.burgerNavItems} ${s.show}` : s.burgerNav}>
            {/*<a href={'#main'}>Main</a>*/}
            <Link
                activeClass={s.active}
                to="main"
                spy={true}
                smooth={true}
                offset={1}
                duration= {500}
            >Main</Link>
            {/*<a href={'#skills'}>Skills</a>*/}
                <Link
                    activeClass={s.active}
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration= {500}
                >Skills</Link>
            {/*<a href={'#projects'}>Projects</a>*/}
                    <Link
                        activeClass={s.active}
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={1}
                        duration= {500}
                    >Projects</Link>
            {/*<a href={'#contacts'}>Contacts</a>*/}
                        <Link
                            activeClass={s.active}
                            to="contacts"
                            spy={true}
                            smooth={true}
                            offset={31}
                            duration= {500}
                        >Contacts</Link>
            </div>
            <div onClick={onBurgerClick} className={s.burgerBtn}>1</div>
        </div>
    );
}

export default BurgerNav;