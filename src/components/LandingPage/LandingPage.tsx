import type { FC } from 'react';
import styles from './LandingPage.module.scss';
import '../../styles/styles.scss';
import Navbar from '../Navbar/Navbar';
import HeroSection from '../HeroSection/HeroSection';
import GamesSection from '../GamesSection/GamesSection';
import CrewSection from '../CrewSection/CrewSection';
import Footer from '../Footer/Footer';
import MissionSection from '../MissionSection/MissionSection';


const marqueeItems = [
  'Available Now - PDK2003',
  'WE LOVE CHEESE!',
  'HAVE A GOOD DAY :)',
  'Now with more cheese.',
  'CURRENTLY WORKING ON: RACCOON VACUUM GAME',
];

const LandingPage: FC = () => (
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

    {/* Mission Section */}
    <MissionSection />

    {/* Crew Section */}
    <CrewSection />

    {/* Footer */}
    <Footer />
  </div>
);

export default LandingPage;



