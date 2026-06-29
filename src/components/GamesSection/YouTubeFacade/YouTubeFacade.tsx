import { useState, type FC } from 'react';
import styles from './YouTubeFacade.module.scss';

interface YouTubeFacadeProps {
  id: string;
  title?: string;
}

const YouTubeFacade: FC<YouTubeFacadeProps> = ({ id, title = 'YouTube video' }) => {
  const [activated, setActivated] = useState(false);

  if (activated) {
    return (
      <div className={styles.facade}>
        <iframe
          className={styles.iframe}
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&controls=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      className={styles.facade}
      onClick={() => setActivated(true)}
      aria-label={`Play video: ${title}`}
      style={{
        backgroundImage: `url(https://img.youtube.com/vi/${id}/maxresdefault.jpg)`,
      }}
    >
      <span className={styles.label}>Trailer</span>
      <span className={styles.playBtn} aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
          <path fill="currentColor" d="M22 11v2h-1v1h-1v1h-2v1h-2v1h-1v1h-2v1h-2v1h-1v1H8v1H6v1H3v-1H2V2h1V1h3v1h2v1h2v1h1v1h2v1h2v1h1v1h2v1h2v1h1v1z"></path>
          </svg>
        </span>
    </button>
  );
};

export default YouTubeFacade;
