"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, BookOpen, Search, Filter, Shield, Cpu, TrendingUp, Shuffle, ChevronRight } from "lucide-react";

interface Briefing {
  slug: string;
  title: string;
  category: "Compliance" | "Fintech" | "Logistics" | "Infrastructure" | "Governance";
  summary: string;
  readTime: string;
  published: string;
}

const BRIEFINGS: Briefing[] = [
  {
    slug: "sovereignty",
    title: "SA Data Sovereignty & Isolated Compute: Operational Guardrails",
    category: "Compliance",
    summary: "Technical mapping of transborder data regulations, POPIA Section 72 inadequacy traps, and the engineering behind isolated VPC container subnets inside South African borders.",
    readTime: "12 min read",
    published: "May 2026"
  },
  {
    slug: "sarb-exchange-control",
    title: "Automating Balance of Payments (BoP) Reporting under SARB Guidelines",
    category: "Fintech",
    summary: "Quantitative analysis of automated classification of outward and inward remittances. How to avoid transactional queues and mitigate exchange rate slippage.",
    readTime: "10 min read",
    published: "May 2026"
  },
  {
    slug: "popia-section-19",
    title: "Technical Safeguards for Processing Personal Information under Section 19",
    category: "Compliance",
    summary: "An engineering-first guide to implementing integrity controls, encryption, and secure audit tracking for customer-identifying databases under local regulations.",
    readTime: "8 min read",
    published: "May 2026"
  },
  {
    slug: "edge-logistics-load-shedding",
    title: "Offline-First Neural Routing Corridors During Localized Grid Collapse",
    category: "Logistics",
    summary: "How to deploy edge AI nodes on regional transport networks to sustain automated fleet dispatch operations under severe loadshedding disruptions.",
    readTime: "14 min read",
    published: "Apr 2026"
  },
  {
    slug: "biometric-transaction-verification",
    title: "PCI-DSS Compliant Biometric Handshakes in Conversational Commerce",
    category: "Fintech",
    summary: "Securing high-value digital checkout flows within chat pipelines using public-key cryptography and device-bound biometric signatures.",
    readTime: "9 min read",
    published: "Apr 2026"
  },
  {
    slug: "sovereign-vpc-deployment",
    title: "Reference Architecture: Deploying Cognitive Container Subnets",
    category: "Infrastructure",
    summary: "A step-by-step systems blueprint for provisioning sandboxed Kubernetes nodes in client cloud tenants, completely isolated from shared SaaS networks.",
    readTime: "15 min read",
    published: "Mar 2026"
  },
  {
    slug: "mlops-governance-sla",
    title: "Model Drift, Security Patching, and SLA Guarantees in Agentic Networks",
    category: "Governance",
    summary: "Analyzing the maintenance schedules of private enterprise cognitive engines. Establishing automated monitoring without exposing underlying datasets.",
    readTime: "11 min read",
    published: "Mar 2026"
  },
  {
    slug: "automated-contract-triage-safeguards",
    title: "Human-in-the-Loop Validation Safeguards for Legal AI Pipelines",
    category: "Governance",
    summary: "Design patterns for automated contract redlining. How to create deterministic threshold boundaries that escalate complex liability clauses to legal counsel.",
    readTime: "9 min read",
    published: "Feb 2026"
  },
  {
    slug: "local-cloud-infrastructure",
    title: "Sovereign Cloud: AWS, Azure, & GCP Johannesburg Region Adequacy",
    category: "Infrastructure",
    summary: "Comparing latency metrics, edge connectivity, and POPIA adequacy levels of the three major hyper-scale local cloud regions in South Africa.",
    readTime: "11 min read",
    published: "Jan 2026"
  },
  {
    slug: "cross-border-settlement-security",
    title: "Securing High-Value Digital Settlement Channels in Banking Rails",
    category: "Fintech",
    summary: "Implementation analysis of zero-leak encrypted queues connecting corporate accounts directly to automated clearing houses under SARB supervision.",
    readTime: "13 min read",
    published: "Jan 2026"
  },
  {
    slug: "grid-tolerant-hardware-spec",
    title: "Hardware Blueprint: Specifying FieldForce Edge Gateways with Solar Failovers",
    category: "Infrastructure",
    summary: "Recommended system configurations for deploying localized physical compute hardware in remote depots vulnerable to power outages.",
    readTime: "7 min read",
    published: "Dec 2025"
  }
];

export default function WhitepapersIndex() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredBriefings = BRIEFINGS.filter(briefing => {
    const matchesSearch = briefing.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          briefing.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || briefing.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Compliance": return <Shield className="w-4 h-4 text-emerald-400" />;
      case "Fintech": return <TrendingUp className="w-4 h-4 text-accent-purple" />;
      case "Logistics": return <Shuffle className="w-4 h-4 text-accent-blue" />;
      case "Infrastructure": return <Cpu className="w-4 h-4 text-indigo-400" />;
      default: return <BookOpen className="w-4 h-4 text-slate-400" />;
    }
  };

  return (
    <div className="relative min-h-screen bg-[#030303] text-slate-100 font-sans selection:bg-accent-blue/30 selection:text-white">
      {/* Background Grids */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 tech-grid opacity-30"></div>
        <div className="absolute inset-0 tech-grid-dots opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-accent-blue/5 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-20">
        {/* Back navigation */}
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Core Portal</span>
          </Link>
        </div>

        {/* Title */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-accent-blue block mb-3 font-semibold">
            THE INVARIANCE GROUP • BRIEFING CENTER
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Knowledge Resource Library
          </h1>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            In-depth engineering logs, regulatory compliance assessments, and technical blueprints written for institutional Chief Risk Officers, COOs, and technology steering committees.
          </p>
        </div>

        {/* Filters and Search Bar */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center mb-10 pb-6 border-b border-slate-900">
          <div className="md:col-span-4 relative">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-3.5" />
            <input
              type="text"
              placeholder="Search library..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full bg-[#050507] border border-slate-800 rounded p-3 pl-10 text-sm text-white focus:outline-none focus:border-accent-blue transition-colors font-mono"
            />
          </div>

          <div className="md:col-span-8 flex flex-wrap gap-2 justify-start md:justify-end">
            {["All", "Compliance", "Fintech", "Logistics", "Infrastructure", "Governance"].map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded text-xs font-mono border transition-all ${
                  selectedCategory === cat
                    ? "bg-slate-900 border-accent-blue/30 text-white"
                    : "bg-transparent border-slate-900 text-slate-400 hover:text-white hover:border-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid List */}
        {filteredBriefings.length === 0 ? (
          <div className="text-center py-20 text-slate-500 font-mono text-sm border border-dashed border-slate-900 rounded-lg bg-[#050507]/20">
            No technical briefings found matching the selection criteria.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBriefings.map(briefing => (
              <div 
                key={briefing.slug} 
                className="glass-card rounded-xl p-6 border border-slate-850 flex flex-col justify-between glass-card-hover group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-accent-blue/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="flex items-center gap-1.5 text-[10px] font-mono text-slate-400">
                      {getCategoryIcon(briefing.category)}
                      {briefing.category.toUpperCase()}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">{briefing.published}</span>
                  </div>
                  
                  <h3 className="font-display font-bold text-base text-white mb-3 group-hover:text-accent-blue transition-colors">
                    {briefing.title}
                  </h3>
                  
                  <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-6">
                    {briefing.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-900/60 flex justify-between items-center text-[10px] font-mono">
                  <span className="text-slate-500">{briefing.readTime}</span>
                  <Link 
                    href={`/whitepapers/${briefing.slug}`}
                    className="inline-flex items-center gap-1 text-accent-purple hover:text-white transition-colors"
                  >
                    <span>Read Briefing</span>
                    <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
