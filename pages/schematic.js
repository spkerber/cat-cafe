import React from 'react';
import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import MarkdownRenderer from '../components/MarkdownRenderer';

// Fetch schematic content at build time
export async function getStaticProps() {
  try {
    const filePath = path.join(process.cwd(), 'cat-cafe-schematic.md');
    const fileContent = await fs.readFile(filePath, 'utf8');
    const { content } = matter(fileContent);
    const htmlContent = marked(content);

    return {
      props: {
        schematicContent: htmlContent,
      },
    };
  } catch (error) {
    return {
      props: {
        schematicContent: '<p>Error loading schematic content</p>',
      },
    };
  }
}

// Main Schematic Component
export default function Schematic({ schematicContent }) {
  return (
    <div className="prose prose-stone max-w-none mx-auto">
      <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-md p-8">
        {/* Title Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-neutral-200 mb-4">
            Technical Drawings
          </h2>
          <p className="text-stone-600 dark:text-neutral-400">
            Architectural specifications for the WM Cafe construction.
          </p>
        </div>

        {/* SVG Content */}
        <div className="mb-8 bg-stone-50 dark:bg-neutral-800 p-6 rounded-lg border border-stone-200 dark:border-neutral-700 overflow-x-auto">
          <div className="min-w-[800px]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 700" className="w-full h-auto dark:text-neutral-200">
              {/* Your existing SVG content here */}
            </svg>
          </div>
        </div>

        {/* Markdown Renderer */}
        <div className="mt-8">
          <MarkdownRenderer content={schematicContent} />
        </div>
      </div>
    </div>
  );
}