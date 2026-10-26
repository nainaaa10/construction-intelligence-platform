import React from 'react';
import { ShieldCheck, Star, FileText, Eye, Zap } from 'lucide-react';

export default function Navbar({ onLoadPreset, onOpenReport, onRunAudit, isAuditing }) {
  return (
    <header className="border-b border-[#1c2b44] bg-[#080c14]/95 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Left: Brand & Gemini Badge */}
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-lg bg-[#06b6d4]/15 border border-[#06b6d4]/40 flex items-center justify-center">
            <Zap className="w-5 h-5 text-[#22d3ee]" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-[13px] tracking-wide text-white uppercase">
                SITEPULSE AI • CONSTRUCTION INTELLIGENCE
              </span>
              <span className="inline-flex items-center space-x-1.5 px-2 py-0.5 rounded-full text-[10px] font-medium bg-[#06b6d4]/10 text-[#38bdf8] border border-[#06b6d4]/30">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22d3ee] animate-pulse"></span>
                <span>Powered by Gemini • Lead: Naina Jaisinghani</span>
              </span>
            </div>
            <p className="text-[11px] text-[#8b9bb4]">
              Multimodal Safety Vision & OSHA 1926 Compliance Auditor • Structural Forensics Suite
            </p>
          </div>
        </div>

        {/* Right: Quick Action Controls */}
        <div className="flex items-center space-x-2.5">
          <button
            onClick={onLoadPreset}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-md bg-[#0f172a] hover:bg-[#1e293b] text-zinc-300 border border-[#1e2b44] text-xs font-medium transition cursor-pointer shadow-sm"
          >
            <Star className="w-3.5 h-3.5 text-[#38bdf8] fill-[#38bdf8]" />
            <span>Load Preset Sample</span>
          </button>

          <button
            onClick={onOpenReport}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-md bg-[#0f172a] hover:bg-[#1e293b] text-zinc-300 border border-[#1e2b44] text-xs font-medium transition cursor-pointer shadow-sm"
          >
            <FileText className="w-3.5 h-3.5 text-zinc-400" />
            <span>Export Audit Report (PDF/JSON)</span>
          </button>

          <button
            onClick={onRunAudit}
            disabled={isAuditing}
            className="flex items-center space-x-1.5 px-4 py-1.5 rounded-md bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-xs font-semibold shadow transition cursor-pointer disabled:opacity-50"
          >
            <Eye className="w-3.5 h-3.5 text-white" />
            <span>{isAuditing ? 'Auditing...' : 'Run Safety Audit'}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
          >
            <Eye className="w-3.5 h-3.5 text-black" />
            <span>{isAuditing ? 'Auditing...' : 'Run Safety Audit'}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
