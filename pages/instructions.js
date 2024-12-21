import React from 'react';
import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

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
    console.error('Error reading markdown:', error);
    return {
      props: {
        content: '<p>Error loading content</p>'
      }
    };
  }
}

const Instructions = ({ content }) => {
  return (
    <div className="prose prose-stone max-w-none">
      <div
        className="mx-auto"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default Instructions;