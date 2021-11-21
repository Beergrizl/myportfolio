import React from "react";
import s from './contacts.module.css';


function Contacts() {
    return (
        <div className={s.contactBlock}>
            <div className={s.contactContainer}>
                <h2 className={s.h2}>Contacts</h2>
                <div className={s.formBlock}>
                    <form className={s.formContent}>
                        <input/>
                        <input/>
                        <textarea rows="6" > </textarea>
                        <button type={"submit"} className={s.buttonSub}> Send </button>
                    </form>
                </div>
               </div>
        </div>
    );
}

export default Contacts;