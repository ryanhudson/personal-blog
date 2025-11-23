import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownViewProps {
  content: string;
}

const MarkdownView: React.FC<MarkdownViewProps> = ({ content }) => {
  return (
    <div className="markdown-body w-full">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ node, ...props }) => <h1 className="text-3xl md:text-4xl font-bold text-main mt-8 mb-4 tracking-tight" {...props} />,
          h2: ({ node, ...props }) => <h2 className="text-2xl md:text-3xl font-semibold text-main mt-8 mb-4" {...props} />,
          h3: ({ node, ...props }) => <h3 className="text-xl md:text-2xl font-semibold text-main mt-6 mb-3" {...props} />,
          p: ({ node, ...props }) => <p className="text-muted leading-7 mb-6 text-lg" {...props} />,
          ul: ({ node, ...props }) => <ul className="list-disc list-inside text-muted mb-6 space-y-2 pl-4" {...props} />,
          ol: ({ node, ...props }) => <ol className="list-decimal list-inside text-muted mb-6 space-y-2 pl-4" {...props} />,
          li: ({ node, ...props }) => <li className="text-muted" {...props} />,
          blockquote: ({ node, ...props }) => (
            <blockquote className="border-l-4 border-primary pl-4 py-1 my-6 bg-card italic text-muted rounded-r-lg" {...props} />
          ),
          code: ({ node, inline, className, children, ...props }: any) => {
            const match = /language-(\w+)/.exec(className || '');
            return !inline ? (
              <div className="relative group rounded-lg overflow-hidden my-6 border border-border bg-zinc-900">
                 <div className="absolute top-0 right-0 p-2 opacity-50 text-xs uppercase tracking-wider text-gray-400 select-none">
                  {match ? match[1] : 'code'}
                 </div>
                <pre className="p-4 overflow-x-auto">
                  <code className={`${className} text-sm font-mono text-gray-200`} {...props}>
                    {children}
                  </code>
                </pre>
              </div>
            ) : (
              <code className="bg-card text-primary px-1.5 py-0.5 rounded text-sm font-mono border border-border" {...props}>
                {children}
              </code>
            );
          },
          img: ({ node, ...props }) => (
            <img className="rounded-xl w-full object-cover my-8 border border-border" {...props} alt={props.alt || 'Blog image'} />
          ),
          a: ({ node, ...props }) => (
            <a className="text-primary hover:text-indigo-400 underline decoration-indigo-500/30 hover:decoration-indigo-400 transition-colors" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownView;