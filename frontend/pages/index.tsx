import { useEffect, useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [activeVideo, setActiveVideo] = useState(0);

  useEffect(() => {
    setMounted(true);
    document.documentElement.classList.add('dark');
  }, []);

  if (!mounted) return null;

  return (
    <>
      <Head>
        <title>PGI Relators - To Achieve Precise Work Progress Monitoring</title>
      </Head>

      <main className="min-h-screen bg-stone-100 dark:bg-black text-gray-800 dark:text-white transition-colors duration-300">
        
        {/* HERO SECTION */}
        <section id="home" className="relative pt-24 min-h-screen flex items-center justify-center overflow-hidden bg-stone-200 dark:bg-black transition-colors duration-300">
          <div className="absolute inset-0 z-0 overflow-hidden bg-black">
            <video 
              autoPlay 
              muted 
              playsInline 
              preload="auto" 
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
              src="https://3dbharat.com/video/header-video1.mp4"
              style={{ opacity: activeVideo === 0 ? 1 : 0 }}
              onEnded={() => setActiveVideo(1)}
            />
            <video 
              autoPlay={activeVideo === 1}
              muted 
              playsInline 
              preload="metadata" 
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
              src="https://3dbharat.com/video/header-video2.mp4"
              style={{ opacity: activeVideo === 1 ? 1 : 0 }}
              onEnded={() => setActiveVideo(0)}
            />
            <div className="absolute inset-0 bg-black/30 dark:bg-black/60 z-10"></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 z-10"></div>
          
          <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
            <div>
              <div className="inline-flex items-center gap-5 md:gap-3 px-6 py-2 rounded-2xl bg-gradient-to-r from-amber-500/80 via-orange-500/80 to-red-500/80 border-2 border-white/40 backdrop-blur-md shadow-[0_0_30px_rgba(245,158,11,0.5)] mb-6">
                <span className="text-white text-xl md:text-2xl font-bold tracking-wider uppercase drop-shadow-lg">To Achieve</span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-tight">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-red-500">Precise Work</span>
                <span className="block text-white drop-shadow-lg">Progress Monitoring</span>
              </h1>
            </div>
            
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 md:mb-5 leading-relaxed tracking-wide">
              A unified digital platform for planning, measurement, execution, and periodic monitoring of all construction projects across India.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a href="#explore" className="px-8 py-3 bg-white text-black hover:bg-gray-200 flex justify-center items-center rounded-xl font-bold transition-all">Explore Platform</a>
              <a href="#challenges" className="px-8 py-3 border border-white/50 text-white rounded-xl font-medium hover:bg-white/10 backdrop-blur-sm transition-all duration-300">Learn More</a>
              <button className="relative inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl font-medium overflow-hidden group bg-gradient-to-br from-orange-500 to-orange-700 text-white shadow-[0_4px_20px_rgba(249,115,22,0.35)]">
                <span className="text-xl">⚡</span><span>Explore Modules</span>
              </button>
            </div>
          </div>
        </section>

        {/* OFFICIAL VIDEO SECTION */}
        <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-stone-100 via-stone-50 to-stone-100 dark:from-black dark:via-zinc-950 dark:to-black transition-colors duration-300">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 blur-3xl"></div>
            <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-r from-red-500/20 to-pink-500/20 blur-3xl"></div>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 mb-6">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
                </span>
                <span className="text-sm font-semibold text-amber-400 uppercase tracking-wider">Official Presentation</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-white">Discover </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-red-500">PGI Relators</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Experience India's most advanced infrastructure monitoring platform through our official showcase video
              </p>
            </div>
            
            <div className="relative group max-w-5xl mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/30 via-orange-500/30 to-red-500/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10 bg-black aspect-video flex items-center justify-center">
                 {/* Video Placeholder */}
                 <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md cursor-pointer hover:scale-110 transition-transform">
                   <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-2"></div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* CHALLENGES SECTION */}
        <section id="challenges" className="relative min-h-screen overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
           <div className="max-w-7xl mx-auto w-full">
             <div className="text-center mb-16">
               <span className="inline-block text-xs uppercase tracking-[0.4em] text-red-400 mb-6 font-medium">⚠️ Present Challenges</span>
               <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight">
                 The Problem with <span className="bg-gradient-to-r from-red-500 via-orange-500 to-red-600 bg-clip-text text-transparent">Traditional Monitoring</span>
               </h2>
             </div>
             
             <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
               {['Scattered Information', 'Delayed Decision-Making', 'Limited Visibility', 'Cost Overruns'].map((challenge, i) => (
                 <div key={i} className="group relative p-8 rounded-3xl backdrop-blur-xl border transition-all duration-500 bg-white/5 border-red-500/20 hover:border-red-500/50 hover:bg-white/10 text-center">
                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-red-500/10 to-orange-500/10"></div>
                    <div className="relative z-10">
                      <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-red-500/30 flex items-center justify-center">
                        <span className="text-2xl">⚠️</span>
                      </div>
                      <h3 className="text-xl font-bold mb-4 tracking-wide text-white">{challenge}</h3>
                      <p className="text-sm leading-relaxed text-gray-400">Traditional methods fail to provide the real-time, comprehensive visibility required for modern infrastructure execution.</p>
                    </div>
                 </div>
               ))}
             </div>
           </div>
        </section>

        {/* FLOATING LIVE PREVIEW WIDGET */}
        <div className="fixed bottom-4 right-4 z-50 hidden md:block group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-sky-500 rounded-2xl blur-xl opacity-25 -z-10"></div>
          <div className="relative w-80 lg:w-96 rounded-2xl overflow-hidden bg-black/60 backdrop-blur-xl border border-white/15 shadow-2xl shadow-black/50">
            <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-3 py-2 bg-gradient-to-b from-black/70 via-black/40 to-transparent">
              <span className="text-xs font-medium text-white/90 drop-shadow-lg">Station & Footover Bridge</span>
              <div className="px-2 py-0.5 rounded-md bg-gradient-to-r from-cyan-500 to-sky-500 text-white text-[10px] font-semibold uppercase shadow-md">Railway</div>
            </div>
            
            <div className="relative aspect-[16/10]">
              <video src="https://3dbharat.com/storage/videos/track_section-intercheniging_point_&_cant_angle.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover"></video>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-between px-3 py-2 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-[11px] text-white/80 font-medium drop-shadow-lg">Live Preview</span>
              </div>
            </div>
          </div>
        </div>

      </main>
    </>
  );
}
