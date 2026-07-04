import type { FC } from 'react';
import styles from './MissionSection.module.scss';
import SectionTag from '../SectionTag/SectionTag';

const specs = [
  { label: 'File', value: '002' },
  { label: 'Rev', value: '00' },
  { label: 'Date', value: 'May 2026' },
  { label: 'Status', value: 'Live' },
];

const MissionSection: FC = () => {
  return (
    <section id="mission" className={styles.mission}>
      <SectionTag number={2} label="Manifest" variant="orange" />

      <div className={styles.content}>
        {/* Left sidebar: spec sheet */}
        <aside className={styles.sidebar}>
          <dl className={styles.specs}>
            {specs.map((spec) => (
              <div key={spec.label} className={styles.specRow}>
                <dt>{spec.label}</dt>
                <dd>{spec.value}</dd>
              </div>
            ))}
          </dl>
          <p className={styles.note}>
            A short note on who we are, what we make, and why.
          </p>
        </aside>

        {/* Right main area: statement + body columns */}
        <div className={styles.main}>
          <h2 className={styles.statement}>Nostalgia for tomorrow.</h2>

          <div className={styles.columns}>
            <div className={styles.column}>
              <p>
                AnaphylactiK Studios is a collective of multidisciplinary artists building 
                immersive worlds where nostalgia meets the future. <br />What started as a 
                collaboration between University of Toronto and Centennial College students 
                has evolved into a team of game developers carrying a mission to empower 
                players to dream big.
              </p>
              <p>
                We are passionate about immersing players in 
                meaningful, narrative-driven stories that unfold within imaginative worlds 
                shaped by sci-fi and solarpunk.
              </p>
            </div>

            <div className={styles.column}>
              <h3 className={styles.subheading}>Our Goals</h3>
              <p>
                Our stories reach for honest feelings and questions. We are particularly 
                drawn to the tensions between technology and humanity, the worlds we might 
                build, and the ones we should be careful not to. We hope that our stories 
                linger in our players long after they finish our games.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
