import { useInView } from '../hooks/useInView';
import type { Skill } from '../data/portfolio';

interface SkillsSectionProps {
  skills: Skill[];
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  const [ref, isInView] = useInView(0.1);

  const categories = [
    {
      key: 'backend' as const,
      title: 'Backend',
      icon: '⚙️',
      gradient: 'from-blue-500 to-blue-400',
      textColor: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'hover:border-blue-500/30',
    },
    {
      key: 'frontend' as const,
      title: 'Frontend',
      icon: '🖥️',
      gradient: 'from-purple-500 to-purple-400',
      textColor: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'hover:border-purple-500/30',
    },
    {
      key: 'tools' as const,
      title: 'Tools & Infrastructure',
      icon: '🛠️',
      gradient: 'from-emerald-500 to-emerald-400',
      textColor: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'hover:border-emerald-500/30',
    },
  ];

  return (
    <section id="skills" className="py-24">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-4">
            Skills & Technologies
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              My Tech Stack
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A comprehensive overview of my technical skills and proficiency levels.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, catIdx) => (
            <div
              key={cat.key}
              className={`group bg-slate-800/40 backdrop-blur-sm rounded-2xl p-7 border border-slate-700/50 ${cat.borderColor} transition-all duration-500 hover:-translate-y-1 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${200 + catIdx * 150}ms` }}
            >
              {/* Category Header */}
              <div className="flex items-center mb-7">
                <div className={`w-12 h-12 ${cat.bgColor} rounded-xl flex items-center justify-center mr-4 text-xl`}>
                  {cat.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{cat.title}</h3>
              </div>

              {/* Skill Bars */}
              <div className="space-y-5">
                {skills
                  .filter((s) => s.category === cat.key)
                  .map((skill, i) => (
                    <div
                      key={skill.name}
                      className={`transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                      style={{ transitionDelay: `${400 + catIdx * 150 + i * 80}ms` }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-300 text-sm font-medium">{skill.name}</span>
                        <span className={`${cat.textColor} text-sm font-semibold`}>{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-slate-700/60 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${cat.gradient} rounded-full transition-all duration-1000 ease-out`}
                          style={{
                            width: isInView ? `${skill.level}%` : '0%',
                            transitionDelay: `${600 + catIdx * 150 + i * 80}ms`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`mt-14 text-center transition-all duration-700 delay-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-slate-800/80 border border-slate-700 rounded-xl font-semibold text-white hover:bg-slate-700 hover:border-slate-600 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            See My Projects
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
