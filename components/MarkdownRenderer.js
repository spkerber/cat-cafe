import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';

const MarkdownRenderer = ({ content }) => {
  const sanitizedContent = DOMPurify.sanitize(content); // Ensure content is sanitized

  return (
    <div className="prose prose-lg prose-neutral mx-auto markdown-content" aria-live="polite">
      {/* Render sanitized content */}
      <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />

      {/* Scoped styles for markdown content */}
      <style jsx>{`
        .markdown-content h1 {
          font-size: 3rem;
          font-weight: bold;
          margin-top: 3rem;
          margin-bottom: 1rem;
          line-height: 1.3;
          color: var(--neutral-200);
        }
        .markdown-content h2 {
          font-size: 2.5rem;
          font-weight: bold;
          margin-top: 2rem;
          margin-bottom: 1rem;
          line-height: 1.3;
          color: var(--neutral-200);
        }
        .markdown-content h3 {
          font-size: 2rem;
          font-weight: bold;
          margin-top: 1.5rem;
          margin-bottom: 1rem;
          line-height: 1.3;
          color: var(--neutral-200);
        }
        .markdown-content pre {
          background-color: var(--neutral-100);
          color: var(--neutral-800);
          padding: 1rem;
          border-radius: 0.5rem;
          overflow-x: auto;
        }
        .markdown-content code {
          background-color: var(--neutral-100);
          color: var(--neutral-800);
          padding: 0.2rem 0.4rem;
          border-radius: 0.25rem;
        }
      `}</style>
    </div>
  );
};

MarkdownRenderer.propTypes = {
  content: PropTypes.string.isRequired,
};

export default MarkdownRenderer;