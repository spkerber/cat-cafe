import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Layout({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check system preference on initial load
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 transition-colors duration-200">
      <header className="border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto px-5">
          <div className="py-8 flex justify-between items-center">
            <div>
              <Link href="/" className="hover:underline text-6xl font-bold tracking-tighter leading-tight dark:text-white">
                WM Cafe
              </Link>
              <nav className="mt-4">
                <ul className="flex space-x-8 text-lg">
                  <li>
                    <Link 
                      href="/schematic" 
                      className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white duration-200 transition-colors"
                    >
                      Schematic
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/instructions" 
                      className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white duration-200 transition-colors"
                    >
                      Instructions
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
            >
              {darkMode ? (
                <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-neutral-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-5 py-10 dark:text-white">
        {children}
      </main>

      <footer className="bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto px-5 py-8">
          <p className="text-neutral-500 dark:text-neutral-400 text-center">
            Built with passion for our feline friends.
          </p>
        </div>
      </footer>
    </div>
  );
}