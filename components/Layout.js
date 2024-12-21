import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-stone-100 border-b border-stone-200">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-center text-stone-800">
            <Link href="/" className="hover:text-stone-600 transition-colors">
              WM Cafe
            </Link>
          </h1>
          
          <nav className="mt-6">
            <ul className="flex justify-center space-x-12 text-lg">
              <li>
                <Link 
                  href="/schematic" 
                  className="text-stone-600 hover:text-stone-900 hover:border-b-2 hover:border-stone-400 px-3 py-2 transition-all"
                >
                  Schematic
                </Link>
              </li>
              <li>
                <Link 
                  href="/instructions" 
                  className="text-stone-600 hover:text-stone-900 hover:border-b-2 hover:border-stone-400 px-3 py-2 transition-all"
                >
                  Instructions
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
}