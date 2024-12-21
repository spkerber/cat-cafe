import React from 'react';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';

// ... getStaticProps stays the same ...

const BuildInstructions = ({ content }) => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <nav className="mb-8 border-b">
        <div className="flex space-x-8">
          <Link href="/" className="px-4 py-2 text-blue-600 border-b-2 border-blue-600">Instructions</Link>
          <Link href="/schematic" className="px-4 py-2 hover:text-gray-600">Schematic</Link>
        </div>
      </nav>
      {/* Rest of your component stays the same */}
    </div>
  );
};

export default BuildInstructions;