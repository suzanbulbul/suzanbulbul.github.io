import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Calendar, MapPin, Briefcase } from 'lucide-react'

const Experience = () => {
  const { t } = useTranslation()

  const experiences = [
    {
      company: t('experience.experiences.efilli.company'),
      position: t('experience.experiences.efilli.position'),
      period: t('experience.experiences.efilli.period'),
      location: t('experience.experiences.efilli.location'),
      description: t('experience.experiences.efilli.description', { returnObjects: true }) as string[],
      tech: ['Vue.js', 'React.js', 'TypeScript', 'Tailwind', 'Node.js', 'Express.js', 'MongoDB', 'Cloudflare Workers', 'Docker', 'GitHub Actions'],
      link: 'https://efilli.com/'
    },
    {
      company: t('experience.experiences.mitsubishi.company'),
      position: t('experience.experiences.mitsubishi.position'),
      period: t('experience.experiences.mitsubishi.period'),
      location: t('experience.experiences.mitsubishi.location'),
      description: t('experience.experiences.mitsubishi.description', { returnObjects: true }) as string[],
      tech: ['React.js', 'TypeScript', 'Context API', 'Tailwind', 'Storybook', 'Bitbucket'],
      link: 'https://www.anymile.io/'
    },
    {
      company: t('experience.experiences.digitopia.company'),
      position: t('experience.experiences.digitopia.position'),
      period: t('experience.experiences.digitopia.period'),
      location: t('experience.experiences.digitopia.location'),
      description: t('experience.experiences.digitopia.description', { returnObjects: true }) as string[],
      tech: ['React.js', 'Next.js', 'Redux', 'Custom Components', 'D3.js', 'Mailing', 'GitHub'],
      link: 'https://digitopia.co/'
    },
    {
      company: t('experience.experiences.phanka.company'),
      position: t('experience.experiences.phanka.position'),
      period: t('experience.experiences.phanka.period'),
      location: t('experience.experiences.phanka.location'),
      description: t('experience.experiences.phanka.description', { returnObjects: true }) as string[],
      tech: ['Vue.js', 'Nuxt.js', 'Bootstrap', 'BootstrapVue', 'Strapi', 'SEO', 'GitLab'],
      link: 'https://wofdex.com/'
    },
    {
      company: t('experience.experiences.huawei.company'),
      position: t('experience.experiences.huawei.position'),
      period: t('experience.experiences.huawei.period'),
      location: t('experience.experiences.huawei.location'),
      description: t('experience.experiences.huawei.description', { returnObjects: true }) as string[],
      tech: ['Vue.js', 'MongoDB', 'JavaScript', 'REST API', 'Authentication'],
      link: '#'
    }
  ]

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">{t('experience.title')}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            {t('experience.description')}
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-500 opacity-30"></div>
              )}
              
              {/* Experience Card */}
              <div className="flex flex-col md:flex-row gap-6">
                {/* Timeline Dot */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Briefcase size={20} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{exp.position}</h3>
                      <h4 className="text-lg text-blue-400 font-semibold mb-2">
                        {exp.link !== '#' ? (
                          <a href={exp.link} target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">
                            {exp.company}
                          </a>
                        ) : (
                          exp.company
                        )}
                      </h4>
                    </div>
                    <div className="flex flex-col lg:items-end">
                      <div className="flex items-center text-gray-400 text-sm mb-1">
                        <Calendar size={16} className="mr-2" />
                        {exp.period}
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <MapPin size={16} className="mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-300 flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-slate-700 text-gray-300 rounded-full text-sm hover:bg-slate-600 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Summary */}
                {/*

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Temel Teknoloji Yetkinlikleri</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Frontend Frameworks',
                items: ['React.js & Next.js', 'Vue.js & Nuxt.js', 'TypeScript', 'JavaScript'],
                color: 'from-blue-500 to-cyan-500'
              },
              {
                title: 'Backend & Database',
                items: ['Node.js', 'Express.js', 'MongoDB', 'REST API'],
                color: 'from-green-500 to-teal-500'
              },
              {
                title: 'Styling & UI',
                items: ['Tailwind CSS', 'Bootstrap', 'SCSS', 'Responsive Design'],
                color: 'from-purple-500 to-pink-500'
              },
              {
                title: 'DevOps & Tools',
                items: ['Git', 'Docker', 'CI/CD', 'Cloudflare Workers'],
                color: 'from-orange-500 to-red-500'
              }
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl mb-4 mx-auto`}></div>
                <h4 className="text-white font-semibold mb-3">{category.title}</h4>
                <div className="space-y-1">
                  {category.items.map((item, i) => (
                    <div key={i} className="text-gray-400 text-sm">{item}</div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        */}
      </div>
    </section>
  )
}

export default Experience 