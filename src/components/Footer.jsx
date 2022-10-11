import React from 'react';
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import spacemen from "../assets/spacemen.png";
import cards from "../assets/cards.png";
import classes from './Footer.module.css'

const companyLinks = [
    "About",
    "Careers",
    "Affiliates",
    "Blog",
    "Press",
    "Investors",
    "Legal & Privacy",
    "Cookie policy",
    "Cookie preferences",
];
const LearnLinks = [
    "Browse crypto prices",
    "Coinbase Bytes newsletter",
    "Crypto basics",
    "Tips & Turoials",
    "Market Updates",
    "What is Bitcoin?",
    "What is crypto?",
    "What is a blockchain?",
    "How to set up a crypto waller",
    "How to send crypto",
];
const socialIcons = [<BsFacebook />, <BsTwitter />, <BsYoutube />];


const Footer = () => {
    return (
        <section className={classes.footer + " flex column gap"}>
          <div className={classes["upper-footer"]}>
            <div className=" flex column gap-1">
              <div className="brand">
                <h2>Coinbase</h2>
              </div>
              <div className="address">
                <p>GymVast, 18 East 50th Street, 4th Floor, New York, NY 10022</p>
              </div>
              <div className="info">
                <span>T : +1-202-555-0184</span>
                <span>E : hello@cryptoz.com</span>
              </div>
              <div className={classes['social-icons'] +" flex gap-2"}>
                {socialIcons.map((icon, index) => {
                  return (
                    <div className="icon" key={index}>
                      {icon}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className=" flex column gap-1">
              <div className="title">
                <h3>Company</h3>
              </div>
              <ul className="flex column gap-half">
                {companyLinks.map((link) => {
                  return <li key={link}>{link}</li>;
                })}
              </ul>
            </div>
            <div className=" flex column gap-1">
              <div className="title">
                <h3>Learn</h3>
              </div>
              <ul className="flex column gap-half">
                {LearnLinks.map((link) => {
                  return <li key={link}>{link}</li>;
                })}
              </ul>
            </div>
            <div className=" flex column gap-1">
              <div className="title">
                <h3>Company</h3>
              </div>
              <ul className="flex column gap-half">
                {companyLinks.map((link) => {
                  return <li key={link}>{link}</li>;
                })}
              </ul>
            </div>
            <div className={"col " + classes.spacemen}>
              <div className="image">
                <img src={spacemen} alt="spacemen" />
              </div>
            </div>
          </div>
          <div className="lower-footer flex a-center j-between gap">
            <div className="col1">
              <span>&copy; Crypto a Theme by Kishan Sheth || Coded By Alex Saifo</span>
            </div>
            <div className="col2 flex a-center gap">
              <span>Privacy Policy</span>
              <span>Terms & Conditions</span>
              <span className={classes.cards}>
                <img src={cards} alt="cards" />
              </span>
            </div>
          </div>
        </section>
        );
}

export default Footer;
