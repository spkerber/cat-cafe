import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'cat-cafe-schematic.md');
  const fileContent = await fs.readFile(filePath, 'utf8');
  const { content } = matter(fileContent);
  const htmlContent = marked(content);

  return {
    props: {
      content: htmlContent,
    },
  };
}

export default function Schematic({ content }) {
  return (
    <div className="prose prose-stone max-w-none">
      <div
        className="mx-auto"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}