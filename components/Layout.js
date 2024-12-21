return (
  <div className="min-h-screen flex flex-col bg-primary-light dark:bg-neutral-900">
    {/* Header */}
    <header className="w-full border-b border-primary-dark/10 dark:border-neutral-800">
      <div className="max-w-4xl mx-auto px-4 py-8 text-center">
        <Link href="/" className="inline-block text-4xl font-bold mb-6 text-primary-dark hover:text-primary dark:text-primary-light dark:hover:text-primary transition-colors">
          WM Cafe
        </Link>
        
        {/* Navigation */}
        <nav className="flex items-center justify-center">
          <div className="flex space-x-12 items-center">
            <Link 
              href="/schematic" 
              className="text-lg text-primary-dark hover:text-accent-dark dark:text-primary-light dark:hover:text-accent-light transition-colors"
            >
              Schematic
            </Link>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-primary hover:bg-primary-dark dark:bg-neutral-800 dark:hover:bg-neutral-700 transition-all"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? (
                <svg className="w-5 h-5 text-accent-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {/* Sun icon */}
                </svg>
              ) : (
                <svg className="w-5 h-5 text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {/* Moon icon */}
                </svg>
              )}
            </button>
            <Link 
              href="/instructions" 
              className="text-lg text-primary-dark hover:text-accent-dark dark:text-primary-light dark:hover:text-accent-light transition-colors"
            >
              Instructions
            </Link>
          </div>
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