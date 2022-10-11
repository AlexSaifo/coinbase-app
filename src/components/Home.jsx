import React from 'react';
import { FaChevronCircleRight } from 'react-icons/fa';
import classes from './Home.module.css';
import home from '../assets/home.png';
import badgePercent from '../assets/badge-percent.png';
import Button from './UI/Button';


const Home = () => {
    const classHome = `flex j-center a-center gap`;
    return (
        <section className={classHome}>
            <div className={classes.content +  " flex column gap-2"}>
                <div className={classes.subtitle}>
                    <h3 className='flex  a-center gap-1 blue'>
                        <span className='flex column j-center a-center'>
                            <img src={badgePercent} alt="badgePercent" />
                        </span>
                        Investment made easy
                    </h3>
                </div>
                <div className="title">
                    <h1>The Easies Way to Track Multiple Currencies</h1>
                </div>
                <div className="description">
                    <p className='subdue'>
                        Market Watchman allow you to monitor your balances,
                        trade without limits and earn rewards for specific coins.
                    </p>
                </div>
                <div className={classes.buttons + " flex gap-1"}>
                    <Button text='Try Now' icon={<FaChevronCircleRight />} />
                    <Button text='How It Works?' subduedButton={true} />
                </div>
            </div>
            <div className="image">
                <img src={home} alt="" className='half-width' />
            </div>


        </section>
    );
}

export default Home;
