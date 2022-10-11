import React from 'react';
import classes from './SignUpNote.module.css';
import card from '../assets/card.png';
import signupBackground from '../assets/signupBackground.png'
const SignUpNote = () => {
    return (
        <section className={classes.signUp + ' flex gap j-between'}>
            <div className={classes.content + " text-center"}>
                <h2>Sign up without any bank account linking and card</h2>
            </div>
            <div className={classes.image}>
                <img src={card} alt=""  />
            </div>
        </section>
    );
}

export default SignUpNote;
