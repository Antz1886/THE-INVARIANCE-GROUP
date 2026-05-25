import type { MDXComponents } from "mdx/types";
import React from "react";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-3xl font-display font-extrabold text-white mt-10 mb-4 tracking-tight border-b border-slate-900 pb-2">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-display font-bold text-white mt-8 mb-3 tracking-tight">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-display font-bold text-slate-200 mt-6 mb-2">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-5 font-sans">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc pl-6 text-slate-300 mb-5 space-y-2 font-sans text-sm md:text-base">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal pl-6 text-slate-300 mb-5 space-y-2 font-sans text-sm md:text-base">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="text-slate-300">{children}</li>,
    code: ({ children }) => (
      <code className="bg-slate-900 border border-slate-800 rounded px-1.5 py-0.5 text-xs text-accent-blue font-mono">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-[#050508] border border-slate-900 rounded-lg p-4 overflow-x-auto font-mono text-xs mb-6 text-slate-300">
        {children}
      </pre>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-accent-purple bg-[#0a0a0f] px-4 py-2 my-6 text-slate-400 font-sans italic rounded-r">
        {children}
      </blockquote>
    ),
    hr: () => <hr className="border-slate-900 my-8" />,
    ...components,
  };
}
