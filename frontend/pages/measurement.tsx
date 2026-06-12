import Head from 'next/head';
import { useState } from 'react';
import { Ruler, ArrowUp, ArrowRight, Gauge, Box, Columns, Train, Building, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

const MEASUREMENT_DATA: any = {
  Railway: {
    icon: Train,
    count: 14,
    subTabs: [
      { name: 'OHE Mask measurement', count: 4 },
      { name: 'Track', count: 3 },
      { name: 'Station', count: 7 }
    ],
    items: [
      { id: 'ohe-pole', tab: 'OHE Mask measurement', title: 'OHE Pole Measurements', desc: 'Distance between catenary and contact wire', url: '/measurenment/Railway/Ohe pole Measurements.png' },
      { id: 'cat-rail', tab: 'OHE Mask measurement', title: 'Catenary to Rail', desc: 'Distance between catenary and contact wire', url: '/measurenment/Railway/Catenary to rail.png' },
      { id: 'cont-rail', tab: 'OHE Mask measurement', title: 'Contact to Rail', desc: 'Distance between catenary and contact wire', url: '/measurenment/Railway/Contact to rail.png' },
      { id: 'cat-cont', tab: 'OHE Mask measurement', title: 'Catenary to Contact', desc: 'Distance between catenary and contact wire', url: '/measurenment/Railway/Catenary_to_contact.png' }
    ]
  },
  Bridge: {
    icon: Building,
    count: 5,
    subTabs: [
      { name: 'Pillars', count: 2 },
      { name: 'Deck', count: 3 }
    ],
    items: [
      { id: 'bridge-1', tab: 'Pillars', title: 'Pillar Verticality', desc: 'Pillar alignment analysis', url: '/measurenment/Bridge/placeholder.png' }
    ]
  },
  Road: {
    icon: MapPin,
    count: 4,
    subTabs: [
      { name: 'Surface', count: 2 },
      { name: 'Drainage', count: 2 }
    ],
    items: [
      { id: 'road-1', tab: 'Surface', title: 'Asphalt Volume', desc: 'Surface volume calculation', url: '/measurenment/Road/placeholder.png' }
    ]
  }
};

export default function Measurement() {
  const [activeCategory, setActiveCategory] = useState('Railway');
  const [activeSubTab, setActiveSubTab] = useState('OHE Mask measurement');
  const [activeImageId, setActiveImageId] = useState('cat-cont'); // Default from HTML

  const currentCategoryData = MEASUREMENT_DATA[activeCategory];
  const filteredItems = currentCategoryData.items.filter((item: any) => item.tab === activeSubTab);
  const activeImage = filteredItems.find((img: any) => img.id === activeImageId) || filteredItems[0];

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    const firstTab = MEASUREMENT_DATA[cat].subTabs[0].name;
    setActiveSubTab(firstTab);
    const firstImg = MEASUREMENT_DATA[cat].items.filter((item: any) => item.tab === firstTab)[0];
    if (firstImg) setActiveImageId(firstImg.id);
  };

  const handleSubTabChange = (tab: string) => {
    setActiveSubTab(tab);
    const firstImg = currentCategoryData.items.filter((item: any) => item.tab === tab)[0];
    if (firstImg) setActiveImageId(firstImg.id);
  };

  const handlePrevImage = () => {
    if(!filteredItems.length) return;
    const idx = filteredItems.findIndex((img: any) => img.id === activeImageId);
    if (idx > 0) setActiveImageId(filteredItems[idx - 1].id);
  };

  const handleNextImage = () => {
    if(!filteredItems.length) return;
    const idx = filteredItems.findIndex((img: any) => img.id === activeImageId);
    if (idx < filteredItems.length - 1) setActiveImageId(filteredItems[idx + 1].id);
  };

  return (
    <>
      <Head>
        <title>Measurements - PGI Realtors</title>
      </Head>
      <main className="min-h-screen bg-stone-100 dark:bg-black text-gray-800 dark:text-white transition-colors duration-300">
        
        {/* HERO SECTION */}
        <section className="relative min-h-[85vh] overflow-hidden pt-20">
          <div className="absolute inset-0 z-0">
            <img alt="" className="w-full h-full object-cover" src="https://www.shutterstock.com/image-photo/hightech-environment-featuring-hand-interacting-600nw-2591732581.jpg" />
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
            <div className="absolute left-[43%] top-[23%] -translate-y-3 animate-[bounce_6s_ease-in-out_infinite]">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-700/30 to-gray-800/30 border border-gray-500/20 dark:border-white/15 backdrop-blur-sm flex items-center justify-center shadow-lg">
                <ArrowRight className="w-6 h-6 text-gray-300 dark:text-gray-200" />
              </div>
            </div>
            <div className="absolute left-[57%] top-[10%] translate-y-4 animate-[bounce_6s_ease-in-out_infinite]">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-700/30 to-gray-800/30 border border-gray-500/20 dark:border-white/15 backdrop-blur-sm flex items-center justify-center shadow-lg">
                <Gauge className="w-6 h-6 text-gray-300 dark:text-gray-200" />
              </div>
            </div>
            <div className="absolute left-[71%] top-[13%] -translate-y-2 animate-[bounce_5s_ease-in-out_infinite]">
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
              <br/>
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
            {/* Exactly Matching Wave Separator from HTML */}
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
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"></feGaussianBlur>
                  <feMerge>
                    <feMergeNode in="coloredBlur"></feMergeNode>
                    <feMergeNode in="SourceGraphic"></feMergeNode>
                  </feMerge>
                </filter>
              </defs>
              <path d="M0,50 Q200,20 400,50 T800,50 T1200,50 L1200,100 L0,100 Z" fill="url(#waveFill)"></path>
              <path d="M0,50 Q200,20 400,50 T800,50 T1200,50" fill="none" stroke="url(#waveGradient)" strokeWidth="3" filter="url(#glow)"></path>
              {[0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200].map(x => (
                x % 200 === 0 ? (
                  <g key={x}>
                    <line x1={x} y1="50" x2={x} y2="65" stroke="#9ca3af" strokeWidth="2" opacity="0.7"></line>
                    <circle cx={x} cy="50" r="4" fill="#ffffff" filter="url(#glow)"></circle>
                  </g>
                ) : (
                  <g key={x}>
                    <line x1={x} y1="50" x2={x} y2="58" stroke="#9ca3af" strokeWidth="1" opacity="0.7"></line>
                  </g>
                )
              ))}
            </svg>

            <div className="absolute bottom-16 left-0 right-0 flex justify-center gap-24 md:gap-40">
              <div className="relative group cursor-pointer hover:-translate-y-2 transition-transform">
                <div className="absolute inset-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-600 to-gray-800 blur-xl opacity-50 group-hover:opacity-80 transition-opacity"></div>
                <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center shadow-2xl shadow-gray-700/50 border border-gray-500/30">
                  <Train className="w-7 h-7 text-white" />
                </div>
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-gray-400 to-transparent"></div>
              </div>
              <div className="relative group cursor-pointer hover:-translate-y-2 transition-transform">
                <div className="absolute inset-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-600 to-gray-800 blur-xl opacity-50 group-hover:opacity-80 transition-opacity"></div>
                <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center shadow-2xl shadow-gray-700/50 border border-gray-500/30">
                  <Building className="w-7 h-7 text-white" />
                </div>
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-gray-400 to-transparent"></div>
              </div>
              <div className="relative group cursor-pointer hover:-translate-y-2 transition-transform">
                <div className="absolute inset-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-600 to-gray-800 blur-xl opacity-50 group-hover:opacity-80 transition-opacity"></div>
                <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center shadow-2xl shadow-gray-700/50 border border-gray-500/30">
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
            {Object.keys(MEASUREMENT_DATA).map((cat) => {
              const isActive = activeCategory === cat;
              const Icon = MEASUREMENT_DATA[cat].icon;
              return (
                <button 
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold text-sm transition-all duration-300 cursor-pointer hover:-translate-y-0.5 ${
                    isActive 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/30 -translate-y-1' 
                      : 'bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10 hover:bg-gray-200 dark:hover:bg-white/20'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{cat}</span>
                  <span className={`px-2 py-0.5 rounded-lg text-xs ${isActive ? 'bg-white/20' : 'bg-black/5 dark:bg-white/10'}`}>
                    {MEASUREMENT_DATA[cat].count}
                  </span>
                </button>
              )
            })}
          </div>

          <div>
            {/* Sub Tabs */}
            <div className="flex justify-start mb-8 gap-3">
              {currentCategoryData.subTabs.map((tabObj: any) => {
                const isActive = activeSubTab === tabObj.name;
                return (
                  <button 
                    key={tabObj.name}
                    onClick={() => handleSubTabChange(tabObj.name)}
                    className={`flex items-center gap-2 px-5 py-3 font-medium text-sm transition-all duration-300 cursor-pointer rounded-lg hover:-translate-y-0.5 ${
                      isActive 
                        ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-md' 
                        : 'text-gray-600 dark:text-gray-400 border dark:bg-white/10 hover:bg-gray-200 border-gray-200 dark:border-white/10 dark:hover:bg-white/20'
                    }`}
                  >
                    {tabObj.name}
                    <span className={`px-1.5 py-0.5 rounded text-xs ${isActive ? 'bg-white/20 dark:bg-black/10' : 'bg-black/5 dark:bg-white/10'}`}>
                      {tabObj.count}
                    </span>
                  </button>
                )
              })}
            </div>

            {/* Gallery Viewer Exactly as in HTML */}
            {filteredItems.length > 0 ? (
              <div className="flex flex-col gap-6">
                <div className="relative rounded-3xl overflow-hidden lg:h-[80vh] bg-black aspect-video group">
                  <img 
                    alt={activeImage?.title} 
                    className="w-full h-full object-cover cursor-pointer" 
                    src={activeImage?.url} 
                  />
                  
                  <button onClick={handlePrevImage} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-gray-900 shadow-lg transition-all hover:scale-110 z-10 opacity-0 group-hover:opacity-100">
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button onClick={handleNextImage} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-gray-900 shadow-lg transition-all hover:scale-110 z-10 opacity-0 group-hover:opacity-100">
                    <ChevronRight className="w-6 h-6" />
                  </button>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-center gap-4 text-white">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                      <Ruler className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{activeImage?.title}</h3>
                      <p className="text-white/70">{activeImage?.desc}</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                  {filteredItems.map((item: any) => {
                    const isActive = activeImageId === item.id;
                    return (
                      <button 
                        key={item.id}
                        onClick={() => setActiveImageId(item.id)}
                        className={`flex-shrink-0 w-36 rounded-xl overflow-hidden border-2 transition-all duration-300 hover:-translate-y-1 ${
                          isActive ? 'border-blue-500 shadow-lg shadow-blue-500/40' : 'border-transparent'
                        }`}
                      >
                        <img alt={item.title} className="w-full h-20 object-cover" src={item.url} />
                        <div className="p-2 bg-black/80 text-white text-xs font-medium text-center truncate">{item.title}</div>
                      </button>
                    )
                  })}
                </div>
              </div>
            ) : (
              <div className="h-64 flex items-center justify-center text-gray-500 border border-dashed border-gray-300 dark:border-gray-700 rounded-3xl">
                <p>No measurement data available for {activeSubTab}</p>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
