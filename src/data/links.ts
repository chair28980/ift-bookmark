export interface Link {
  title: string;
  url: string;
  category: 'protocol' | 'blog' | 'social' | 'token' | 'wallet';
  description?: string;
  logo?: string; // Path to the logo file
}

export const links: Link[] = [
  {
    title: 'Free Technology',
    url: 'https://free.technology',
    category: 'protocol',
    description: 'Building public goods to safeguard civil liberties in the digital age.',
    logo: '/logos/design-assets/IFT/IFT-horizontal-white.svg'
  },
  {
    title: 'Status App',
    url: 'https://status.app',
    category: 'protocol',
    description: 'Open-source, decentralised wallet and messenger.',
    logo: 'logos/design-assets/status/status-mark-primary-white.svg'
  },
  {
    title: 'Status Blog',
    url: 'https://blog.status.app',
    category: 'blog',
    description: 'Status Project and News updates',
    logo: 'logos/design-assets/status/status-mark-primary-black.svg'
  },
  {
    title: '$SNT',
    url: 'https://etherscan.io/token/0x744d70fdbe2ba4cf95131626614a1763df805b9e',
    category: 'token',
    description: 'Status Network Token',
    logo: 'logos/design-assets/status/status-mark-primary-white.svg'
  },
  {
    title: 'Keycard',
    url: 'https://keycard.tech/',
    category: 'wallet',
    description: 'Trade swiftly and safely back up your assets with Keycard hardware wallets.',
    logo: 'logos/design-assets/keycard-logo.svg'
  },
  {
    title: 'Logos',
    url: 'https://logos.co',
    category: 'protocol',
    description: 'A movement supporting the development of the decentralised web. Logos technologies lay the foundations for a freer internet upon which communities can evolve into network states. Each protocol in the Logos stack seeks to empower its users while upholding civil liberties and fundamental freedoms.',
    logo: 'logos/design-assets/logos/logos-mark-primary-white.svg'
  },
  {
    title: 'Logos Roadmap',
    url: 'https://roadmap.logos.co',
    category: 'protocol',
    description: 'This site attempts to inform the previous, current, and future work required to fulfill the requirements of the projects under the Logos Collective, a complete tech stack that provides infrastructure for the self-sovereign network state.',
    logo: 'logos/design-assets/logos/logos-mark-primary-white.svg'
  },
  {
    title: 'Vac',
    url: 'https://vac.dev',
    category: 'protocol',
    description: 'Vac is a principle-driven R&D team that provides comprehensive technical support to IFT startups. Vac consists of specialized R&D service units and innovative incubator projects. We focus on developing foundational components and unopinionated protocols that both IFT projects and the broader community can utilize.',
    logo: 'logos/design-assets/vac/vac-mark-primary-black.svg'
  },
  {
    title: 'Waku',
    url: 'https://waku.org',
    category: 'protocol',
    description: 'A family of robust, censorship-resistant communication protocols designed to enable securely scalable, privacy-focused messaging for breakthrough applications in crypto and beyond.',
    logo: 'logos/design-assets/waku-assets/waku-mark-primary-white.svg'
  },
  {
    title: 'Waku Blog',
    url: 'https://blog.waku.org',
    category: 'blog',
    description: 'Waku Project and News updates',
    logo: 'logos/design-assets/waku-assets/waku-mark-primary-white.svg'
  },
  {
    title: 'Codex Storage',
    url: 'https://codex.storage',
    category: 'protocol',
    description: 'Codex is a durable, decentralised storage protocol designed to safeguard the world\'s most valuable information. Join the testnet to help secure a resilient digital future.',
    logo: 'logos/design-assets/codex/codex-mark-primary-white.svg'
  },
  {
    title: 'Codex Blog',
    url: 'https://blog.codex.storage',
    category: 'blog',
    description: 'Codex Project and News updates',
    logo: 'logos/design-assets/codex/codex-mark-primary-white.svg'
  },
  {
    title: 'Codex Testnet Starter',
    url: 'https://github.com/codex-storage/codex-testnet-starter',
    category: 'protocol',
    description: 'Codex Testnet Starter',
    logo: 'logos/design-assets/codex/codex-mark-primary-white.svg'
  },
  {
    title: 'Nomos',
    url: 'https://nomos.tech',
    category: 'protocol',
    description: 'A Resilient, Privacy-preserving, and Censorship-resistant blockchain for Network States.',
    logo: 'logos/design-assets/nomos/nomos-mark-black.svg'
  },
  {
    title: 'Nomos Blog',
    url: 'https://blog.nomos.tech',
    category: 'blog',
    description: 'Nomos Project and News updates',
    logo: 'logos/design-assets/nomos/nomos-mark-black.svg'
  },
  {
    title: 'Logos Network YouTube',
    url: 'https://www.youtube.com/@LogosNetwork',
    category: 'social',
    description: 'Logos Network YouTube Channel',
    logo: 'logos/design-assets/logos/logos-mark-primary-white.svg'
  },
]; 