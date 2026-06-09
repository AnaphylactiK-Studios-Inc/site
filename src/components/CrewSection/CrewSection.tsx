import type { FC } from 'react';
import styles from './CrewSection.module.scss';
import { CrewMembers } from './CrewMembers';

const CrewSection: FC = () => {
    return (
        <section className={styles.CrewSection} id="crew">
            <p>Introduction text for the crew section.</p>

            <div className={styles.crewMembers}>
                {CrewMembers.map((member, index) => (
                    <article className={styles.crewCard} key={member.name}>
                        <div className={styles.heading}>
                            <span>Record</span>
                            <span className={styles.number}>
                                #{String(index + 1).padStart(3, '0')}
                            </span>
                        </div>
                        <img
                            className={styles.avatar}
                            src={member.imageUrl}
                            alt={member.name}
                        />
                        <div>
                            <h3 className={styles.name}>{member.name}</h3>
                            <ul className={styles.roles}>
                                {member.role.map((role) => (
                                    <li key={role} className={styles.role}>
                                        {role}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={styles.divider}></div>
                        <p className={styles.bio}>{member.bio}</p>
                        <ul className={styles.links}>
                            {member.links.map((link) => (
                                <li key={link}>
                                    <a href={link} target="_blank" rel="noreferrer">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default CrewSection;
