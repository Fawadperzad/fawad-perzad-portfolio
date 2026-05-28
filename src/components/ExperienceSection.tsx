import { useInView } from '../hooks/useInView';
import type { Experience } from '../data/portfolio';

interface ExperienceSectionProps {
  experiences: Experience[];
}

export default function ExperienceSection({ experiences }: ExperienceSectionProps) {
  const [ref, isInView] = useInView(0.1);

  return (
    <section id="experience" className="py-24">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-4">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            My professional journey and the companies I've had the pleasure to work with.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[7px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-30" />

            {experiences.map((exp, i) => (
              <div
                key={exp.id}
                className={`relative pl-12 pb-12 last:pb-0 transition-all duration-700 ${
                  isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
                style={{ transitionDelay: `${300 + i * 200}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-1 w-[15px] h-[15px]">
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 rounded-full" />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full animate-ping opacity-20" />
                </div>

                {/* Card */}
                <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-7 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/5 group">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-blue-400 font-medium flex items-center gap-2 mt-1">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                        {exp.company}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-700/60 text-slate-300 text-sm rounded-full mt-3 md:mt-0 w-fit">
                      <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-slate-400 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Download Resume CTA */}
        <div className={`mt-14 text-center transition-all duration-700 delay-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <button
            onClick={() => alert('CV download started! (This would download your resume in a real implementation)')}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-slate-800/80 border border-slate-700 rounded-xl font-semibold text-white hover:bg-slate-700 hover:border-slate-600 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Full Resume
          </button>
        </div>
      </div>
    </section>
  );
}
