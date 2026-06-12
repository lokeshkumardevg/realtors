import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - PGI Realtors</title>
      </Head>
      <main className="min-h-screen bg-stone-100 dark:bg-black text-gray-800 dark:text-white transition-colors duration-300 pt-24 pb-20">
        
        {/* HERO SECTION */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-black">
             <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>
             <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-500/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>
             <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 mb-8">
              <span className="text-sm font-semibold text-amber-400 uppercase tracking-wider">Our Story</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
              <span className="text-white block mb-2">Pioneering 3D</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-red-500">Infrastructure Intelligence</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              At PGI Realtors, we are transforming how India builds. By combining advanced LiDAR, Drone Photogrammetry, and AI-driven cloud analytics, we provide millimeter-precise visibility into mega-construction projects.
            </p>
          </div>
        </section>

        {/* MISSION SECTION */}
        <section className="relative py-20 z-10">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-3xl overflow-hidden bg-black/50 border border-white/10 p-8 flex flex-col justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30 flex items-center justify-center mb-8">
                    <span className="text-3xl text-amber-500">🎯</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Mission</h2>
                  <p className="text-gray-400 text-lg leading-relaxed mb-6">
                    To eliminate the gap between blueprint and reality. We believe that lack of visibility is the root cause of delays and cost overruns in infrastructure.
                  </p>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    By providing a unified, real-time 3D dashboard for all stakeholders, we ensure that every square inch of construction is monitored, measured, and verified against the design model.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors">
                  <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                    <span className="text-amber-500">01.</span> Absolute Precision
                  </h3>
                  <p className="text-gray-400 leading-relaxed">We deliver accuracy down to ±0.001mm using state-of-the-art surveying equipment and proprietary point-cloud merging algorithms.</p>
                </div>
                
                <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors">
                  <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                    <span className="text-orange-500">02.</span> Unified Data
                  </h3>
                  <p className="text-gray-400 leading-relaxed">Breaking down silos by bringing design files, material mappings, and daily execution scans into a single, cloud-based environment.</p>
                </div>

                <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors">
                  <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                    <span className="text-red-500">03.</span> Actionable Insights
                  </h3>
                  <p className="text-gray-400 leading-relaxed">Automated volume calculations (Cut & Fill) and schedule variance reports empower project managers to make data-driven decisions instantly.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
