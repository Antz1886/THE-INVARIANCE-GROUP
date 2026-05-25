import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-[#030303] text-slate-100 font-sans selection:bg-accent-blue/30 selection:text-white">
      {/* Background Grids */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 tech-grid opacity-30"></div>
        <div className="absolute inset-0 tech-grid-dots opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-accent-blue/5 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12 md:py-20">
        {/* Return Button */}
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Core Portal</span>
          </Link>
        </div>

        {/* Content Container */}
        <article className="glass-card rounded-xl p-8 md:p-12 border border-slate-850 shadow-2xl">
          {children}
        </article>

        {/* Legal Footer */}
        <div className="mt-8 pt-6 border-t border-slate-950 text-center font-mono text-[10px] text-slate-500">
          THE INVARIANCE GROUP (PTY) LTD • JSE COMPLIANCE OFFICE • SECURE ARCHITECTURE
        </div>
      </div>
    </div>
  );
}
