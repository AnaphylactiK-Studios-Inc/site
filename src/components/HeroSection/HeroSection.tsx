import styles from './HeroSection.module.scss';
import FaultyTerminal from './FaultyTerminal';
import logoFull from '../../assets/images/logo/logo-full.svg';
import type { FC } from 'react';

// fIu1_Z.png lives in public/, so reference it through the configured base path.
const heroBackground = `${import.meta.env.BASE_URL}fIu1_Z.png`;

interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = () => (
  <div className={styles.HeroSection} id="home">
    <div className={styles.terminal}>
      <img src={heroBackground} className={styles.background} alt="" />
      <FaultyTerminal
        scale={1.5}
        gridMul={[2, 1]}
        digitSize={1.2}
        timeScale={0.5}
        pause={false}
        scanlineIntensity={0.5}
        glitchAmount={1}
        flickerAmount={1}
        noiseAmp={1}
        chromaticAberration={0}
        dither={0}
        curvature={0.1}
        tint="#0000009a"
        mouseReact
        mouseStrength={0.5}
        pageLoadAnimation
        brightness={0.6}
      />
      <div className={styles.heading}>
        <img className={styles.logo} src={logoFull} alt="AnaphylactiK Logo" />
      </div>
    </div>
    </div>
);

export default HeroSection;