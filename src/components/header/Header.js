import React from 'react';
import styles from "./styles.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faBars
} from '@fortawesome/free-solid-svg-icons'
import {
    faFacebookF,
    faTwitter,
    faInstagram,
    faTumblr,
    faWhatsapp
} from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom";

const Header = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    const showList = () => {
        if(document.getElementById("x").style.display == "") {
            document.getElementById("x").style.display = "flex"
        } else {
            document.getElementById("x").style.display = ""
        }
    }


    return (
        <div className={styles.header}>
            <div className={styles.logoArea}>
                <Link onClick={() => scrollToTop()} to="/" className={styles.logo}>Logo</Link>
            </div>
            <div className={styles.barMenu}>
                <div className={styles.bar}>
                    <FontAwesomeIcon onClick={() => showList()} icon={faBars} />
                </div>
                <div id="x" className={styles.list}>
                    <Link to="/about" className={styles.listItem}>ABOUT ME</Link>
                    <Link to="/contact" className={styles.listItem}>CONTACT ME</Link>
                    <Link to="/personal" className={styles.listItem}>PERSONAL</Link>
                    <Link to="/illustrations" className={styles.listItem}>ILLUSTRATIONS</Link>
                </div>
            </div>
            <ul className={styles.pageArea}>
                <Link onClick={() => scrollToTop()} to="/about" className={styles.pageAreaItem}>ABOUT ME</Link>
                <Link onClick={() => scrollToTop()} to="/contact" className={styles.pageAreaItem}>CONTACT ME</Link>
                <Link onClick={() => scrollToTop()} to="/personal" className={styles.pageAreaItem}>PERSONAL</Link>
                <Link onClick={() => scrollToTop()} to="/illustrations" className={styles.pageAreaItem}>ILLUSTRATIONS</Link>
            </ul>
            <div className={styles.linksArea}>
                <a className={styles.linksAreaItem} href="https://www.facebook.com/" title="Facebook">
                    <FontAwesomeIcon className={styles.fas} icon={faFacebookF} />
                </a>
                <a className={styles.linksAreaItem} href="https://www.twitter.com/" title="Twitter">
                    <FontAwesomeIcon className={styles.fas} icon={faTwitter} />
                </a>
                <a className={styles.linksAreaItem} href="https://www.instagram.com/" title="Instagram">
                    <FontAwesomeIcon className={styles.fas} icon={faInstagram} />
                </a>
                <a className={styles.linksAreaItem} href="https://tumblr.com/" title="Tumblr">
                    <FontAwesomeIcon className={styles.fas} icon={faTumblr} />
                </a>
                <a className={styles.linksAreaItem} href="https://tumblr.com/" title="WhatsApp">
                    <FontAwesomeIcon className={styles.fas} icon={faWhatsapp} />
                </a>
            </div>
        </div>
    )
    };

export default Header;