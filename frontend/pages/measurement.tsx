import Head from 'next/head';
import { Ruler, ArrowUp, ArrowRight, Gauge, Box, Columns, Train, Building, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Measurement() {
  return (
    <>
      <Head>
        <title>Measurements - PGI Relators</title>
      </Head>
      <main className="min-h-screen bg-stone-100 dark:bg-black text-gray-800 dark:text-white transition-colors duration-300">

        {/* HERO SECTION */}
        <section className="relative min-h-[85vh] overflow-hidden pt-20">
          <div className="absolute inset-0 z-0">
            <img alt="High-tech measurement" className="w-full h-full object-cover opacity-30" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop" />
            <div className="absolute inset-0 bg-black/50 dark:bg-black/60"></div>
          </div>

          <div className="absolute inset-0 z-[1]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[conic-gradient(var(--tw-gradient-stops))] from-gray-500/15 via-gray-600/10 via-50% to-gray-500/15 rounded-full blur-3xl opacity-40 animate-[spin_30s_linear_infinite]"></div>
          </div>

          {/* FLOATING ICONS */}
          <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden hidden md:block">
            <div className="absolute left-[15%] top-[20%] -translate-y-4 animate-[bounce_4s_ease-in-out_infinite]">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-700/30 to-gray-800/30 border border-gray-500/20 dark:border-white/15 backdrop-blur-sm flex items-center justify-center shadow-lg">
                <Ruler className="w-6 h-6 text-gray-300 dark:text-gray-200" />
              </div>
            </div>
            <div className="absolute left-[29%] top-[45%] translate-y-2 animate-[bounce_5s_ease-in-out_infinite]">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-700/30 to-gray-800/30 border border-gray-500/20 dark:border-white/15 backdrop-blur-sm flex items-center justify-center shadow-lg">
                <ArrowUp className="w-6 h-6 text-gray-300 dark:text-gray-200" />
              </div>
            </div>
            <div className="absolute left-[57%] top-[10%] translate-y-4 animate-[bounce_6s_ease-in-out_infinite]">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-700/30 to-gray-800/30 border border-gray-500/20 dark:border-white/15 backdrop-blur-sm flex items-center justify-center shadow-lg">
                <ArrowRight className="w-6 h-6 text-gray-300 dark:text-gray-200" />
              </div>
            </div>
            <div className="absolute left-[71%] top-[25%] -translate-y-2 animate-[bounce_5s_ease-in-out_infinite]">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-700/30 to-gray-800/30 border border-gray-500/20 dark:border-white/15 backdrop-blur-sm flex items-center justify-center shadow-lg">
                <Box className="w-6 h-6 text-gray-300 dark:text-gray-200" />
              </div>
            </div>
            <div className="absolute left-[85%] top-[43%] translate-y-2 animate-[bounce_4s_ease-in-out_infinite]">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-700/30 to-gray-800/30 border border-gray-500/20 dark:border-white/15 backdrop-blur-sm flex items-center justify-center shadow-lg">
                <Columns className="w-6 h-6 text-gray-300 dark:text-gray-200" />
              </div>
            </div>
          </div>

          <div className="relative z-10 text-center py-28 px-4">
            <div className="inline-flex items-center gap-3 mb-8 px-5 py-2.5 rounded-full bg-gradient-to-r from-gray-700/20 to-gray-800/20 border border-gray-500/30 backdrop-blur-sm">
              <div className="relative">
                <span className="absolute inset-0 w-3 h-3 rounded-full bg-white/60 blur-sm animate-ping"></span>
                <span className="relative block w-3 h-3 rounded-full bg-white"></span>
              </div>
              <span className="text-sm font-medium text-gray-200 uppercase tracking-widest">Precision Engineering</span>
              <div className="w-px h-4 bg-gray-500 dark:bg-white/30"></div>
              <span className="text-xs font-medium text-gray-400 dark:text-gray-300">±0.001mm Accuracy</span>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              <span className="relative inline-block">
                <span className="relative z-10 text-white drop-shadow-sm">Measurement</span>
                <span className="absolute -bottom-2 left-0 right-0 h-4 bg-gradient-to-r from-gray-400/30 to-gray-500/30 blur-xl"></span>
              </span>
              <br />
              <span className="text-gray-300 drop-shadow-[0_1px_2px_rgba(255,255,255,0.3)] dark:drop-shadow-none">Analytics Hub</span>
            </h2>

            <p className="text-lg md:text-xl text-gray-300 dark:text-gray-200 max-w-2xl mx-auto leading-relaxed mb-10 font-medium">
              Advanced 3D measurement capabilities delivering<span className="text-white font-semibold underline decoration-gray-400/50 underline-offset-4 mx-1">sub-millimeter precision</span>for Railway, Bridge, and Road infrastructure analysis.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6">
              <div className="flex gap-2">
                <span className="px-3 py-1.5 text-xs font-semibold text-gray-300 bg-gray-800/50 rounded-lg border border-gray-600/30 shadow-sm cursor-default">LiDAR</span>
                <span className="px-3 py-1.5 text-xs font-semibold text-gray-300 bg-gray-800/50 rounded-lg border border-gray-600/30 shadow-sm cursor-default">Point Cloud</span>
                <span className="px-3 py-1.5 text-xs font-semibold text-gray-300 bg-gray-800/50 rounded-lg border border-gray-600/30 shadow-sm cursor-default">3D Scanning</span>
              </div>
              <div className="w-px h-6 bg-white/30 hidden md:block"></div>
              <div className="flex items-center gap-2 text-sm text-gray-400 font-medium">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>Updated: Jan 2026</span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 z-20">
            {/* Wave Separator */}
            <svg className="w-full h-32" viewBox="0 0 1200 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#9ca3af" stopOpacity="0.6"></stop>
                  <stop offset="50%" stopColor="#ffffff" stopOpacity="0.8"></stop>
                  <stop offset="100%" stopColor="#9ca3af" stopOpacity="0.6"></stop>
                </linearGradient>
                <linearGradient id="waveFill" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="transparent"></stop>
                  <stop offset="40%" stopColor="#6b7280" stopOpacity="0.1"></stop>
                  <stop offset="100%" className="dark:stop-color-[#000]"></stop>
                </linearGradient>
              </defs>
              <path d="M0,50 Q200,20 400,50 T800,50 T1200,50 L1200,100 L0,100 Z" fill="url(#waveFill)"></path>
              <path d="M0,50 Q200,20 400,50 T800,50 T1200,50" fill="none" stroke="url(#waveGradient)" strokeWidth="3"></path>
            </svg>

            {/* Bottom Category Icons */}
            <div className="absolute bottom-16 left-0 right-0 flex justify-center gap-24 md:gap-40">
              <div className="relative group cursor-pointer hover:-translate-y-2 transition-transform">
                <div className="absolute inset-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 blur-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center shadow-2xl border border-gray-500/30">
                  <Train className="w-7 h-7 text-white" />
                </div>
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-blue-400 to-transparent"></div>
              </div>
              <div className="relative group cursor-pointer hover:-translate-y-2 transition-transform">
                <div className="absolute inset-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-600 to-gray-800 blur-xl opacity-50 group-hover:opacity-80 transition-opacity"></div>
                <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center shadow-2xl border border-gray-500/30">
                  <Building className="w-7 h-7 text-white" />
                </div>
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-gray-400 to-transparent"></div>
              </div>
              <div className="relative group cursor-pointer hover:-translate-y-2 transition-transform">
                <div className="absolute inset-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-600 to-gray-800 blur-xl opacity-50 group-hover:opacity-80 transition-opacity"></div>
                <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center shadow-2xl border border-gray-500/30">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-gray-400 to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTENT SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* Main Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold text-sm transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/30 -translate-y-1">
              <Train className="w-5 h-5" />
              <span>Railway</span>
              <span className="px-2 py-0.5 rounded-lg text-xs bg-white/20">14</span>
            </button>
            <button className="flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold text-sm transition-all duration-300 bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10 hover:bg-gray-200 dark:hover:bg-white/20">
              <Building className="w-5 h-5" />
              <span>Bridge</span>
              <span className="px-2 py-0.5 rounded-lg text-xs bg-black/5 dark:bg-white/10">5</span>
            </button>
            <button className="flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold text-sm transition-all duration-300 bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10 hover:bg-gray-200 dark:hover:bg-white/20">
              <MapPin className="w-5 h-5" />
              <span>Road</span>
              <span className="px-2 py-0.5 rounded-lg text-xs bg-black/5 dark:bg-white/10">4</span>
            </button>
          </div>

          <div>
            {/* Sub Tabs */}
            <div className="flex justify-start mb-8 gap-3">
              <button className="flex items-center gap-2 px-5 py-3 rounded-lg font-medium text-sm transition-all duration-300 bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-md">
                OHE Mask measurement
                <span className="px-1.5 py-0.5 rounded text-xs bg-white/20 dark:bg-black/10">4</span>
              </button>
              <button className="flex items-center gap-2 px-5 py-3 rounded-lg font-medium text-sm transition-all duration-300 text-gray-600 dark:text-gray-400 border dark:bg-white/10 hover:bg-gray-200 border-gray-200 dark:border-white/10 dark:hover:bg-white/20">
                Track
                <span className="px-1.5 py-0.5 rounded text-xs bg-black/5 dark:bg-white/10">3</span>
              </button>
              <button className="flex items-center gap-2 px-5 py-3 rounded-lg font-medium text-sm transition-all duration-300 text-gray-600 dark:text-gray-400 border dark:bg-white/10 hover:bg-gray-200 border-gray-200 dark:border-white/10 dark:hover:bg-white/20">
                Station
                <span className="px-1.5 py-0.5 rounded text-xs bg-black/5 dark:bg-white/10">7</span>
              </button>
            </div>

            {/* Gallery Viewer */}
            <div className="flex flex-col gap-6">
              <div className="relative rounded-3xl overflow-hidden lg:h-[80vh] bg-gray-900 aspect-video group">
                {/* Fallback image if paths are 404 locally */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-purple-900/50 flex flex-col items-center justify-center text-white">
                  <Ruler className="w-24 h-24 text-blue-500 mb-6 opacity-80" />
                  <h2 className="text-3xl font-bold">Interactive 3D Measurement Tool</h2>
                  <p className="text-blue-200 mt-4 max-w-lg text-center">Analyze points, distance, and catenary geometry directly on the processed LiDAR point cloud.</p>
                </div>

                <button className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-gray-900 shadow-lg transition-all hover:scale-110 z-10 opacity-0 group-hover:opacity-100">
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-gray-900 shadow-lg transition-all hover:scale-110 z-10 opacity-0 group-hover:opacity-100">
                  <ChevronRight className="w-6 h-6" />
                </button>

                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex items-center gap-4 text-white">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                    <Ruler className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1">Catenary to Contact</h3>
                    <p className="text-white/70">Distance between catenary and contact wire</p>
                  </div>
                </div>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                <button className="flex-shrink-0 w-48 rounded-xl overflow-hidden border-2 transition-all duration-300 hover:-translate-y-1 border-transparent relative group">
                  <div className="w-full h-24 bg-gray-800 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">OHE Pole</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/90 text-white text-xs font-medium text-center truncate group-hover:text-blue-400">OHE Pole Measurements</div>
                </button>
                <button className="flex-shrink-0 w-48 rounded-xl overflow-hidden border-2 transition-all duration-300 hover:-translate-y-1 border-transparent relative group">
                  <div className="w-full h-24 bg-gray-800 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Catenary to Rail</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/90 text-white text-xs font-medium text-center truncate group-hover:text-blue-400">Catenary to Rail</div>
                </button>
                <button className="flex-shrink-0 w-48 rounded-xl overflow-hidden border-2 transition-all duration-300 hover:-translate-y-1 border-transparent relative group">
                  <div className="w-full h-24 bg-gray-800 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Contact to Rail</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/90 text-white text-xs font-medium text-center truncate group-hover:text-blue-400">Contact to Rail</div>
                </button>
                <button className="flex-shrink-0 w-48 rounded-xl overflow-hidden border-2 transition-all duration-300 hover:-translate-y-1 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.4)] relative group">
                  <div className="w-full h-24 bg-gray-800 flex items-center justify-center">
                    <span className="text-gray-500 text-sm text-blue-400">Active</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-2 bg-black text-white text-xs font-bold text-center truncate text-blue-400">Catenary to Contact</div>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
