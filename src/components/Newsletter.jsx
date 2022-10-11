import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import classes from './Newsletter.module.css';
import Button from './UI/Button';

const Newsletter = () => {
    return (
        <section className={classes.newsLetter + ' flex j-between a-center gap '}>
            <div className="title-container flex column gap-1">
                <h2>Newsletter</h2>
                <h3 className='subdue'>Get now free 20% discount for all products on your first order</h3>
            </div>
            <div className={classes['send-letter']+" flex j-center a-center gap-2"}>
                <div className={classes['input-group']+" j-center flex a-center gap-1"}>
                    <AiOutlineMail/>
                    <input type='text' placeholder='Enter Your Email ...' required/>
                </div>
                <Button text='Subscribe'/>
            </div>
        </section>
    );
}

export default Newsletter;
