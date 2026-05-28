import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/40 via-purple-950/30 to-slate-900" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/8 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/8 rounded-full blur-[100px] animate-float animation-delay-500" />
      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-pink-500/5 rounded-full blur-[80px] animate-float animation-delay-300" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Avatar */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-36 h-36 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1 shadow-2xl shadow-blue-500/20 animate-pulse-glow">
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
              <span className="text-5xl font-bold bg-gradient-to-br from-blue-400 to-purple-400 bg-clip-text text-transparent">
                FD
              </span>
            </div>
          </div>
        </div>

        {/* Badge */}
        <div className={`mb-6 transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Available for new opportunities
          </span>
        </div>

        <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-6 transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Fawad Developer
          </span>
        </h1>

        <p className={`text-xl md:text-2xl text-slate-300 mb-3 font-light transition-all duration-700 delay-400 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Full-Stack Developer&nbsp;
          <span className="text-slate-500">|</span>&nbsp;
          <span className="text-blue-400">Java Spring Boot</span>&nbsp;&&nbsp;
          <span className="text-purple-400">Angular/React</span> Expert
        </p>

        <p className={`text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-700 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Building scalable enterprise applications with modern technologies.
          Passionate about clean code, microservices architecture, and creating exceptional user experiences.
        </p>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-600 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <button
            onClick={() => scrollToSection('projects')}
            className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold text-white hover:from-blue-500 hover:to-purple-500 transform hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
          >
            <span className="flex items-center justify-center gap-2">
              View My Work
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
          <button
            onClick={() => alert('CV download started! (This would download your resume in a real implementation)')}
            className="px-8 py-4 bg-slate-800/80 border border-slate-700 rounded-xl font-semibold text-white hover:bg-slate-700 hover:border-slate-600 transform hover:scale-105 hover:-translate-y-0.5 transition-all duration-300"
          >
            📄 Download CV
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-slate-800/80 border border-slate-700 rounded-xl font-semibold text-white hover:bg-slate-700 hover:border-slate-600 transform hover:scale-105 hover:-translate-y-0.5 transition-all duration-300"
          >
            ✉️ Contact Me
          </button>
        </div>

        {/* Social Links */}
        <div className={`mt-12 flex justify-center space-x-4 transition-all duration-700 delay-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {[
            {
              label: 'GitHub',
              url: 'https://github.com',
              icon: (
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              ),
            },
            {
              label: 'LinkedIn',
              url: 'https://linkedin.com',
              icon: (
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              ),
            },
          ].map((social) => (
            <button
              key={social.label}
              onClick={() => window.open(social.url, '_blank')}
              className="p-4 bg-slate-800/60 border border-slate-700/50 rounded-xl hover:bg-slate-700 hover:border-slate-600 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
              aria-label={social.label}
            >
              <svg className="w-5 h-5 text-slate-300 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                {social.icon}
              </svg>
            </button>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={() => scrollToSection('about')}
          className="flex flex-col items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors group"
          aria-label="Scroll down"
        >
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <div className="w-6 h-10 border-2 border-slate-600 group-hover:border-slate-400 rounded-full flex justify-center transition-colors">
            <div className="w-1.5 h-3 bg-slate-500 group-hover:bg-slate-300 rounded-full mt-2 animate-bounce transition-colors" />
          </div>
        </button>
      </div>
    </section>
  );
}
