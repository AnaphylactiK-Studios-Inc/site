import { useState, type FC } from 'react';
import styles from './CrewSection.module.scss';
import { CrewMembers, type CrewMemberInterface } from './CrewMembers';
import SectionTag from '../SectionTag/SectionTag';

interface CrewCardProps {
    member: CrewMemberInterface;
    index: number;
}

const CrewCard: FC<CrewCardProps> = ({ member, index }) => {
    // Hover gives a preview flip; clicking pins the card open so it can be read
    // without holding the mouse over it.
    const [pinned, setPinned] = useState(false);
    const record = `#${String(index + 1).padStart(3, '0')}`;

    return (
        <article
            className={`${styles.crewCard} ${pinned ? styles.pinned : ''}`}
            role="button"
            tabIndex={0}
            aria-pressed={pinned}
            aria-label={`${member.name} — flip card`}
            onClick={() => setPinned((p) => !p)}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setPinned((p) => !p);
                }
            }}
        >
            <div className={styles.inner}>
                {/* Front: avatar */}
                <div className={styles.front}>
                    <div className={styles.heading}>
                        <span>Record</span>
                        <span className={styles.number}>{record}</span>
                    </div>
                    <img
                        className={styles.avatar}
                        src={member.imageUrl}
                        alt={member.name}
                    />
                    <h3 className={styles.name}>{member.name}</h3>
                    <ul className={styles.roles}>
                        {member.role.map((role) => (
                            <li key={role} className={styles.role}>
                                {role}
                            </li>
                        ))}
                    </ul>
                    <div className={styles.divider}></div>
                    <span className={styles.flipHint} aria-hidden="true">
                        ↻ Flip
                    </span>
                </div>

                {/* Back */}
                <div className={styles.back}>
                    <div className={styles.heading}>
                        <span>Record</span>
                        <span className={styles.number}>{record}</span>
                    </div>
                    <h3 className={styles.name}>{member.name}</h3>
                    <ul className={styles.roles}>
                        {member.role.map((role) => (
                            <li key={role} className={styles.role}>
                                {role}
                            </li>
                        ))}
                    </ul>
                    <div className={styles.divider}></div>
                    <p className={styles.bio}>{member.bio}</p>
                    <div className={styles.divider}></div>
                    <ul className={styles.links}>
                        {member.links.map((link) => (
                            <li key={link}>
                                <a
                                    href={link}
                                    target="_blank"
                                    rel="noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </article>
    );
};

const CrewSection: FC = () => {
    return (
        <section className={styles.CrewSection} id="crew">
            <SectionTag number={3} label="Crew Manifest" variant="yellow" />
            <p>Introduction text for the crew section.</p>

            <div className={styles.crewMembers}>
                {CrewMembers.map((member, index) => (
                    <CrewCard member={member} index={index} key={member.name} />
                ))}
            </div>
        </section>
    );
}

export default CrewSection;
