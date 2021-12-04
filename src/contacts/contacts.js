import React from "react";
import s from './contacts.module.scss';
import Title from "../common/components/tilte/title";


function Contacts() {
    return (
        <div className={s.contactBlock} id={'contacts'}>
            <div className={s.contactContainer}>
                <Title text={'Contacts'}/>
                <div className={s.formBlock}>
                    <form className={s.formContent}>
                        <input/>
                        <input/>
                        <textarea rows="6"> </textarea>
                        <button type={"submit"} className={s.buttonSub}> Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contacts;