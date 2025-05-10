export interface Link {
  title: string;
  url: string;
  category: 'protocol' | 'blog' | 'social' | 'token';
  description?: string;
}

export const links: Link[] = [
  {
    title: 'Free Technology',
    url: 'https://free.technology',
    category: 'protocol',
    description: 'Building public goods to safeguard civil liberties in the digital age.'
  },
  {
    title: 'Logos',
    url: 'https://logos.co',
    category: 'protocol',
    description: 'A movement supporting the development of the decentralised web. Logos technologies lay the foundations for a freer internet upon which communities can evolve into network states. Each protocol in the Logos stack seeks to empower its users while upholding civil liberties and fundamental freedoms.'
  },
  {
    title: 'Logos Roadmap',
    url: 'https://roadmap.logos.co',
    category: 'protocol',
    description: 'This site attempts to inform the previous, current, and future work required to fulfill the requirements of the projects under the Logos Collective, a complete tech stack that provides infrastructure for the self-sovereign network state.'
  },
  {
    title: 'Vac',
    url: 'https://vac.dev',
    category: 'protocol',
    description: 'Vac is a principle-driven R&D team that provides comprehensive technical support to IFT startups. Vac consists of specialized R&D service units and innovative incubator projects. We focus on developing foundational components and unopinionated protocols that both IFT projects and the broader community can utilize.'
  },
  {
    title: 'Waku',
    url: 'https://waku.org',
    category: 'protocol',
    description: 'A family of robust, censorship-resistant communication protocols designed to enable securely scalable, privacy-focused messaging for breakthrough applications in crypto and beyond.'
  },
  {
    title: 'Waku Blog',
    url: 'https://blog.waku.org',
    category: 'blog',
    description: 'Waku Project and News updates'
  },
  {
    title: 'Codex Storage',
    url: 'https://codex.storage',
    category: 'protocol',
    description: 'Codex is a durable, decentralised storage protocol designed to safeguard the world\'s most valuable information. Join the testnet to help secure a resilient digital future.'
  },
  {
    title: 'Codex Blog',
    url: 'https://blog.codex.storage',
    category: 'blog',
    description: 'Codex Project and News updates'
  },
  {
    title: 'Nomos',
    url: 'https://nomos.tech',
    category: 'protocol',
    description: 'A Resilient, Privacy-preserving, and Censorship-resistant blockchain for Network States.'
  },
  {
    title: 'Nomos Blog',
    url: 'https://blog.nomos.tech',
    category: 'blog',
    description: 'Nomos Project and News updates'
  },
  {
    title: 'Status App',
    url: 'https://status.app',
    category: 'protocol',
    description: 'Open-source, decentralised wallet and messenger.'
  },
  {
    title: 'Status Blog',
    url: 'https://blog.status.app',
    category: 'blog',
    description: 'Status Project and News updates'
  },
  {
    title: '$SNT',
    url: 'https://etherscan.io/token/0x744d70fdbe2ba4cf95131626614a1763df805b9e',
    category: 'token',
    description: 'Status Network Token'
  },
  {
    title: 'Logos Network YouTube',
    url: 'https://www.youtube.com/@LogosNetwork',
    category: 'social',
    description: 'Logos Network YouTube Channel'
  }
]; 