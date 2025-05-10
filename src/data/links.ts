export interface Link {
  title: string;
  url: string;
  category: 'protocol' | 'blog' | 'social';
}

export const links: Link[] = [
  {
    title: 'Free Technology',
    url: 'https://free.technology',
    category: 'protocol'
  },
  {
    title: 'Logos',
    url: 'https://logos.co',
    category: 'protocol'
  },
  {
    title: 'Vac',
    url: 'https://vac.dev',
    category: 'protocol'
  },
  {
    title: 'Waku',
    url: 'https://waku.org',
    category: 'protocol'
  },
  {
    title: 'Waku Blog',
    url: 'https://blog.waku.org',
    category: 'blog'
  },
  {
    title: 'Codex Storage',
    url: 'https://codex.storage',
    category: 'protocol'
  },
  {
    title: 'Codex Blog',
    url: 'https://blog.codex.storage',
    category: 'blog'
  },
  {
    title: 'Nomos',
    url: 'https://nomos.tech',
    category: 'protocol'
  },
  {
    title: 'Nomos Blog',
    url: 'https://blog.nomos.tech',
    category: 'blog'
  },
  {
    title: 'Status App',
    url: 'https://status.app',
    category: 'protocol'
  },
  {
    title: 'Status Blog',
    url: 'https://blog.status.app',
    category: 'blog'
  },
  {
    title: 'Logos Network YouTube',
    url: 'https://www.youtube.com/@LogosNetwork',
    category: 'social'
  }
]; 