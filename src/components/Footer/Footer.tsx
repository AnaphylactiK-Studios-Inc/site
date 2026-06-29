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
                    <p>Video game studio. More text here, yap.</p>
                </div>
                <div className={styles.footerRight}>
                    <div>
                        <h3>/ Contact</h3>
                        <ul>
                            <li>gmail.com</li>
                            <li>Discord</li>
                        </ul>
                    </div>
                    <div>
                        <h3>/ Channels</h3>
                        <ul>
                            <li>itch.io</li>
                            <li>Instagram</li>
                            <li>YouTube</li>
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