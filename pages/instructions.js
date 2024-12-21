import React from 'react';
import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import MarkdownRenderer from '../components/MarkdownRenderer';

// Main page component
export default function InstructionsPage({ content }) {
  return (
    <article className="mb-32">
      <div className="max-w-2xl mx-auto">
        <MarkdownRenderer content={content} />
      </div>
    </article>
  );
}

// Fetch markdown content at build time
export async function getStaticProps() {
  try {
    const filePath = path.join(process.cwd(), 'cat-cafe-instructions.md');
    const fileContent = await fs.readFile(filePath, 'utf8');
    const { content } = matter(fileContent);
    const htmlContent = marked(content);

    return {
      props: {
        content: htmlContent,
      },
    };
  } catch (error) {
    return {
      props: {
        content: '<p>Error loading content</p>',
      },
    };
  }
}