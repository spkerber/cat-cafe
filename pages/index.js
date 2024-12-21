import React from 'react';
import fs from 'fs';
import path from 'path';

export async function getStaticProps() {
  const instructionsPath = path.join(process.cwd(), 'cat-cafe-instructions.md');
  const instructions = fs.readFileSync(instructionsPath, 'utf8');
  return {
    props: {
      content: instructions
    }
  };
}

const BuildInstructions = ({ content }) => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <div className="prose prose-slate max-w-none">
        <article className="print:prose-sm">
          {content.split('\n').map((line, index) => {
            if (line.startsWith('# ')) {
              return <h1 key={index} className="text-3xl font-bold mt-8 mb-4">{line.slice(2)}</h1>;
            }
            if (line.startsWith('## ')) {
              return <h2 key={index} className="text-2xl font-bold mt-6 mb-3">{line.slice(3)}</h2>;
            }
            if (line.startsWith('### ')) {
              return <h3 key={index} className="text-xl font-bold mt-4 mb-2">{line.slice(4)}</h3>;
            }
            if (line.startsWith('- ')) {
              return <div key={index} className="ml-4 my-1">• {line.slice(2)}</div>;
            }
            if (line.startsWith('```')) {
              return <pre key={index} className="bg-gray-50 p-4 rounded my-4 font-mono text-sm">{line.slice(3)}</pre>;
            }
            if (line.startsWith('*')) {
              return <em key={index} className="block my-2">{line}</em>;
            }
            if (line === '') {
              return <div key={index} className="my-4"></div>;
            }
            if (line.match(/^\d+\./)) {
              return <div key={index} className="ml-4 my-1">{line}</div>;
            }
            return <p key={index} className="my-2">{line}</p>;
          })}
        </article>
      </div>
      
      <style jsx global>{`
        @media print {
          body {
            font-size: 12px;
          }
          
          h1 { font-size: 24px; margin-top: 24px; margin-bottom: 16px; }
          h2 { font-size: 20px; margin-top: 20px; margin-bottom: 14px; }
          h3 { font-size: 16px; margin-top: 16px; margin-bottom: 12px; }
          
          p, ul, ol { margin-bottom: 12px; }
          
          pre {
            white-space: pre-wrap;
            font-size: 11px;
            padding: 8px;
            background: #f5f5f5;
            border-radius: 4px;
          }
          
          code {
            font-size: 11px;
            padding: 2px 4px;
            background: #f5f5f5;
            border-radius: 2px;
          }

          @page {
            margin: 2cm;
          }
        }
      `}</style>
    </div>
  );
};

export default BuildInstructions;