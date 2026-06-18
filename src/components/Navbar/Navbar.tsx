import styles from './Navbar.module.scss';
import { useEffect, useState, type FC } from "react";
import logo from '../../assets/images/logo/logo-transparent.svg';

const SECTIONS = [
    { id: 'home', label: '00/ Index' },
    { id: 'games', label: '01/ Games' },
    { id: 'mission', label: '02/ Mission' },
    { id: 'crew', label: '03/ Crew' },
] as const;

const Marker: FC = () => (
    <svg
        className={styles.marker}
        width="0.7em"
        height="0.7em"
        viewBox="0 0 10 10"
        aria-hidden="true"
    >
        <path d="M5 0 L10 5 L5 10 L0 5 Z" fill="currentColor" />
    </svg>
);

const Navbar: FC = () => {
    const [activeId, setActiveId] = useState<string>(SECTIONS[0].id);

    useEffect(() => {
        const sections = SECTIONS
            .map(({ id }) => document.getElementById(id))
            .filter((el): el is HTMLElement => el !== null);

        if (sections.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                }
            },
            { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    return (
        <nav className={styles.nav} data-section={activeId}>
            <img className={styles.logo} src={logo} alt="AnaphylactiK Logo" />
            <ul className={styles.navLinks}>
                {SECTIONS.map(({ id, label }) => {
                    const isActive = activeId === id;
                    return (
                        <li key={id}>
                            <a
                                href={`#${id}`}
                                className={isActive ? styles.active : undefined}
                                aria-current={isActive ? 'true' : undefined}
                            >
                                {isActive && <Marker />}
                                {label}
                            </a>
                        </li>
                    );
                })}
            </ul>
            <div className={styles.playButton}>
                <a href="https://itch.io/" target="_blank" rel="noopener noreferrer">Play PDK2003</a>
            </div>
        </nav>
    );
};

export default Navbar;
