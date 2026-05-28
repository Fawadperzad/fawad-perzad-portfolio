import { useInView } from '../hooks/useInView';

export default function AboutSection() {
  const [ref, isInView] = useInView(0.1);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    { value: '3+', label: 'Years Experience', color: 'text-blue-400' },
    { value: '0+', label: 'Projects Completed', color: 'text-purple-400' },
    { value: '0+', label: 'Happy Clients', color: 'text-pink-400' },
  ];

  const expertiseAreas = [
    { label: 'Backend Development', level: 80, color: 'from-blue-500 to-blue-400', textColor: 'text-blue-400' },
    { label: 'Frontend Development', level: 75, color: 'from-purple-500 to-purple-400', textColor: 'text-purple-400' },
    { label: 'Database Design', level: 75, color: 'from-pink-500 to-pink-400', textColor: 'text-pink-400' },
    { label: 'Cloud & DevOps', level: 50, color: 'from-emerald-500 to-emerald-400', textColor: 'text-emerald-400' },
  ];

  return (
    <section id="about" className="py-24 bg-slate-800/30">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Get To Know Me
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Background, experience, and what drives me as a developer.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Bio */}
          <div className={`space-y-6 transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm a passionate Full-Stack Developer with over 5 years of experience building
              enterprise-grade applications. My expertise lies in creating robust backend systems
              with <span className="text-blue-400 font-semibold">Java Spring Boot</span> and
              dynamic, responsive frontends with <span className="text-purple-400 font-semibold">Angular/React</span>.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              I specialize in microservices architecture, RESTful API design, and cloud-native
              applications. I'm committed to writing clean, maintainable code and following
              best practices in software development.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              When I'm not coding, you can find me contributing to open-source projects,
              writing technical blogs, or exploring the latest trends in software development.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`text-center p-5 bg-slate-800/80 rounded-2xl border border-slate-700/50 hover:border-slate-600 transition-all duration-500 hover:-translate-y-1 ${
                    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${400 + i * 100}ms` }}
                >
                  <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
                  <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <button
              onClick={() => scrollToSection('contact')}
              className="w-full mt-6 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold text-white hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-blue-500/20"
            >
              Let's Work Together →
            </button>
          </div>

          {/* Right - Skills Overview */}
          <div className={`relative transition-all duration-700 delay-400 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl blur-2xl" />
            <div className="relative bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-xl font-semibold mb-8 text-white flex items-center gap-3">
                <span className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                  📊
                </span>
                Technical Expertise
              </h3>
              <div className="space-y-6">
                {expertiseAreas.map((area, i) => (
                  <div
                    key={area.label}
                    className={`transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    style={{ transitionDelay: `${600 + i * 100}ms` }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-300 font-medium">{area.label}</span>
                      <span className={`${area.textColor} font-semibold`}>{area.level}%</span>
                    </div>
                    <div className="h-2.5 bg-slate-700/60 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${area.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: isInView ? `${area.level}%` : '0%', transitionDelay: `${800 + i * 100}ms` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Tech Icons row */}
              <div className="mt-8 pt-6 border-t border-slate-700/50">
                <p className="text-sm text-slate-500 mb-3">Core Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {['Java', 'Spring Boot', 'Angular', 'TypeScript', 'Docker', 'PostgreSQL'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-slate-700/50 text-slate-300 text-xs font-medium rounded-lg border border-slate-600/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
