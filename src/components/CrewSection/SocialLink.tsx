import type { FC, ReactElement } from 'react';

// Shared attrs so every icon scales with font-size and inherits the link colour.
const svgProps = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '1em',
    height: '1em',
    viewBox: '0 0 24 24',
    fill: 'currentColor',
    'aria-hidden': true,
} as const;

const InstagramIcon: FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
        <path fill="currentColor" d="M17 9V8h-1V7h-1V6H9v1H8v1H7v1H6v6h1v1h1v1h1v1h6v-1h1v-1h1v-1h1V9zm-1 5h-1v1h-1v1h-4v-1H9v-1H8v-4h1V9h1V8h4v1h1v1h1z"></path>
        <path fill="currentColor" d="M22 5V3h-1V2h-2V1H5v1H3v1H2v2H1v14h1v2h1v1h2v1h14v-1h2v-1h1v-2h1V5zm-1 14h-1v1h-1v1H5v-1H4v-1H3V5h1V4h1V3h14v1h1v1h1z"></path>
        <path fill="currentColor" d="M17 5h2v2h-2z"></path>
    </svg>
);

const LinkedInIcon: FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
        <path fill="currentColor" d="M22 2V1H2v1H1v20h1v1h20v-1h1V2zm-9 10v8h-3V9h3v1h1V9h4v1h1v10h-3v-8zM4 8V5h3v3zm3 1v11H4V9z"></path>
    </svg>
);

const LinktreeIcon: FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256">
        <path fill="currentColor" d="M140 164v68a12 12 0 0 1-24 0v-68a12 12 0 0 1 24 0m68-72h-51l35.52-35.51a12 12 0 0 0-17-17L140 75V24a12 12 0 0 0-24 0v51L80.49 39.51a12 12 0 0 0-17 17L99 92H48a12 12 0 0 0 0 24h51l-35.49 35.51a12 12 0 0 0 17 17L128 121l47.51 47.52a12 12 0 0 0 17-17L157 116h51a12 12 0 0 0 0-24"></path>
    </svg>
);

const ItchIcon: FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32">
        <path fill="currentColor" d="M4.172 1.787C2.776 2.615.027 5.771 0 6.599v1.375c0 1.735 1.625 3.267 3.099 3.267c1.771 0 3.251-1.469 3.251-3.213c0 1.744 1.421 3.213 3.197 3.213c1.771 0 3.151-1.469 3.151-3.213c0 1.744 1.516 3.213 3.287 3.213h.032c1.776 0 3.291-1.469 3.291-3.213c0 1.744 1.381 3.213 3.152 3.213s3.197-1.469 3.197-3.213c0 1.744 1.475 3.213 3.245 3.213c1.479 0 3.104-1.532 3.104-3.267V6.599c-.032-.828-2.776-3.984-4.177-4.812c-4.339-.156-7.344-.183-11.823-.183c-4.484.005-10.593.073-11.828.183zm8.505 8.634a3.7 3.7 0 0 1-.625.797v.005a3.73 3.73 0 0 1-2.599 1.057a3.7 3.7 0 0 1-2.599-1.063a3.4 3.4 0 0 1-.6-.787c-.167.297-.4.552-.645.787A3.7 3.7 0 0 1 3.01 12.28h-.005a1.1 1.1 0 0 1-.349-.073a55 55 0 0 0-.224 3.937v.005c-.005.527-.005.953-.011 1.552c.032 3.115-.307 10.089 1.376 11.803c2.604.604 7.396.88 12.197.885h.005c4.807-.005 9.593-.281 12.197-.885c1.683-1.713 1.344-8.688 1.376-11.803c-.005-.599-.005-1.025-.011-1.552v-.005a52 52 0 0 0-.224-3.937a1 1 0 0 1-.349.073h-.005a3.7 3.7 0 0 1-2.599-1.063h.005c-.245-.235-.479-.489-.645-.787h-.005a3.4 3.4 0 0 1-.595.787a3.71 3.71 0 0 1-5.198 0a3.6 3.6 0 0 1-.615-.787l-.011-.016c-.172.308-.38.573-.615.803a3.7 3.7 0 0 1-2.599 1.063h-.005q-.048.001-.104-.005q-.054.006-.109.005h-.005a3.7 3.7 0 0 1-2.593-1.063a3.4 3.4 0 0 1-.609-.787l-.011-.016zm-2.672 3.454c1.057.005 1.995 0 3.161 1.271c.916-.093 1.875-.14 2.833-.14s1.917.047 2.833.14c1.167-1.271 2.104-1.271 3.161-1.271h.005c.5 0 2.5 0 3.891 3.912l1.495 5.369c1.109 3.995-.355 4.095-2.177 4.095c-2.708-.1-4.208-2.068-4.208-4.037c-1.5.251-3.251.371-5 .371s-3.5-.12-4.995-.371c0 1.969-1.5 3.937-4.208 4.037c-1.828-.005-3.292-.1-2.183-4.095l1.495-5.369c1.396-3.912 3.396-3.912 3.896-3.912zM16 16.953c-.005 0-2.849 2.62-3.364 3.547l1.864-.073v1.625c0 .079.751.047 1.5.011c.749.036 1.495.068 1.495-.011v-1.625l1.869.073C18.849 19.573 16 16.953 16 16.953"></path>
    </svg>
);

const GlobeIcon: FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
        <path fill="currentColor" d="M22 9V7h-1V5h-1V4h-1V3h-2V2h-2V1H9v1H7v1H5v1H4v1H3v2H2v2H1v7h1v1h1v2h1v1h1v1h2v1h2v1h6v-1h2v-1h2v-1h1v-1h1v-2h1v-2h1V9zm-1 1v4h-3v-4zm-5-6h1v1h2v2h1v1h-3V5h-1zm-2 14v2h-1v1h-2v-1h-1v-2H9v-2h6v2zm2-8v4H8v-4zM9 6h1V4h1V3h2v1h1v2h1v2H9zM4 7h1V5h2V4h1v1H7v3H4zm-1 7v-4h3v4zm2 5v-2H4v-1h3v3h1v1H7v-1zm14-2v2h-2v1h-1v-1h1v-3h3v1z"></path>
    </svg>
);

interface Social {
    /** Human-readable name, used for aria-label / tooltip. */
    label: string;
    icon: ReactElement;
}

// Maps a URL to a recognisable icon by matching the host; anything unrecognised
// falls back to a globe.
export const getSocial = (url: string): Social => {
    const u = url.toLowerCase();
    if (u.includes('instagram.com')) return { label: 'Instagram', icon: <InstagramIcon /> };
    if (u.includes('linkedin.com')) return { label: 'LinkedIn', icon: <LinkedInIcon /> };
    if (u.includes('linktr.ee')) return { label: 'Linktree', icon: <LinktreeIcon /> };
    if (u.includes('itch.io')) return { label: 'itch.io', icon: <ItchIcon /> };
    return { label: 'Website', icon: <GlobeIcon /> };
};
