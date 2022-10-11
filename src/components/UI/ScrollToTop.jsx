/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import classes from './ScrollToTop.module.css';
import { FaChevronUp } from "react-icons/fa";
const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);

    window.addEventListener("scroll", () => {
        window.pageYOffset > 100 ? setVisible(true) : setVisible(false);
    });

    return (
            <div className={classes.scroll}>
                <a href="#" className={`${visible ? classes.block : classes.none}`}>
                    <FaChevronUp />
                </a>
            </div>
            
    );
}

export default ScrollToTop;
