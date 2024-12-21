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
    return {
      props: {
        content: '<p>Error loading content</p>'
      }
    };
  }
}

const Instructions = ({ content }) => {
  return (
    <article className="mb-32">
      <div className="max-w-2xl mx-auto">
        <div className="prose prose-lg prose-neutral mx-auto">
          <div
            dangerouslySetInnerHTML={{ __html: content }}
            className="markdown-content"
          />
        </div>
      </div>
      <style jsx global>{`
        .markdown-content {
          @apply text-lg leading-relaxed dark:text-neutral-300;
        }
        .markdown-content h1 {
          @apply text-5xl font-bold mt-12 mb-4 leading-snug dark:text-neutral-200;
        }
        .markdown-content h2 {
          @apply text-3xl font-bold mt-12 mb-4 leading-snug dark:text-neutral-200;
        }
        .markdown-content h3 {
          @apply text-2xl font-bold mt-8 mb-4 leading-snug dark:text-neutral-200;
        }
        .markdown-content pre {
          @apply bg-neutral-100 dark:bg-neutral-800 p-4 rounded-lg overflow-x-auto;
        }
        .markdown-content code {
          @apply bg-neutral-100 dark:bg-neutral-800 px-1 py-0.5 rounded;
        }
      `}</style>
    </article>
  );
};

export default Instructions;