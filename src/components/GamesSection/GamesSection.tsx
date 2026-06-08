import type { FC } from 'react';
import styles from './GamesSection.module.scss';

const GamesSection: FC = () => {
  return (
    <section className={styles.GamesSection} id="games">
      <div className={styles.content}>
        <div className={styles.leftCol}>
         <h2>Peanut & Dreadnought Killer <span className="orange">2003</span></h2>
         <p>A third-person puzzle adventure where you control Peanut, a nimble post-apocalyptic mouse, and her towering mech companion Dreadnought Killer. Work together to escape a ruined facility in an alternate timeline where Y2K did end the world.</p>
          <div></div>
          <div>
            <a href="itch.io/pdk2003" target="_blank" rel="noopener noreferrer">Play on Itch.io</a>
            <a href="">/ Dev Logs</a>
          </div>
        </div>


        <div>
          {/* Image Gallery */}
          <div>
            Placeholder
          </div>
        </div>
      </div>

    </section>
  );
};

export default GamesSection;