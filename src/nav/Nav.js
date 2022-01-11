import React from "react";
import s from './Nav.module.scss';
import { Link, animateScroll as scroll } from "react-scroll";


function Nav() {

    return (
        <div className={s.nav}>
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
                    offset={-30}
                    duration= {500}
                >Skills</Link>
            {/*<a href={'#projects'}>Projects</a>*/}
                    <Link
                        activeClass={s.active}
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-30}
                        duration= {500}
                    >Projects</Link>
            {/*<a href={'#contacts'}>Contacts</a>*/}
                        <Link
                            activeClass={s.active}
                            to="contacts"
                            spy={true}
                            smooth={true}
                            offset={-30}
                            duration= {500}
                        >Contacts</Link>
        </div>
    );
}

export default Nav;