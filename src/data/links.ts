export interface Link {
  title: string;
  url: string;
  description: string;
  category: 'protocol' | 'blog' | 'social';
}

export const links: Link[] = [
  {
    title: 'Free Technology',
    url: 'https://free.technology',
    description: 'Explore the Free Technology platform',
    category: 'protocol'
  },
  {
    title: 'Logos',
    url: 'https://logos.co',
    description: 'Visit the Logos Network',
    category: 'protocol'
  },
  {
    title: 'Vac Blog',
    url: 'https://blog.vac.dev',
    description: 'Read the latest from Vac',
    category: 'blog'
  },
  {
    title: 'Waku',
    url: 'https://waku.org',
    description: 'Discover Waku Protocol',
    category: 'protocol'
  },
  {
    title: 'Waku Blog',
    url: 'https://blog.waku.org',
    description: 'Stay updated with Waku',
    category: 'blog'
  },
  {
    title: 'Codex Storage',
    url: 'https://codex.storage',
    description: 'Explore Codex Storage',
    category: 'protocol'
  },
  {
    title: 'Codex Blog',
    url: 'https://blog.codex.storage',
    description: 'Read Codex Storage updates',
    category: 'blog'
  },
  {
    title: 'Nomos',
    url: 'https://nomos.tech',
    description: 'Visit Nomos Technology',
    category: 'protocol'
  },
  {
    title: 'Nomos Blog',
    url: 'https://blog.nomos.tech',
    description: 'Stay informed with Nomos',
    category: 'blog'
  },
  {
    title: 'Status',
    url: 'https://status.app',
    description: 'Check out Status App',
    category: 'protocol'
  },
  {
    title: 'Status Blog',
    url: 'https://blog.status.app',
    description: 'Read Status updates',
    category: 'blog'
  },
  {
    title: 'Logos Network YouTube',
    url: 'https://www.youtube.com/@LogosNetwork',
    description: 'Watch Logos Network videos',
    category: 'social'
  }
]; 