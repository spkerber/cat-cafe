import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-stone-100 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-center text-stone-800">
            <Link href="/" className="hover:text-stone-600">
              WM Cafe
            </Link>
          </h1>
          
          {/* Navigation */}
          <nav className="mt-4">
            <ul className="flex justify-center space-x-8">
              <li>
                <Link 
                  href="/instructions" 
                  className="text-stone-600 hover:text-stone-900 px-3 py-2"
                >
                  Instructions
                </Link>
              </li>
              <li>
                <Link 
                  href="/schematic" 
                  className="text-stone-600 hover:text-stone-900 px-3 py-2"
                >
                  Schematic
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
}