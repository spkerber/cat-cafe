import React from 'react';
import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

export async function getStaticProps() {
  try {
    const filePath = path.join(process.cwd(), 'cat-cafe-schematic.md');
    const fileContent = await fs.readFile(filePath, 'utf8');
    const { content } = matter(fileContent);
    const htmlContent = marked(content);

    return {
      props: {
        content: htmlContent,
      },
    };
  } catch (error) {
    console.error('Error reading markdown:', error);
    return {
      props: {
        content: '<p>Error loading content</p>'
      }
    };
  }
}

const Schematic = ({ content }) => {
  return (
    <div className="prose prose-stone max-w-none mx-auto">
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-stone-800 mb-4">Technical Drawings</h2>
          <p className="text-stone-600">Architectural specifications for the WM Cafe construction.</p>
        </div>
        
        {/* SVG Schematic */}
        <div className="mb-8 bg-stone-50 p-6 rounded-lg border border-stone-200 overflow-x-auto">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1000 700"
            className="w-full h-auto"
            style={{ minWidth: '800px' }}
          >
            {/* Title Block */}
            <g transform="translate(700,50)">
                <rect x="0" y="0" width="250" height="150" fill="none" stroke="#000" strokeWidth="1"/>
                <text x="125" y="30" fontSize="14" fontWeight="bold" textAnchor="middle">WABI-SABI CAT CAFÉ</text>
                <text x="125" y="50" fontSize="10" textAnchor="middle">Project No: CC-2024-001</text>
                <text x="125" y="70" fontSize="10" textAnchor="middle">Scale: 1:8</text>
                <text x="125" y="90" fontSize="10" textAnchor="middle">Date: 2024.12.20</text>
                <text x="125" y="110" fontSize="10" textAnchor="middle">Sheet: 1 of 1</text>
                <text x="125" y="130" fontSize="10" textAnchor="middle">Client: Distinguished Cat</text>
            </g>

            {/* Front Elevation */}
            <g transform="translate(50,50)">
                {/* ... rest of your SVG content ... */}
                {/* Copy all the SVG elements here */}
            </g>

            {/* ... Copy the rest of your SVG groups here ... */}
          </svg>
        </div>

        {/* Notes and Specifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-stone-50 p-6 rounded-lg border border-stone-200">
            <h3 className="text-lg font-semibold text-stone-800 mb-4">Material Specifications</h3>
            <ul className="space-y-2 text-stone-600">
              <li>• Heavy corrugated cardboard core (1/8" min)</li>
              <li>• Kraft cardstock exterior (#C7B299)</li>
              <li>• Natural cotton noren fabric</li>
              <li>• Wooden dowel light wells</li>
            </ul>
          </div>
          
          <div className="bg-stone-50 p-6 rounded-lg border border-stone-200">
            <h3 className="text-lg font-semibold text-stone-800 mb-4">Construction Notes</h3>
            <ul className="space-y-2 text-stone-600">
              <li>• Reinforced corners throughout</li>
              <li>• 2" roof slope (front to back)</li>
              <li>• 24hr drying between layers</li>
              <li>• Wabi-sabi edge finishing</li>
              <li>• Integrated ventilation system</li>
            </ul>
          </div>
        </div>

        {/* Markdown Content */}
        <div
          className="mt-8 prose-h3:text-lg prose-h3:font-semibold prose-h3:text-stone-700
                     prose-p:text-stone-600 prose-p:leading-relaxed
                     prose-ul:text-stone-600 prose-ul:leading-relaxed
                     prose-li:my-1"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
};

export default Schematic;