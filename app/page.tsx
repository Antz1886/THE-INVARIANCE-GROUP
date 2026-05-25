"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Shield, 
  Cpu, 
  TrendingUp, 
  Shuffle, 
  Activity, 
  FileText, 
  Database, 
  Network, 
  ArrowRight, 
  Lock, 
  Server, 
  CheckCircle2, 
  MapPin, 
  Mail, 
  Phone, 
  ChevronRight,
  Globe,
  Settings,
  ArrowRightLeft,
  BookOpen,
  Layers
} from "lucide-react";

export default function Home() {
  // Client state for high-ticket application form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    org: "",
    role: "CIO",
    frictionArea: "compliance",
    budget: "tier1",
    hasSovereignAuthority: false,
    isSubjectToExCon: false,
    details: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  // Simulation states
  const [systemUptime, setSystemUptime] = useState("99.9997%");
  const [liveNodes, setLiveNodes] = useState(128);
  const [lastAuditTime, setLastAuditTime] = useState("");
  
  // Planner Active Sector State
  const [activePlannerSector, setActivePlannerSector] = useState<"compliance" | "capital" | "logistics" | "commerce">("compliance");

  useEffect(() => {
    // Generate live-ish telemetry data
    const timer = setInterval(() => {
      const noise = (Math.random() - 0.5) * 0.0002;
      setSystemUptime((99.9995 + noise).toFixed(4) + "%");
      setLiveNodes(prev => prev + (Math.random() > 0.5 ? 1 : -1));
    }, 3000);

    const now = new Date();
    setLastAuditTime(now.toLocaleTimeString("en-ZA", { timeZone: "Africa/Johannesburg" }));

    return () => clearInterval(timer);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 1500);
  };

  const plannerSectors = {
    compliance: {
      title: "Legal & Procurement (POPIA Clarity)",
      metric: "85% Triage Speedup",
      uptime: "99.999% Compliance Accuracy",
      regulation: "POPIA Section 19 Safeguards",
      latency: "Under 100ms per contract",
      summary: "Automatically ingests, anonymizes, and indexes historical enterprise templates and procurement drafts, flagging liability exposures natively without regulatory leakages.",
      recommended: "Compliance Invariance (Clarity)",
      steps: ["Ingest Document", "Anonymize PII", "Rule-Set Evaluation", "Approved Draft"]
    },
    capital: {
      title: "Fintech & Exchange Control (Flipper)",
      metric: "94% Zero-Touch Exception Rate",
      uptime: "Real-time SARB Ledger Sync",
      regulation: "SARB ExCon Section 3 Guidelines",
      latency: "< 1.2s transaction processing",
      summary: "Automates complex Balance of Payments (BoP) reporting and executes zero-touch exception handling for cross-border capital flows, bypassing bank queues.",
      recommended: "Capital Invariance (Flipper)",
      steps: ["Monitor Rails", "Audit BoP Codes", "Automate Exception", "SARB Submission"]
    },
    logistics: {
      title: "Supply Chain & Grid Resilience (FieldForce)",
      metric: "100% Load-Shedding Resilience",
      uptime: "Edge Node Failover Guarantee",
      regulation: "Critical Infrastructure Security",
      latency: "Offline-first capability",
      summary: "Edge AI dispatch mapping for Gauteng corridors. Absorb transport friction and grid outages through localized neural rerouting.",
      recommended: "Supply Chain Invariance (FieldForce)",
      steps: ["Hub Telemetry", "Predict Outages", "Re-route Assets", "Edge Nodes Sync"]
    },
    commerce: {
      title: "Conversational Commerce (Buddy AI)",
      metric: "99.8% Payment Conversion",
      uptime: "Biometric Crypto Authentication",
      regulation: "PCI-DSS / POPIA Isolation",
      latency: "< 8ms transaction sync",
      summary: "Secures high-ticket transactional flows inside chat environments using private-key biometric handshake rails.",
      recommended: "Revenue Invariance (Buddy AI)",
      steps: ["Init Chat Session", "Biometric Verify", "Query Bank API", "Encrypted Settlement"]
    }
  };

  return (
    <div className="relative min-h-screen bg-[#030303] text-slate-100 overflow-x-hidden font-sans selection:bg-accent-blue/30 selection:text-white">
      {/* Background Grids and Blobs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 tech-grid opacity-40"></div>
        <div className="absolute inset-0 tech-grid-dots opacity-30"></div>
        <div className="absolute inset-0 glow-radial-blue"></div>
        <div className="absolute inset-0 glow-radial-purple"></div>
      </div>

      {/* Glass Navigation */}
      <nav className="sticky top-0 z-50 glass-nav">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center w-10 h-10 rounded bg-[#0a0a0c] border border-slate-800">
              <div className="absolute inset-0.5 rounded border border-accent-blue/20 animate-pulse"></div>
              <span className="font-display font-bold text-lg text-white tracking-tighter">Δ</span>
            </div>
            <div>
              <span className="font-display font-bold tracking-widest text-sm text-white block">THE INVARIANCE GROUP</span>
              <span className="text-[10px] text-slate-500 tracking-wider font-mono">AI CORE ARCHITECTURE</span>
            </div>
          </div>

          {/* Telemetry Status Bar */}
          <div className="hidden lg:flex items-center gap-6 font-mono text-[11px] text-slate-400">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-slate-900/60 border border-slate-800/80">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span>NETWORK: ACTIVE</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-slate-900/60 border border-slate-800/80">
              <span>UPTIME: <span className="text-white font-bold">{systemUptime}</span></span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-slate-900/60 border border-slate-800/80">
              <span>SA COMPLIANCE: POPIA NATIVE</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="#retainer-portal" 
              className="text-xs uppercase tracking-wider font-mono font-bold text-slate-400 hover:text-white transition-colors py-2 px-3 border border-transparent hover:border-slate-800 rounded bg-[#08080a]/40"
            >
              Portal Login
            </a>
            <a 
              href="#retainer-portal"
              className="text-xs font-semibold px-4 py-2 bg-gradient-to-r from-accent-blue to-accent-purple text-white rounded border border-white/10 hover:shadow-[0_0_15px_rgba(0,136,255,0.4)] transition-all duration-300"
            >
              Request Briefing
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20 lg:pt-36 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800 mb-8 shadow-inner">
              <Shield className="w-3.5 h-3.5 text-accent-blue" />
              <span className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-slate-300">
                SOUTH AFRICA • PRIVATE COMPUTE & SOVEREIGN MLOPS
              </span>
            </div>
            
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05] mb-6">
              Operational Certainty <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-indigo-400 to-accent-purple">
                in a Volatile World.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 font-sans leading-relaxed max-w-2xl mb-10">
              We design and deploy autonomous, agentic infrastructure for South Africa's most demanding logistics, legal, and financial enterprises.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a 
                href="#retainer-portal"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-accent-blue to-accent-purple text-white font-medium rounded border border-white/10 shadow-[0_4px_20px_rgba(0,136,255,0.15)] hover:shadow-[0_0_30px_rgba(0,136,255,0.3)] transition-all duration-300 group"
              >
                <span>Initialize Feasibility Briefing</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#proprietary-engines"
                className="inline-flex items-center justify-center px-8 py-4 bg-slate-950/40 text-slate-300 font-medium rounded border border-slate-800 hover:border-slate-700 hover:text-white transition-all backdrop-blur-sm"
              >
                Explore Engines
              </a>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-16 pt-12 border-t border-slate-900 w-full">
              <div>
                <span className="block text-[11px] font-mono uppercase tracking-widest text-slate-500 mb-1">Response SLAs</span>
                <span className="text-xl font-bold font-display text-white">99.999% Guarantee</span>
              </div>
              <div>
                <span className="block text-[11px] font-mono uppercase tracking-widest text-slate-500 mb-1">Local Latency</span>
                <span className="text-xl font-bold font-display text-white">&lt; 8ms (Gauteng Dev Hub)</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="block text-[11px] font-mono uppercase tracking-widest text-slate-500 mb-1">System Audit Code</span>
                <span className="text-xl font-bold font-display text-slate-400 font-mono tracking-tighter">AES-256-GCM</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 relative flex justify-center items-center">
            {/* Live System Simulator Visual Widget */}
            <div className="w-full max-w-sm glass-card rounded-xl p-6 border border-slate-850 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent-blue/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent-purple/10 rounded-full blur-2xl"></div>
              
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-850">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-accent-blue animate-pulse" />
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">NODE INTEGRITY</span>
                </div>
                <span className="px-2 py-0.5 rounded text-[9px] bg-slate-900 border border-slate-800 text-emerald-400 font-mono">
                  ONLINE
                </span>
              </div>

              {/* Server Stats Simulated Output */}
              <div className="space-y-4 font-mono text-[10px] text-slate-400">
                <div className="flex justify-between items-center bg-slate-950/60 p-2 rounded border border-slate-900">
                  <span>ORCHESTRATOR VERSION:</span>
                  <span className="text-white">AGY-v4.1.2_SA</span>
                </div>
                <div className="flex justify-between items-center bg-slate-950/60 p-2 rounded border border-slate-900">
                  <span>ACTIVE COGNITIVE NODES:</span>
                  <span className="text-accent-blue font-bold">{liveNodes}</span>
                </div>
                <div className="flex justify-between items-center bg-slate-950/60 p-2 rounded border border-slate-900">
                  <span>LOCAL TELEMETRY SYNC:</span>
                  <span className="text-white">{lastAuditTime} SAST</span>
                </div>
                <div className="bg-slate-950/60 p-3 rounded border border-slate-900">
                  <div className="flex justify-between mb-1.5 text-[9px]">
                    <span>MEMORY PIPELINE SATURATION:</span>
                    <span className="text-accent-purple">41.8%</span>
                  </div>
                  <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-accent-blue to-accent-purple h-full w-[42%]"></div>
                  </div>
                </div>
              </div>

              {/* Visual Grid representing Node Network */}
              <div className="mt-6 pt-4 border-t border-slate-850 flex flex-col gap-2">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block block">Neural Node Topology:</span>
                <div className="grid grid-cols-6 gap-2 bg-[#050507] p-3 rounded border border-slate-900">
                  {Array.from({ length: 18 }).map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-2.5 rounded-sm transition-all duration-500 ${
                        i % 5 === 0 
                          ? "bg-accent-purple shadow-[0_0_6px_rgba(157,78,221,0.6)] animate-pulse" 
                          : i % 3 === 0 
                          ? "bg-accent-blue shadow-[0_0_6px_rgba(0,136,255,0.6)]" 
                          : "bg-slate-800"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proprietary Engines Section (Bento Grid) */}
      <section id="proprietary-engines" className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-32 border-t border-slate-900 bg-[#040406]/60 backdrop-blur-sm">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-accent-blue block mb-3 font-semibold">
              CORE INFRASTRUCTURE PILLARS
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              The Proprietary Cognitive Engines
            </h2>
          </div>
          <p className="text-slate-400 font-sans max-w-md mt-4 lg:mt-0 text-sm md:text-base leading-relaxed">
            Running on secure, fully isolated private compute environments, specifically optimized for the compliance, legislative, and operational realities of South African enterprise.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Compliance Invariance (Clarity) - Asymmetric Width 2/3 */}
          <div className="md:col-span-2 glass-card rounded-xl p-8 border border-slate-850 flex flex-col justify-between glass-card-hover group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-accent-blue/5 rounded-full blur-3xl group-hover:bg-accent-blue/10 transition-all duration-500"></div>
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-slate-950 border border-slate-800 flex items-center justify-center text-accent-blue shadow-inner">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-white">Compliance Invariance</h3>
                    <span className="text-xs font-mono text-slate-400">ENGINE ID: CLARITY</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded bg-accent-blue-glow border border-accent-blue/20 text-accent-blue text-[10px] font-mono font-bold tracking-wider uppercase">
                  POPIA-NATIVE
                </span>
              </div>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl mb-8">
                POPIA-native automated contract triage. Engineered with strict human-in-the-loop safeguards to ensure unbroken legal compliance without regulatory exposure. Instantly scans, checks compliance matrices, and redlines drafts against local guidelines.
              </p>
            </div>

            {/* Visual widget */}
            <div className="mt-4 bg-[#050508] border border-slate-900 rounded-lg p-4 font-mono text-[10px] space-y-2">
              <div className="flex justify-between items-center text-slate-500 border-b border-slate-900 pb-2">
                <span>ACTIVE PIPELINE: CONTRACT_TRIAGE_V4</span>
                <span className="text-emerald-400">SHIELD: ACTIVE</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 pt-1">
                <div className="flex items-center gap-2 bg-[#0a0a0e] p-2 rounded border border-slate-850">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span className="text-slate-300">POPIA Sec 19 Aligned</span>
                </div>
                <div className="flex items-center gap-2 bg-[#0a0a0e] p-2 rounded border border-slate-850">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span className="text-slate-300">Liability Caps Inspected</span>
                </div>
                <div className="flex items-center gap-2 bg-[#0a0a0e] p-2 rounded border border-slate-850">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span className="text-slate-300">Cross-Border Rules Checked</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Capital Invariance (Flipper) - Asymmetric Width 1/3 */}
          <div className="md:col-span-1 glass-card rounded-xl p-8 border border-slate-850 flex flex-col justify-between glass-card-purple-hover group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-36 h-36 bg-accent-purple/5 rounded-full blur-3xl group-hover:bg-accent-purple/10 transition-all duration-500"></div>
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-slate-950 border border-slate-800 flex items-center justify-center text-accent-purple shadow-inner">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-white">Capital Invariance</h3>
                    <span className="text-xs font-mono text-slate-400">ENGINE ID: FLIPPER</span>
                  </div>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-8">
                The "Autonomous ExCon Officer." Quantitative fintech that automates SARB Balance of Payments (BoP) reporting and executes zero-touch exception handling. Mitigates the average 1.2% in currency slippage and heavy administrative overhead caused by manual filing delays.
              </p>
            </div>

            {/* Visual telemetry */}
            <div className="mt-4 bg-[#050508] border border-slate-900 rounded-lg p-4 font-mono text-[10px] space-y-2">
              <div className="flex justify-between items-center text-slate-500">
                <span>SARB BOP REPORTING LOG</span>
                <span className="text-accent-purple">RUNNING</span>
              </div>
              <div className="space-y-1 pt-1">
                <div className="flex justify-between text-slate-400">
                  <span>OUTWARD REMITTANCE:</span>
                  <span className="text-white">SECURED</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>EXCEPTION RESOLUTION RATE:</span>
                  <span className="text-white">99.8%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Supply Chain Invariance (FieldForce) - Asymmetric Width 1/3 */}
          <div className="md:col-span-1 glass-card rounded-xl p-8 border border-slate-850 flex flex-col justify-between glass-card-hover group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-36 h-36 bg-accent-blue/5 rounded-full blur-3xl group-hover:bg-accent-blue/10 transition-all duration-500"></div>
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-slate-950 border border-slate-800 flex items-center justify-center text-accent-blue shadow-inner">
                    <Shuffle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-white">Supply Chain Invariance</h3>
                    <span className="text-xs font-mono text-slate-400">ENGINE ID: FIELDFORCE</span>
                  </div>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-8">
                Edge AI-powered neural dispatch and predictive logistics. Absorb transport friction and Stage 6 load-shedding grid instabilities (mitigating the standard 7.2% dispatch delay multiplier) to guarantee operational uptime.
              </p>
            </div>

            {/* Visual telemetry */}
            <div className="mt-4 bg-[#050508] border border-slate-900 rounded-lg p-4 font-mono text-[10px] space-y-2">
              <div className="flex justify-between items-center text-slate-500">
                <span>GRID INTOLERANCE FILTER</span>
                <span className="text-emerald-400">TOLERANT</span>
              </div>
              <div className="space-y-1 pt-1">
                <div className="flex justify-between text-slate-400">
                  <span>NEXT LOGISTICS DISPATCH:</span>
                  <span className="text-white">AUTO-OPTIMIZED</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>GRID-FAILURE FAILOVER:</span>
                  <span className="text-white">0.00ms</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Revenue Invariance (Buddy AI) - Asymmetric Width 2/3 */}
          <div className="md:col-span-2 glass-card rounded-xl p-8 border border-slate-850 flex flex-col justify-between glass-card-purple-hover group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-accent-purple/5 rounded-full blur-3xl group-hover:bg-accent-purple/10 transition-all duration-500"></div>
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-slate-950 border border-slate-800 flex items-center justify-center text-accent-purple shadow-inner">
                    <Database className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-white">Revenue Invariance</h3>
                    <span className="text-xs font-mono text-slate-400">ENGINE ID: BUDDY AI</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded bg-accent-purple-glow border border-accent-purple/20 text-accent-purple text-[10px] font-mono font-bold tracking-wider uppercase">
                  HIGH-SECURITY
                </span>
              </div>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl mb-8">
                Compliant, highly secure conversational commerce infrastructure securing conversion. Implements military-grade identity verification and transaction safeguarding built to operate within localized banking rails.
              </p>
            </div>

            {/* Visual widget */}
            <div className="mt-4 bg-[#050508] border border-slate-900 rounded-lg p-4 font-mono text-[10px] space-y-2">
              <div className="flex justify-between items-center text-slate-500 border-b border-slate-900 pb-2">
                <span>COMMERCE DEPLOYMENT: SECURED_CHANNEL_V1</span>
                <span className="text-accent-purple">IDENTITY: CRYPTO SIGNED</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 pt-1">
                <div className="flex items-center gap-2 bg-[#0a0a0e] p-2 rounded border border-slate-850">
                  <Lock className="w-3.5 h-3.5 text-accent-purple shrink-0" />
                  <span className="text-slate-300">Biometric Handshake</span>
                </div>
                <div className="flex items-center gap-2 bg-[#0a0a0e] p-2 rounded border border-slate-850">
                  <Lock className="w-3.5 h-3.5 text-accent-purple shrink-0" />
                  <span className="text-slate-300">SA Reserve Verification</span>
                </div>
                <div className="flex items-center gap-2 bg-[#0a0a0e] p-2 rounded border border-slate-850">
                  <Lock className="w-3.5 h-3.5 text-accent-purple shrink-0" />
                  <span className="text-slate-300">Zero Leak Guard</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Interactive Architecture & ROI Planner */}
      <section id="architecture-planner" className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-32 border-t border-slate-900 bg-[#020204]/85">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-accent-blue block mb-3 font-semibold">
            INTERACTIVE ADVISORY TOOL
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Interactive Architecture Planner
          </h2>
          <p className="text-slate-400 font-sans text-sm md:text-base leading-relaxed">
            Select an operational pillar below to configure your target sovereign compute metrics and view active cognitive routing flows.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Sector Buttons */}
          <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
            {Object.entries(plannerSectors).map(([key, sector]) => (
              <button
                key={key}
                onClick={() => setActivePlannerSector(key as any)}
                className={`w-full text-left p-5 rounded-lg border transition-all duration-300 ${
                  activePlannerSector === key
                    ? "bg-slate-900/60 border-accent-blue/30 shadow-[0_0_15px_rgba(0,136,255,0.05)]"
                    : "bg-[#050508]/40 border-slate-900 hover:border-slate-800"
                }`}
              >
                <div className="font-display font-bold text-sm text-white mb-1">{sector.title}</div>
                <span className="text-[10px] font-mono text-accent-blue uppercase tracking-wider">{sector.metric}</span>
              </button>
            ))}
          </div>

          {/* Interactive Flow Visualizer */}
          <div className="lg:col-span-8 glass-card rounded-xl p-8 border border-slate-850 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-blue/5 rounded-full blur-2xl"></div>

            <div>
              <div className="flex flex-col sm:flex-row justify-between sm:items-center border-b border-slate-850 pb-4 mb-6">
                <div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Active Engine</span>
                  <h3 className="font-display font-bold text-lg text-white">{plannerSectors[activePlannerSector].recommended}</h3>
                </div>
                <div className="mt-2 sm:mt-0 px-3 py-1 rounded bg-[#0a0a0f] border border-slate-800 font-mono text-[10px] text-emerald-400">
                  {plannerSectors[activePlannerSector].regulation}
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-8">
                {plannerSectors[activePlannerSector].summary}
              </p>

              {/* Dynamic Interactive Flow Diagram */}
              <div className="bg-[#050508] border border-slate-900 rounded-lg p-6 mb-8">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-4">Sovereign Data Routing flow:</span>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center relative">
                  {plannerSectors[activePlannerSector].steps.map((step, idx) => (
                    <React.Fragment key={idx}>
                      <div className="relative p-3 bg-slate-950 border border-slate-850 rounded text-center font-mono text-[10px] flex flex-col items-center justify-center">
                        <div className="w-5 h-5 rounded-full bg-slate-900 border border-slate-800 text-[10px] flex items-center justify-center text-accent-blue mb-1.5 font-bold">
                          {idx + 1}
                        </div>
                        <span className="text-slate-300 font-medium">{step}</span>
                      </div>
                      
                      {idx < 3 && (
                        <div className="hidden md:flex justify-center text-slate-700">
                          <ChevronRight className="w-4 h-4 animate-pulse text-accent-blue/40" />
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            {/* Performance SLA Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-850 font-mono text-[11px] text-slate-400">
              <div>
                <span className="text-slate-500 block mb-1">AUDIT LATENCY:</span>
                <span className="text-white font-bold">{plannerSectors[activePlannerSector].latency}</span>
              </div>
              <div>
                <span className="text-slate-500 block mb-1">UPTIME LEVEL:</span>
                <span className="text-emerald-400 font-bold">{plannerSectors[activePlannerSector].uptime}</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="text-slate-500 block mb-1">SANDBOX RULE:</span>
                <span className="text-accent-purple font-bold">ISOLATED SUBNET</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-mono uppercase tracking-widest text-accent-purple block mb-3 font-semibold">
            THE METHODOLOGY
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Pilot to Production
          </h2>
          <p className="text-slate-400 font-sans text-sm md:text-base leading-relaxed">
            A low-risk, high-velocity onboarding protocol engineered for corporate advisory committees and technical steering boards.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-accent-blue/30 via-indigo-500/20 to-accent-purple/30 z-0 pointer-events-none"></div>
          
          {/* Step 1 */}
          <div className="glass-card rounded-xl p-8 border border-slate-850 relative z-10 glass-card-hover">
            <div className="text-accent-blue font-mono font-bold text-4xl mb-6">01</div>
            <h3 className="font-display font-bold text-lg text-white mb-3">14-Day Feasibility Pilot</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Rapid data ingestion utilizing historical client data to prove immediate, quantifiable ROI. No code changes to legacy systems are made at this stage.
            </p>
            <div className="pt-4 border-t border-slate-900 text-xs font-mono text-slate-500">
              DELIVERABLE: SOVEREIGN FEASIBILITY MAP
            </div>
          </div>

          {/* Step 2 */}
          <div className="glass-card rounded-xl p-8 border border-slate-850 relative z-10 glass-card-hover">
            <div className="text-indigo-400 font-mono font-bold text-4xl mb-6">02</div>
            <h3 className="font-display font-bold text-lg text-white mb-3">Model Fine-Tuning & Integration</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Customizing the cognitive engine on your isolated servers and building secure, encrypted pipelines matching internal API structures.
            </p>
            <div className="pt-4 border-t border-slate-900 text-xs font-mono text-slate-500">
              DELIVERABLE: SECURE VPC INTEGRATION PLAN
            </div>
          </div>

          {/* Step 3 */}
          <div className="glass-card rounded-xl p-8 border border-slate-850 relative z-10 glass-card-purple-hover">
            <div className="text-accent-purple font-mono font-bold text-4xl mb-6">03</div>
            <h3 className="font-display font-bold text-lg text-white mb-3">Enterprise Deployment</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Full-scale production rollout on private cloud/on-premise compute with ongoing autonomous MLOps, fully governed by institutional SLAs.
            </p>
            <div className="pt-4 border-t border-slate-900 text-xs font-mono text-slate-500">
              DELIVERABLE: SLA & COMPLIANCE SIGN-OFF
            </div>
          </div>
        </div>
      </section>

      {/* Proofs of Value (Case Studies) & Technical Hub */}
      <section id="proofs-of-value" className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-32 border-t border-slate-900 bg-[#040406]/60 backdrop-blur-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-6">
            <span className="text-xs font-mono uppercase tracking-widest text-accent-purple block mb-3 font-semibold">
              INSTITUTIONAL PERFORMANCE LOG
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              Proofs of Value (PoVs)
            </h2>
            <p className="text-slate-400 font-sans text-sm md:text-base leading-relaxed">
              Empirical evidence of operational stability, legal compliance, and load-shedding tolerance deployed within South Africa's primary economic corridors.
            </p>
          </div>
          
          {/* Briefing Center Card */}
          <div className="lg:col-span-6 glass-card rounded-xl p-6 border border-slate-850 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-accent-purple/5 rounded-full blur-2xl"></div>
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-5 h-5 text-accent-purple" />
              <h3 className="font-display font-bold text-base text-white">Knowledge Resource Hub</h3>
            </div>
            <p className="text-slate-300 text-xs md:text-sm font-sans mb-5 leading-relaxed">
              Access technical architectures, compliance assessments, and data sovereignty blueprints prepared for CIOs and Chief Risk Officers.
            </p>
            <Link 
              href="/whitepapers/sovereignty"
              className="inline-flex items-center gap-2 text-xs font-mono text-accent-purple hover:text-white transition-colors animate-pulse"
            >
              <span>Read Briefing: SA Data Sovereignty & Isolated Compute</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* POV 1 */}
          <div className="glass-card rounded-xl p-6 border border-slate-850 flex flex-col justify-between glass-card-hover">
            <div>
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-2">SECTOR: BANKING & TREASURY</span>
              <h3 className="font-display font-bold text-base text-white mb-3">SARB ExCon Invariance: Securing R4.2B Daily Exchange Risk</h3>
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-6">
                Integrated the Flipper engine with corporate treasury rails for a JSE-listed import conglomerate, automating real-time Balance of Payments filings and removing manual filing bottlenecks.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-900">
              <div className="text-xl font-bold font-display text-white mb-1">R4.2B Daily Vol</div>
              <span className="text-[10px] font-mono text-accent-blue uppercase tracking-widest block">94% Automated Exception Handling</span>
            </div>
          </div>

          {/* POV 2 */}
          <div className="glass-card rounded-xl p-6 border border-slate-850 flex flex-col justify-between glass-card-hover">
            <div>
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-2">SECTOR: FREIGHT & LOGISTICS</span>
              <h3 className="font-display font-bold text-base text-white mb-3">Gauteng Corridor Dispatch Invariance: Stage 6 Grid Immunity</h3>
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-6">
                Deployed FieldForce neural dispatch nodes across corporate warehouses, routing freight transport assets dynamically around municipal power collapses and saving 14.8% in fuel.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-900">
              <div className="text-xl font-bold font-display text-white mb-1">Stage 6 Grid Immunity</div>
              <span className="text-[10px] font-mono text-accent-blue uppercase tracking-widest block">14.8% Operational Fuel Savings</span>
            </div>
          </div>

          {/* POV 3 */}
          <div className="glass-card rounded-xl p-6 border border-slate-850 flex flex-col justify-between glass-card-purple-hover">
            <div>
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-2">SECTOR: CORPORATE LAW & M&A</span>
              <h3 className="font-display font-bold text-base text-white mb-3">POPIA Section 19 Compliance: Triaging 18,500 Vendor Contracts</h3>
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-6">
                Configured Clarity to audit and redline legacy vendor agreements during an M&A transaction, identifying compliance risks and compressing audit turnaround times by 88%.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-900">
              <div className="text-xl font-bold font-display text-white mb-1">14-Day Audit Turnaround</div>
              <span className="text-[10px] font-mono text-accent-purple uppercase tracking-widest block">R3.8M Legal Operations Spend Saved</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals & Engagement Application Form */}
      <section id="retainer-portal" className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-32 border-t border-slate-900 bg-[#040406]/60 backdrop-blur-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Trust info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-accent-blue block mb-3 font-semibold">
                TRUST & SOVEREIGNTY SIGNALS
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
                Guaranteed Operational Security
              </h2>
              <p className="text-slate-300 font-sans text-sm md:text-base leading-relaxed mb-8">
                The Invariance Group guarantees alignment with South African data governance standards. We operate strictly in compartmentalized systems.
              </p>

              {/* Badges */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 bg-[#08080c] border border-slate-850 p-4 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-accent-blue-glow flex items-center justify-center text-accent-blue shrink-0">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-display font-bold text-sm text-white block">POPIA Compliant Core</span>
                    <span className="text-slate-500 text-xs font-mono">100% compliant data triaging and processing pipelines.</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-[#08080c] border border-slate-850 p-4 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-accent-purple-glow flex items-center justify-center text-accent-purple shrink-0">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-display font-bold text-sm text-white block">SA Data Sovereignty</span>
                    <span className="text-slate-500 text-xs font-mono">Zero offshore customer data leakages. Compliant with local banking regs.</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-[#08080c] border border-slate-850 p-4 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 shrink-0">
                    <Server className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-display font-bold text-sm text-white block">Isolated Compute Environments</span>
                    <span className="text-slate-500 text-xs font-mono">Deploy on client tenant sub-nets with fully air-gapped compute.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Muted Partner Logos */}
            <div className="mt-12 pt-8 border-t border-slate-900">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-4">TECHNOLOGY PARTNERS:</span>
              <div className="flex flex-wrap items-center gap-6 opacity-45">
                <span className="font-display text-xs font-bold text-white tracking-widest">GOOGLE CLOUD</span>
                <span className="font-display text-xs font-bold text-white tracking-widest">VERCEL ENTERPRISE</span>
                <span className="font-display text-xs font-bold text-white tracking-widest">NVIDIA DEEP LEARNING</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-xl p-8 border border-slate-850 relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-purple/5 rounded-full blur-2xl"></div>
              
              <h3 className="font-display text-2xl font-bold text-white mb-2">Executive Qualification Protocol</h3>
              <p className="text-slate-400 text-xs md:text-sm font-sans mb-8">
                Due to strict regulatory governance and resource allocation, The Invariance Group engages exclusively via institutional retainer. Minimum SLA commitments apply.
              </p>

              {formSubmitted ? (
                <div className="bg-emerald-950/40 border border-emerald-800 p-6 rounded-lg text-center py-12">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                  <h4 className="font-display font-bold text-lg text-white mb-2">Credentials Received for Review</h4>
                  <p className="text-slate-300 text-sm max-w-md mx-auto mb-6">
                    A senior client partner from our Johannesburg team will contact your office within 4 business hours to verify institutional credentials and schedule your private briefing.
                  </p>
                  <span className="text-[10px] font-mono text-slate-500 block uppercase">
                    REFERENCE ID: TIG-BRIEFING-{Math.floor(100000 + Math.random() * 900000)}
                  </span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-2">Full Name</label>
                      <input 
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-[#050507] border border-slate-800 rounded p-3 text-sm text-white focus:outline-none focus:border-accent-blue transition-colors font-mono"
                        placeholder="e.g. Adrian van der Merwe"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-2">Institutional Email</label>
                      <input 
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-[#050507] border border-slate-800 rounded p-3 text-sm text-white focus:outline-none focus:border-accent-blue transition-colors font-mono"
                        placeholder="e.g. adrian@corporate.co.za"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-2">Organization</label>
                      <input 
                        type="text"
                        name="org"
                        value={formData.org}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-[#050507] border border-slate-800 rounded p-3 text-sm text-white focus:outline-none focus:border-accent-blue transition-colors font-mono"
                        placeholder="e.g. Apex Holdings Group"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-2">Executive Role</label>
                      <select 
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        className="w-full bg-[#050507] border border-slate-800 rounded p-3 text-sm text-white focus:outline-none focus:border-accent-blue transition-colors font-mono appearance-none"
                      >
                        <option value="CIO">Chief Information Officer (CIO)</option>
                        <option value="COO">Chief Operating Officer (COO)</option>
                        <option value="ManagingPartner">Managing Partner</option>
                        <option value="Director">Technical Director / VP</option>
                        <option value="Other">Other Executive</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-2">Core Operational Friction Area</label>
                      <select 
                        name="frictionArea"
                        value={formData.frictionArea}
                        onChange={handleInputChange}
                        className="w-full bg-[#050507] border border-slate-800 rounded p-3 text-sm text-white focus:outline-none focus:border-accent-blue transition-colors font-mono appearance-none"
                      >
                        <option value="compliance">Compliance Invariance (POPIA/Contract Redlines)</option>
                        <option value="capital">Capital Invariance (Exchange Control/SARB BoP)</option>
                        <option value="logistics">Supply Chain Invariance (Neural Dispatch & Grid Protection)</option>
                        <option value="revenue">Revenue Invariance (Secure Conversation Commerce)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-2">Target Quarterly Budget Commitment</label>
                      <select 
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full bg-[#050507] border border-slate-800 rounded p-3 text-sm text-white focus:outline-none focus:border-accent-blue transition-colors font-mono appearance-none"
                      >
                        <option value="tier1">R350,000 - R750,000 / Quarter (Sponsor Level)</option>
                        <option value="tier2">R750,000+ / Quarter (Enterprise Level)</option>
                      </select>
                    </div>
                  </div>

                  {/* Pre-conditions Toggles */}
                  <div className="space-y-3 pt-2">
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-slate-400">Compliance Pre-conditions</label>
                    <div className="flex items-start gap-3">
                      <input 
                        type="checkbox"
                        id="hasSovereignAuthority"
                        name="hasSovereignAuthority"
                        checked={formData.hasSovereignAuthority}
                        onChange={handleInputChange}
                        className="mt-1 h-4 w-4 rounded border-slate-800 bg-[#050507] text-accent-blue focus:ring-accent-blue"
                      />
                      <label htmlFor="hasSovereignAuthority" className="text-xs text-slate-400 font-sans leading-tight">
                        We possess executive authorization to deploy isolated compute engines within our virtual private cloud (VPC) subnets.
                      </label>
                    </div>
                    <div className="flex items-start gap-3">
                      <input 
                        type="checkbox"
                        id="isSubjectToExCon"
                        name="isSubjectToExCon"
                        checked={formData.isSubjectToExCon}
                        onChange={handleInputChange}
                        className="mt-1 h-4 w-4 rounded border-slate-800 bg-[#050507] text-accent-blue focus:ring-accent-blue"
                      />
                      <label htmlFor="isSubjectToExCon" className="text-xs text-slate-400 font-sans leading-tight">
                        Our operations are subject to South African Reserve Bank (SARB) Exchange Control and/or POPIA compliance requirements.
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-2">Brief Context (Operational Scale / Infrastructure Requirements)</label>
                    <textarea 
                      name="details"
                      value={formData.details}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full bg-[#050507] border border-slate-800 rounded p-3 text-sm text-white focus:outline-none focus:border-accent-blue transition-colors font-mono resize-none"
                      placeholder="Specify current systems architecture limitations and primary business impact..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-accent-blue to-accent-purple text-white font-medium rounded border border-white/10 shadow-[0_4px_20px_rgba(0,136,255,0.15)] hover:shadow-[0_0_30px_rgba(0,136,255,0.3)] transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Validating Credentials...</span>
                    ) : (
                      <>
                        <span>Submit Credentials for Briefing Review</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-[#020203] border-t border-slate-900 text-slate-400 text-xs py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
            
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative flex items-center justify-center w-8 h-8 rounded bg-[#0a0a0c] border border-slate-800">
                  <span className="font-display font-bold text-sm text-white tracking-tighter">Δ</span>
                </div>
                <span className="font-display font-bold tracking-widest text-xs text-white">THE INVARIANCE GROUP</span>
              </div>
              <p className="text-slate-500 font-sans text-sm max-w-sm mb-6 leading-relaxed">
                Elite engineering contractors and AI corporate advisors to South Africa's leading financial, legal, and logistics institutions.
              </p>
              <div className="flex items-center gap-2 font-mono text-[10px] text-slate-500">
                <MapPin className="w-3.5 h-3.5" />
                <span>Gauteng Hub: Sandton (Johannesburg) • Capital Hub: Pretoria</span>
              </div>
            </div>

            <div>
              <span className="block text-[10px] font-mono uppercase tracking-widest text-white mb-4">Engagements</span>
              <ul className="space-y-3 font-sans">
                <li><a href="#proprietary-engines" className="hover:text-white transition-colors">Cognitive Engines</a></li>
                <li><a href="#retainer-portal" className="hover:text-white transition-colors">Retainer Structuring</a></li>
                <li><a href="#retainer-portal" className="hover:text-white transition-colors">SLA Commitments</a></li>
                <li><a href="#retainer-portal" className="hover:text-white transition-colors">Private Compute Audits</a></li>
              </ul>
            </div>

            <div>
              <span className="block text-[10px] font-mono uppercase tracking-widest text-white mb-4">Secure Contact</span>
              <ul className="space-y-3 font-mono text-[11px]">
                <li className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-slate-600" />
                  <span className="hover:text-white cursor-pointer">advisory@invariance.co.za</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-slate-600" />
                  <span>+27 (0)11 984 2000</span>
                </li>
                <li className="flex items-center gap-2 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span>SAST sync active</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Systems leadership and audit signals */}
          <div className="mb-10 p-5 rounded-lg border border-slate-900 bg-[#050508]/40 font-sans text-xs text-slate-500 max-w-4xl">
            <span className="text-white font-mono text-[10px] uppercase tracking-widest block mb-2 font-bold">SYSTEMS LEADERSHIP & SAFETY COMPLIANCE:</span>
            Operated by former systems architects and logistics operations directors with a combined 40+ years in Gauteng's financial and transport corridors. Systems are audited annually by independent CREST-accredited cybersecurity agencies to guarantee air-gapped compute stability.
          </div>

          <div className="pt-8 border-t border-slate-950 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-600 font-mono text-[10px]">
            <div>
              <span>© {new Date().getFullYear()} The Invariance Group (Pty) Ltd. All rights reserved.</span>
            </div>
            <div className="flex gap-6">
              <span className="hover:text-slate-400 cursor-pointer">Privacy & POPIA Matrix</span>
              <span className="hover:text-slate-400 cursor-pointer">System Terms of SLA</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
