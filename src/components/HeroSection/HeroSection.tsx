import styles from './HeroSection.module.scss';
import FaultyTerminal from './FaultyTerminal';
import type { FC } from 'react';

interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = () => (
  <div className={styles.HeroSection} id="home">
    <div className={styles.terminal}>
      <img src="public\fIu1_Z.png" className={styles.background} alt="" />
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
        <img className={styles.logo} src="src/assets/images/logo/logo-full.svg" alt="AnaphylactiK Logo" />
      </div>
    </div>
    </div>
);

export default HeroSection;