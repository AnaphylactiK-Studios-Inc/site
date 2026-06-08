import styles from './Navbar.module.scss';
import type { FC } from "react";

const Navbar: FC = () => (
    <nav className={styles.nav}>
        <div className={styles.logo}>ANAPHYLACTIK</div>
        <ul className={styles.navLinks}>
            <li><a href="#home">00/ Index</a></li>
            <li><a href="#games">01/ Games</a></li>
            <li><a href="#mission">02/ Mission</a></li>
            <li><a href="#crew">03/ Crew</a></li>
        </ul>
        <div className={styles.playButton}>
            <a href="https://itch.io/" target="_blank" rel="noopener noreferrer">Play PDK2003</a>
        </div>
    </nav>
);

export default Navbar;