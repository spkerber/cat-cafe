import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Layout({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
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
    <div className="min-h-screen flex flex-col bg-primary-light dark:bg-neutral-900">
      {/* Header */}
      <header className="w-full border-b border-neutral-200 mb-8">
        <div className="max-w-4xl mx-auto px-4 py-6 text-center">
          <h1 className="text-4xl font-bold text-neutral-800 hover:text-neutral-600 transition-colors">
            WM Cafe
          </h1>
          {/* Navigation */}
          <nav className="flex justify-center space-x-8 mt-4">
            <Link
              href="/schematic"
              className="text-lg text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              Schematic
            </Link>
            <Link
              href="/instructions"
              className="text-lg text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              Instructions
            </Link>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 transition-all"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              role="switch"
              aria-checked={darkMode}
            >
              {darkMode ? (
                <svg
                  className="w-5 h-5 text-neutral-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 text-neutral-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow w-full max-w-4xl mx-auto px-4 py-12 text-primary-dark dark:text-primary-light">
        {children}
      </main>

      {/* Footer */}
      <footer className="mt-auto w-full border-t border-primary-dark/10 dark:border-neutral-800">
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <p className="text-primary dark:text-primary-light/70">
            Built with passion for our feline friends.
          </p>
        </div>
      </footer>
    </div>
  );
}