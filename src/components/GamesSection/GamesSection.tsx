import { useCallback, useEffect, useState, type FC } from 'react';
import styles from './GamesSection.module.scss';
import YouTubeFacade from './YouTubeFacade/YouTubeFacade';

const screenshots = Object.entries(
  import.meta.glob('../../assets/images/pdk2003/pdk2003-screenshot-*.png', {
    eager: true,
    import: 'default',
  }) as Record<string, string>
)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, src]) => src);

  
const GamesSection: FC = () => {
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [entered, setEntered] = useState(false);
  const count = screenshots.length;

  const next = useCallback(
    () => setIndex((i) => (i + 1) % count),
    [count]
  );
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + count) % count),
    [count]
  );

  const openLightbox = useCallback(() => setIsOpen(true), []);
  const closeLightbox = useCallback(() => setEntered(false), []);

  useEffect(() => {
    if (!isOpen) return;
    const id = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(id);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowRight') next();
      else if (e.key === 'ArrowLeft') prev();
    };

    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, next, prev, closeLightbox]);

  const currentSrc = screenshots[index];

  return (
    <section className={styles.GamesSection} id="games">
      <div className={styles.content}>
        <div className={styles.leftCol}>
         <h2>Peanut & Dreadnought Killer <span className="orange">2003</span></h2>
         <p>A third-person puzzle adventure where you control <span className="yellow">Peanut</span>, a nimble post-apocalyptic mouse, and her towering mech companion <span className="orange">Dreadnought Killer</span>. Work together to escape a ruined facility in an alternate timeline where Y2K did end the world.</p>
          
          <ul className={styles.boxes}>
            <li>
              <h3>Status</h3>
              <p>Live</p>
            </li>
            <li>
              <h3>Genre</h3>
              <p>3D Puzzle, Adventure</p>
            </li>
            <li>
              <h3>Platforms</h3>
              <p>PC (Windows)</p>
            </li>
            <li>
              <h3>Updates</h3>
              <p>Completed</p>
            </li>
          </ul>

          <div className={styles.buttons}>
            <a className={styles.playBtn} href="https://anaphylactik-studios.itch.io/peanut-and-dreadnought-killer-2003" target="_blank" rel="noopener noreferrer">
              Play on Itch.io
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
	              <g fill="currentColor">
		              <path d="M15.64 7.025h-3.622v-2h7v7h-2v-3.55l-4.914 4.914l-1.414-1.414z"></path>
		              <path d="M10.982 6.975h-6v12h12v-6h-2v4h-8v-8h4z"></path>
              	</g>
              </svg>
            </a>
            <a className={styles.devLogBtn} href="" target="_blank" rel="noopener noreferrer">
              / Dev Logs
            </a>
          </div>
        </div>


        <div className={styles.rightCol}>
          <div className={styles.trailer}>
            <YouTubeFacade
              id="dq-B-aCkp84"
              title="Peanut & Dreadnought Killer 2003 Trailer"
            />
          </div>
          {/* Image Gallery Carousel */}
          <div className={styles.gallery}>
            <div className={styles.viewport}>
              {screenshots.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt={`PDK2003 screenshot ${i + 1}`}
                  className={`${styles.slide} ${i === index ? styles.slideActive : ''}`}
                  aria-hidden={i !== index}
                />
              ))}

              <div className={styles.topBar}>
                <span className={styles.label}>Screenshots</span>
                <button
                  type="button"
                  className={styles.expandBtn}
                  onClick={openLightbox}
                  aria-label="Expand screenshot"
                >
                  <svg width="1em" height="1em" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M9 3H3v6h2V5h4zm12 0h-6v2h4v4h2zM5 15H3v6h6v-2H5zm16 0h-2v4h-4v2h6z"
                    />
                  </svg>
                </button>
              </div>

              {count > 1 && (
                <>
                  <button
                    type="button"
                    className={`${styles.navBtn} ${styles.prev}`}
                    onClick={prev}
                    aria-label="Previous screenshot"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    className={`${styles.navBtn} ${styles.next}`}
                    onClick={next}
                    aria-label="Next screenshot"
                  >
                    ›
                  </button>
                </>
              )}

              <div className={styles.indexBox}>
                {String(index + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
              </div>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className={`${styles.lightbox} ${entered ? styles.lightboxOpen : ''}`}
          role="dialog"
          aria-modal="true"
          aria-label="Screenshot viewer"
          onClick={closeLightbox}
          onTransitionEnd={(e) => {
            // When the fade-out finishes, unmount the lightbox.
            if (e.target === e.currentTarget && !entered) setIsOpen(false);
          }}
        >
          <button
            type="button"
            className={styles.closeBtn}
            onClick={closeLightbox}
            aria-label="Close"
          >
            ×
          </button>

          {/* Stop clicks on the controls/image from closing the lightbox. */}
          <div className={styles.lightboxInner} onClick={(e) => e.stopPropagation()}>
            {count > 1 && (
              <button
                type="button"
                className={`${styles.navBtn} ${styles.prev}`}
                onClick={prev}
                aria-label="Previous screenshot"
              >
                ‹
              </button>
            )}

            <img src={currentSrc} alt={`PDK2003 screenshot ${index + 1}`} />

            {count > 1 && (
              <button
                type="button"
                className={`${styles.navBtn} ${styles.next}`}
                onClick={next}
                aria-label="Next screenshot"
              >
                ›
              </button>
            )}
          </div>

          <div className={styles.counter}>
            {index + 1} / {count}
          </div>
        </div>
      )}
    </section>
  );
};

export default GamesSection;