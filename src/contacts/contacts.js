import React from "react";
import s from './contacts.module.scss';
import Title from "../common/components/tilte/title";
import Fade from 'react-reveal/Fade';
import axios from "axios";
import {useFormik} from "formik";

function Contacts() {
    const formik = useFormik({
        initialValues: {
            email: '',
            name: '',
            message: '',
        },
        onSubmit: values => {
            axios.post('https://smtp-nodejs-server-artsiom.herokuapp.com/sendMessage', {
                email: values.email,
                name: values.name,
                message: values.message,
            })
                .then(() => {
                    alert('Your message has been sent')
                })
            formik.resetForm();

        }
    })

    return (

        <div className={s.contactBlock} id={'contacts'}>
            <div className={s.contactContainer}>
                <Fade bottom>
                    <Title text={'Contacts'}/>
                    <div className={s.formBlock}>
                         <form onSubmit={formik.handleSubmit} className={s.formContent}>
                            <div>
                                <input type={"email"} placeholder={'email'}
                                       {...formik.getFieldProps('email')}/>
                            </div>

                            <div>
                                <input type={"name"} placeholder={'name'}
                                       {...formik.getFieldProps('name')}/>
                            </div>
                            <div>
                                <textarea rows="6" placeholder={'message'}
                                {...formik.getFieldProps('message')}> </textarea>

                            </div>
                            <div>
                                <button type={'submit'} className={s.button}>Send</button>
                            </div>

                        </form>
                        {/*<form className={s.formContent} id={'contact-form'}>
                            <input placeholder={'your email'} id={'email'}/>
                            <input placeholder={'your name'} id={'name'}/>
                            <textarea rows="6" placeholder={'your message'} id={'message'}
                            > </textarea>
                            <button type={"submit"} className={s.button}>Send</button>
                        </form>*/}
                    </div>
                </Fade>
            </div>
        </div>
    );
}

// )}

export default Contacts;