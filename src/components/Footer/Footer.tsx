import type { FC } from 'react';
import styles from './Footer.module.scss';
import logo from '../../assets/images/logo/logo-colour-bg.png';


const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerWrapper}>
                <div className={styles.footerLeft}>
                    <img src={logo} alt="AnaphylactiK Studios Logo" />
                    <h2>AnaphylactiK Studios</h2>
                    <p>Video game studio. Based in Toronto.</p>
                </div>
                <div className={styles.footerRight}>
                    <div>
                        <h3>/ Contact</h3>
                        <ul>
                            <li>
                                <a href="mailto:anaphylactik.s@gmail.com">
                                    <>anaphylactik.s@gmail.com</>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M6 8h2v2H6zm2 2h2v2H8zm10-2h-2v2h2zm-2 2h-2v2h2zm-6 2h4v2h-4zM2 6h2v12H2zm18 0h2v12h-2zM2 4h20v2H2zm0 14h20v2H2z"></path>
                                    </svg>
                                </a>
                            </li>
                            {/* <li>
                                <a href="https://discord.gg/your-server" target="_blank" rel="noopener noreferrer">
                                    Discord
                                </a>
                            </li> */}
                        </ul>
                    </div>
                    <div>
                        <h3>/ Channels</h3>
                        <ul>
                            <li>
                                <a href="https://anaphylactik-studios.itch.io/" target="_blank" rel="noopener noreferrer">
                                    itch.io
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                        <g fill="currentColor">
                                            <path d="M15.64 7.025h-3.622v-2h7v7h-2v-3.55l-4.914 4.914l-1.414-1.414z"></path>
                                            <path d="M10.982 6.975h-6v12h12v-6h-2v4h-8v-8h4z"></path>
                                        </g>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/anaphylactik.studios" target="_blank" rel="noopener noreferrer">
                                    Instagram
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                        <g fill="currentColor">
                                            <path d="M15.64 7.025h-3.622v-2h7v7h-2v-3.55l-4.914 4.914l-1.414-1.414z"></path>
                                            <path d="M10.982 6.975h-6v12h12v-6h-2v4h-8v-8h4z"></path>
                                        </g>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/@AnaphylactiKStudios" target="_blank" rel="noopener noreferrer">
                                    YouTube
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                        <g fill="currentColor">
                                            <path d="M15.64 7.025h-3.622v-2h7v7h-2v-3.55l-4.914 4.914l-1.414-1.414z"></path>
                                            <path d="M10.982 6.975h-6v12h12v-6h-2v4h-8v-8h4z"></path>
                                        </g>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={styles.copyright}>
                <p>© 2026 AnaphylactiK Studios</p>
            </div>
        </footer>
    );
}

export default Footer;