import React from 'react'
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import classes from './Services.module.css';

const servicesData = [
    {
        image: service1,
        title: "Manage your portfolio",
        descrption:
            "Coinbase supports a variety of the most popular digital currencies.",
    },
    {
        image: service2,
        title: "Recurring buys",
        descrption:
            "Coinbase supports a variety of the most popular digital currencies.",
    },
    {
        image: service3,
        title: "Mobile apps",
        descrption:
            "Coinbase supports a variety of the most popular digital currencies.",
    },
];

export default function Services() {
    return (
        <section className={'flex column j-center a-center gap ' + classes.servicesSection}>
            <div className="title-container flex column gap-1">
                <div className="title text-center">
                    <h2>
                        Start your trading with us
                    </h2>
                </div>
                <div className="subtitle text-center subdue">
                    <h3>
                        Market Watchmen has a variety of features that make it the best place to start trading
                    </h3>
                </div>
            </div>
            <div className={classes.services + " flex j-center a-center gap-1"}>
                {
                    servicesData.map(({ image, title, descrption }, idx) => {
                        return (
                            <div key={title} className={classes.service + " flex column text-center gap-1"}>
                                <div className={classes.image}>
                                    <img src={image} alt="image" />
                                </div>
                                <h3 className={classes.title} >{title}</h3>
                                <p className={classes.descrption + ' subdue'}>{descrption}</p>
                            </div>
                        );
                    })
                }
            </div>

        </section>
    )
}
