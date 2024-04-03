import { FaGithub, FaReact, FaLinkedin } from "react-icons/fa";

import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <a href="https://github.com/IgorAgui" target="_blank" rel="noreferrer"><FaGithub /></a>
                </li>
                <li>
                    <a href="https://react.dev/" target="_blank" rel="noreferrer"><FaReact /></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/igoraguiamg/" target="_blank" rel="noreferrer"><FaLinkedin /></a>

                </li>
            </ul>
            <p className={styles.copy_right}>
                <span>Cost</span> &copy; 2024
            </p>
        </footer>
    )
}

export default Footer