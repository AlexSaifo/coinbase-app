import React, { useEffect, useState } from 'react';
import Button from './UI/Button';
import classes from './NavBar.module.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import Backdrop from './UI/Backdrop';

const NavBar = (props) => {
    const Links = ["Home", "Dashboard", "Learn", "FAQ", "Contact", "About"];
    const [navIsOpen, setNavIsOpen] = useState(false);
    const [classSide, setClassSide] = useState(`${classes.sidBar}`)


    const onCloseHaandler = ()=>{
        setNavIsOpen(false)
    };
    


    useEffect(() => {
        if (navIsOpen) {
            setClassSide(`${classes.sidBar} ${classes.show}`);
            document.querySelector('body').style.overflowY = 'hidden';
            return
        }
        document.querySelector('body').style.overflowY = 'scroll';
        setClassSide(`${classes.sidBar}`);
    }, [navIsOpen]);

    return (
        <nav className={'flex j-between a-center ' + classes.nav}>
            {navIsOpen && <Backdrop onClose={onCloseHaandler}/>}
            <div className={classes.brand}>
                <h2>Coinbase</h2>
            </div>
            <div className={classes.toggle}>
                {
                    navIsOpen ?
                        <MdClose onClick={(e) => {
                            setNavIsOpen(false)
                        }} /> :
                        <GiHamburgerMenu onClick={(e) => {
                            setNavIsOpen(true);
                        }} />
                }
            </div>

            <div className={classSide}>
                <div className={classes.links}>
                    <ul className='flex gap-2 '>
                        {Links.map(link => {
                            return <li key={link}>
                                <a href={'#' + link}>{link}</a>
                            </li>
                        })}
                    </ul>
                </div>
                <div className={classes.auth + " flex a-center gap-1"}>
                    <Button text="Sign In" subduedButton={true} />
                    <Button text="Sign Up" />
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
