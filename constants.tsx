
import React from 'react';
import { NavLink, SkillItem, ProjectItem, SocialLink } from './types';
import PortfolioIconsPreview from './components/PortfolioIconsPreview'; // Ensured relative path
import SolidityCodePreview from './components/SolidityCodePreview';   // Ensured relative path
import CryptoLogosPreview from './components/CryptoLogosPreview'; // New import

// SVG Icons

export const ZvcNftIcon: React.FC<{className?: string}> = ({ className = "w-8 h-8 text-green-400" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} aria-labelledby="zvcNftIconTitle" role="img">
    <title id="zvcNftIconTitle">ZVC NFT Icon</title>
    {/* Main token body - rounded rectangle, uses currentColor for its fill */}
    <rect x="2" y="2" width="20" height="20" rx="3" ry="3" fill="currentColor" />

    {/* "ZVC" Text - Orbitron font, bold. Positioned within the token. */}
    <text
      x="12" // Centered in 24x24 viewBox
      y="13.5" // Vertically centered, adjusted for Orbitron font baseline & size
      fontFamily="Orbitron, sans-serif"
      fontSize="7" // Adjusted for 24x24 viewBox
      fill="black" // Contrasting color for text
      textAnchor="middle"
      dominantBaseline="middle"
      fontWeight="900"
    >
      ZVC
    </text>
    {/* "NFT" Text - Inter font for clarity at small size */}
    <text
      x="12"
      y="18.5" // Positioned below "ZVC"
      fontFamily="Inter, sans-serif"
      fontSize="2.8" // Small, but clear
      fill="rgba(0,0,0,0.85)" // Slightly less prominent than ZVC
      textAnchor="middle"
      dominantBaseline="middle"
      fontWeight="500"
    >
      NFT
    </text>
  </svg>
);


export const ReactIcon: React.FC<{className?: string}> = ({ className = "w-12 h-12 text-sky-400" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
    <ellipse cx="12" cy="12" rx="8" ry="3" transform="rotate(0 12 12)" stroke="currentColor" strokeWidth="1" fill="none"/>
    <ellipse cx="12" cy="12" rx="8" ry="3" transform="rotate(60 12 12)" stroke="currentColor" strokeWidth="1" fill="none"/>
    <ellipse cx="12" cy="12" rx="8" ry="3" transform="rotate(120 12 12)" stroke="currentColor" strokeWidth="1" fill="none"/>
    <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
  </svg>
);

export const TSIcon: React.FC<{className?: string}> = ({ className = "w-12 h-12" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className={className} aria-label="TypeScript logo">
      <rect width="256" height="256" fill="#007ACC"/>
      <g>
          <path fill="#FFF" d="M79.3,189.3H60.4V97.7h42.4c10.4,0,18.3,1.2,23.9,3.5s9.9,5.8,12.9,10.6c3,4.8,4.5,10.6,4.5,17.5c0,6.7-1.4,12.4-4.1,17.2c-2.7,4.8-6.5,8.3-11.2,10.5c-4.7,2.2-10.5,3.4-17.2,3.4H79.3V189.3z M79.3,149.5h19.4c5.1,0,9.2-0.9,12.3-2.8s4.6-4.7,4.6-8.5c0-3.9-1.5-6.8-4.6-8.7c-3-1.9-7.1-2.8-12.3-2.8H79.3V149.5z"/>
          <path fill="#FFF" d="M195.6,189.3h-18.9L147.8,143c-0.9-1.2-1.6-2.6-1.9-4.3c-0.1-0.4-0.2-0.7-0.2-1.1c0-0.1,0-0.2,0-0.3c0,1.4-0.3,2.8-0.8,4.2l-9,24.7c-1.9,5.1-4.4,9.3-7.5,12.6c-3.1,3.3-6.7,5.6-10.9,6.9l17.4-45.8l30.5-77.9h20.1l-30.2,77.4L195.6,189.3z"/>
      </g>
  </svg>
);

const PythonIcon: React.FC<{className?: string}> = ({ className = "w-12 h-12" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 242 242" className={className} aria-label="Python logo">
      <title>Python Logo</title>
      <circle cx="121" cy="121" r="114" fill="#306998"/>
      <path fill="#FFD43B" d="M121 7a114 114 0 000 228c29.41 0 56.2-11.13 76.44-29.4a50.52 50.52 0 01-58.31-28.06 50.52 50.52 0 0130.05-62.92 50.52 50.52 0 0162.92 30.05 50.52 50.52 0 0128.06 58.31A114 114 0 00121 7z"/>
      <path fill="#306998" d="M170.2 88.46a36.1 36.1 0 00-28.42-28.42A36.1 36.1 0 00113.36 88.46a36.1 36.1 0 0028.42 28.42 36.1 36.1 0 0028.42-28.42z"/>
      <path fill="#FFD43B" d="M71.8 153.54a36.1 36.1 0 0028.42 28.42 36.1 36.1 0 0028.42-28.42 36.1 36.1 0 00-28.42-28.42 36.1 36.1 0 00-28.42 28.42z"/>
      <circle cx="155.99" cy="74.25" r="10.72" fill="#fff"/>
      <circle cx="86.01" cy="167.75" r="10.72" fill="#fff"/>
  </svg>
);

const FlutterIcon: React.FC<{className?: string}> = ({ className = "w-12 h-12 text-blue-400" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="Flutter logo">
    <path d="M13.51 2.027L3.965 11.07 7.5 14.404l12.538-11.93L13.51 2.027zm-.012 6.06L7.41 13.69l3.503 3.298 6.118-5.823-3.53-3.87zM7.52 15.47L3.98 18.76l9.528 8.213L20.02 17.22 7.52 15.47z"/>
  </svg>
);


const SolidityIcon: React.FC<{className?: string}> = ({ className = "w-12 h-12 text-gray-400" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="currentColor" className={className} aria-label="Solidity logo">
    <title>Solidity Logo</title>
    <path d="M64 0L0 32v64l64 32 64-32V32L64 0zm0 12.8l51.2 25.6L64 64 12.8 38.4 64 12.8zm0 102.4L12.8 89.6V51.2l51.2 25.6v25.6zm0-38.4l51.2-25.6v38.4L64 102.4V76.8z"/>
  </svg>
);

const AIIcon: React.FC<{className?: string}> = ({ className = "w-12 h-12 text-purple-400" }) => (
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2a9 9 0 00-9 9c0 4.47 3.05 8.21 7.11 8.86l.61-1.94A7.001 7.001 0 015 11a7 7 0 017-7 7.002 7.002 0 016.78 5.54l1.94.61A9.003 9.003 0 0012 2zM7.5 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm4.5 4.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm4.5 4.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm4.5-4.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-2.89 7.36l-.61 1.94A9.004 9.004 0 0021 11a9 9 0 00-9-9 8.96 8.96 0 00-1.36.13l.61 1.94A7.001 7.001 0 0112 4a7 7 0 017 7 6.999 6.999 0 01-5.54 6.78z"/>
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const TailwindIcon: React.FC<{className?: string}> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 142 86" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Tailwind CSS logo">
    <title>Tailwind CSS Logo</title>
    <path d="M28.425 43.087C28.425 35.895 32.325 29.625 38.625 26.025C44.85 22.5 52.575 22.575 58.875 26.25C65.175 29.925 69.15 36.3 69.15 43.65C69.15 50.925 65.25 57.225 58.95 60.825C52.725 64.35 45 64.275 38.7 60.6C32.4 56.925 28.425 50.55 28.425 43.35V43.087Z" fill="#38BDF8"/>
    <path d="M72.825 43.087C72.825 35.895 76.725 29.625 83.025 26.025C89.25 22.5 96.975 22.575 103.275 26.25C109.575 29.925 113.55 36.3 113.55 43.65C113.55 50.925 109.65 57.225 103.35 60.825C97.125 64.35 89.4 64.275 83.1 60.6C76.8 56.925 72.825 50.55 72.825 43.35V43.087Z" fill="#38BDF8" opacity="0.6"/>
  </svg>
);

export const ViteIcon: React.FC<{className?: string}> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Vite simple logo">
    <title>Vite Logo</title>
    <defs>
      <linearGradient id="viteSimpleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{stopColor: '#FBBF24', stopOpacity:1}} /> {/* Brighter yellow */}
        <stop offset="100%" style={{stopColor: '#F59E0B', stopOpacity:1}} /> {/* Darker gold/orange */}
      </linearGradient>
    </defs>
    <path d="M11 21L14.5 13H9.5L13 3L9.5 11H14.5L11 21Z" strokeWidth="1.5" stroke="#FBBF24" fill="url(#viteSimpleGradient)"/>
  </svg>
);

export const BitcoinIcon: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => (
  <svg viewBox="0 0 32 32" className={className} aria-label="Bitcoin logo">
    <title>Bitcoin Logo</title>
    <path fill="#F7931A" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16z"></path>
    <path fill="#FFF" d="M20.839 15.445c.738-.447 1.135-1.03 1.135-1.833 0-.6-.216-1.08-.649-1.446-.432-.365-.99-.548-1.672-.548h-1.709v3.832h1.764c.717 0 1.251-.192 1.605-.578.354-.386.526-.887.526-1.425zm-3.027-3.297V9.84h2.947c.978 0 1.742.298 2.291.895.549.596.824 1.399.824 2.408 0 .91-.297 1.672-.895 2.284-.597.612-1.392.918-2.384.918h-2.783zm.001 6.196h3.385c.948 0 1.688.283 2.22.85.532.566.798 1.325.798 2.276 0 1.002-.29 1.784-.868 2.349-.579.566-1.346.849-2.302.849h-3.233v-6.324zm-.004 2.309v3.825h1.919c.747 0 1.304-.191 1.672-.572.368-.381.552-.888.552-1.521s-.192-1.123-.575-1.49c-.384-.368-.92-.559-1.609-.559h-1.959zM15.084 9.828h-3.06v6.438h2.931v2.316h-2.931v6.438h3.06v2.309H9.835V7.519h5.249v2.309z"></path>
  </svg>
);

export const EthereumIcon: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => (
  <svg viewBox="0 0 24 24" className={className} aria-label="Ethereum logo">
    <title>Ethereum Logo</title>
    <path fill="#627EEA" d="M12 0L11.6 1.68 7.6 9.67 12 3.33 16.4 9.67 12.4 1.68 12 0z"></path>
    <path fill="#4C5DAA" d="M12 4.73l4.4 5.2L12 13.27 7.6 9.93 12 4.73z"></path>
    <path fill="#627EEA" d="M12 14.67l4.4-3.33L12 19.33l-4.4-8 4.4 3.33z"></path>
    <path fill="#4C5DAA" d="M12 20.73l4.4-8.04L12 16.03l-4.4-3.34 4.4 8.04z"></path>
    <path fill="#8A9FF3" d="M12 13.27l4.4-3.34-4.4 5.2V13.27z"></path>
    <path fill="#627EEA" d="M7.6 9.93l4.4 3.34v-5.2L7.6 9.93z"></path>
  </svg>
);

export const SolanaIcon: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} aria-label="Solana logo">
    <title>Solana Logo</title>
    <defs>
        <linearGradient id="solanaGradientIcon" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#9945FF"/>
            <stop offset="100%" stopColor="#14F195"/>
        </linearGradient>
    </defs>
    <path fillRule="evenodd" clipRule="evenodd" d="M3.493 13.006L0 14.722l13.129 7.579a1.724 1.724 0 001.725 0L21.22 19.17l-3.492-2.017-4.609 2.66a1.724 1.724 0 01-1.724 0l-8.02-4.63v-.001zM18.77 5.278l3.493-2.016L15.895 0a1.724 1.724 0 00-1.725 0L0 7.58l3.492 2.017 8.021-4.63a1.724 1.724 0 011.724 0l5.391 3.113v.001zM3.493 20.586L0 22.302l13.129 7.579a1.724 1.724 0 001.725 0l14.28-8.244-3.492-2.016-8.021 4.63a1.724 1.724 0 01-1.724 0l-5.51-3.18v-.001z" fill="url(#solanaGradientIcon)"/>
  </svg>
);


export const NAV_LINKS: NavLink[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export const SKILLS_DATA: SkillItem[] = [
  {
    name: 'JavaScript / React.js',
    icon: <ReactIcon className="w-12 h-12 text-sky-400"/>,
    description: 'Building dynamic, responsive UIs and SPAs with React.js, leveraging modern JavaScript for high performance.',
    level: 'Expert',
  },
  {
    name: 'Python',
    icon: <PythonIcon className="w-12 h-12"/>,
    description: 'Versatile programming for web development, data analysis, and scripting, forming a strong backend complement.',
    level: 'Advanced',
  },
    {
    name: 'Flutter / Dart',
    icon: <FlutterIcon className="w-12 h-12 text-blue-400"/>,
    description: 'Crafting beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.',
    level: 'Intermediate',
  },
  {
    name: 'Solidity (Smart Contracts)',
    icon: <SolidityIcon className="w-12 h-12 text-gray-400"/>,
    description: 'Developing secure and efficient smart contracts for Ethereum and EVM-compatible blockchains (ERC20, ERC721).',
    level: 'Advanced',
  },
  {
    name: 'Artificial Intelligence',
    icon: <AIIcon className="w-12 h-12 text-purple-400"/>,
    description: 'Well-versed in AI models and Large Language Models (LLMs), combining deep understanding of machine learning architectures with practical integration experience in modern software ecosystems..',
    level: 'Enthusiast',
  },
  {
    name: 'TypeScript',
    icon: <TSIcon className="w-12 h-12"/>,
    description: 'Enhancing JavaScript projects with static typing for better scalability and maintainability.',
    level: 'Advanced',
  },
];

const GITHUB_PROFILE_URL = 'https://github.com/M1T4U';

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'proj1',
    title: 'zvcN3xtgen Portfolio',
    description: 'A showcase of my skills, built with React, TypeScript, and Tailwind CSS. Explore my work and journey into tech!',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'SPA'],
    imageComponent: <PortfolioIconsPreview />,
    repoLink: GITHUB_PROFILE_URL,
  },
  {
    id: 'proj2',
    title: 'ZVC CRYTO GURU',
    description: `zvcN3xtgen-
Crypto Trading Guru | Web3 Smart Contract Expert | Blockchain Innovator
Decoding cryptocurrency markets through advanced technical analysis and revolutionizing Web3 through sophisticated Solidity development, bridging traditional trading wisdom with decentralized innovation.`,
    techStack: ['React', 'TypeScript', 'Charting Libraries', 'API Integration'],
    imageComponent: <CryptoLogosPreview />, // Updated to use CryptoLogosPreview
    repoLink: GITHUB_PROFILE_URL,
  },
  {
    id: 'proj3',
    title: 'Solidity Dev-Blockchain(Smart contracts)',
    description: 'Solidity Dev-Blockchain represents a cutting-edge smart contract development initiative that transforms traditional blockchain interactions through innovative Solidity programming. The project encompasses advanced DeFi protocols, automated trading contracts, and self-sustaining staking systems, all built with security-first architecture and gas-efficient deployment strategies. This comprehensive blockchain development showcase highlights expertise in creating scalable, interoperable smart contract solutions for the evolving Web3 ecosystem..',
    techStack: ['Solidity', 'Hardhat', 'Ethers.js', 'React'],
    imageComponent: <SolidityCodePreview />,
    repoLink: GITHUB_PROFILE_URL,
  },
];

const GithubIcon: React.FC<{className?: string}> = ({ className = "w-6 h-6" }) => (
  <svg fill="currentColor" viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.379.201 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.308.678.92.678 1.852 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
  </svg>
);

const LinkedInIcon: React.FC<{className?: string}> = ({ className = "w-6 h-6" }) => (
  <svg fill="currentColor" viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const EmailIcon: React.FC<{className?: string}> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

export const SOCIAL_LINKS: SocialLink[] = [
    { name: 'GitHub', url: GITHUB_PROFILE_URL, icon: <GithubIcon /> },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/MITAU', icon: <LinkedInIcon /> },
    { name: 'Email', url: 'mailto:zvcn3xtgen@gmail.com', icon: <EmailIcon /> },
];

export const SITE_TITLE_FONT = 'font-orbitron';
export const BODY_FONT = 'font-inter';
