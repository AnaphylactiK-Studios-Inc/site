import type { FC } from 'react';
import styles from './LandingPage.module.scss';
import '../../styles/styles.scss';
import Navbar from '../Navbar/Navbar';
import HeroSection from '../HeroSection/HeroSection';
import GamesSection from '../GamesSection/GamesSection';


const marqueeItems = [
  'Available Now - PDK2003',
  'WE LOVE CHEESE!',
  'HAVE A GOOD DAY :)',
  'Now with more cheese.',
  'CURRENTLY WORKING ON: RACCOON VACUUM GAME',
];

interface LandingPageProps {}

const LandingPage: FC<LandingPageProps> = () => (
  <div className={styles.LandingPage}>
    {/* Navbar */}
    <Navbar />
    
    {/* Hero Section */}
    <HeroSection />

    {/* Marquee Banner */}
    <div className={styles.marquee}>
      <div className={styles.marqueeTrack}>
        {[...marqueeItems, ...marqueeItems].map((item, i) => (
          <span key={i} className={styles.marqueeItem}>
            <span className={styles.star}>★</span>
            {item}
            <span className={styles.slash}>/</span>
          </span>
        ))}
      </div>
    </div>

    {/* Games */}
    <GamesSection />
  </div>
);

export default LandingPage;



