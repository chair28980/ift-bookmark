"use client";

import { links } from '@/data/links';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { CategoryIcon } from './CategoryIcon';

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Handle window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Group links by category
  const groupedLinks = links.reduce((acc, link) => {
    if (!acc[link.category]) {
      acc[link.category] = [];
    }
    acc[link.category].push(link);
    return acc;
  }, {} as Record<string, typeof links>);

  const sidebarContent = (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-blue-400">Quick Links</h2>
        {!isMobile && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 hover:bg-gray-700/50 rounded-lg transition-colors"
          >
            <svg
              className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}
      </div>
      <nav className="flex-1 overflow-y-auto">
        {Object.entries(groupedLinks).map(([category, categoryLinks]) => (
          <div key={category} className="mb-6">
            <h3 className="text-sm font-medium text-gray-400 mb-2 px-2">
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </h3>
            <ul className="space-y-1">
              {categoryLinks.map((link) => (
                <li key={link.url}>
                  <Link
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-2 py-1.5 text-gray-300 hover:text-blue-400 hover:bg-gray-700/50 rounded-lg transition-all duration-200 text-sm group"
                  >
                    <CategoryIcon category={link.category} className="w-4 h-4 text-gray-400 group-hover:text-blue-400" />
                    <span className="truncate">{link.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  );

  return (
    <>
      {/* Mobile menu button */}
      {isMobile && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-4 left-4 z-50 p-2 bg-gray-800/50 backdrop-blur-sm rounded-lg hover:bg-gray-700/50 transition-colors md:hidden"
        >
          <svg
            className="w-6 h-6 text-gray-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-screen bg-gray-800/50 backdrop-blur-sm
          transition-all duration-300 ease-in-out z-40
          ${isMobile
            ? `${isOpen ? 'w-64' : 'w-0'}`
            : `${isOpen ? 'w-64' : 'w-16'}`
          }
          md:relative md:z-0
        `}
      >
        <div className={`h-full ${isOpen ? 'w-64' : 'w-16'} p-4`}>
          {isOpen ? (
            sidebarContent
          ) : (
            <div className="h-full flex flex-col items-center pt-4">
              {Object.entries(groupedLinks).map(([category, categoryLinks]) => (
                <div key={category} className="mb-6">
                  <h3 className="text-xs font-medium text-gray-400 mb-2 text-center">
                    {category.charAt(0).toUpperCase()}
                  </h3>
                  <ul className="space-y-1">
                    {categoryLinks.map((link) => (
                      <li key={link.url}>
                        <Link
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center p-2 text-gray-300 hover:text-blue-400 hover:bg-gray-700/50 rounded-lg transition-all duration-200"
                          title={link.title}
                        >
                          <CategoryIcon category={link.category} className="w-4 h-4" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Overlay for mobile */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
} 