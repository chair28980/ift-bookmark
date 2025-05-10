import { links } from '@/data/links';
import Link from 'next/link';
import { CategoryIcon } from '@/components/CategoryIcon';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          IFT Bookmark
        </h1>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((link) => (
            <Link
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {link.title}
                </h2>
                {link.description && (
                  <p className="text-gray-400 text-sm mb-4">
                    {link.description}
                  </p>
                )}
                <div className="mt-4 flex items-center gap-2">
                  <CategoryIcon category={link.category} className="w-4 h-4 text-gray-400" />
                  <span className="inline-block px-3 py-1 text-xs rounded-full bg-gray-700/50 text-gray-300">
                    {link.category}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
