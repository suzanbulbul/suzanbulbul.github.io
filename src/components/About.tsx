import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const About = () => {
  const { t } = useTranslation()
  
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">{t('about.title')}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            {t('about.description')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p dangerouslySetInnerHTML={{ __html: t('about.intro') }} />
              <p dangerouslySetInnerHTML={{ __html: t('about.experience') }} />
              <p dangerouslySetInnerHTML={{ __html: t('about.skills') }} />
              <p dangerouslySetInnerHTML={{ __html: t('about.passion') }} />
              <p dangerouslySetInnerHTML={{ __html: t('about.goal') }} />
            </div>
          </motion.div>

          {/* Info Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20">
              <h4 className="text-xl font-bold text-white mb-3">🎓 {t('about.info.education.title')}</h4>
              <p className="text-gray-300 text-sm">{t('about.info.education.university')}</p>
              <p className="text-gray-300 text-sm">{t('about.info.education.degree')}</p>
              <p className="text-gray-400 text-xs">{t('about.info.education.years')}</p>
            </div>
            
            <div className="bg-gradient-to-r from-green-500/10 to-teal-500/10 backdrop-blur-sm rounded-xl p-6 border border-green-500/20">
              <h4 className="text-xl font-bold text-white mb-3">🌍 {t('about.info.work.title')}</h4>
              <p className="text-gray-300 text-sm">{t('about.info.work.remote')}</p>
              <p className="text-gray-300 text-sm">{t('about.info.work.flexible')}</p>
            </div>
            
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <h4 className="text-xl font-bold text-white mb-3">⚡ {t('about.info.focus.title')}</h4>
              <p className="text-gray-300 text-sm">{t('about.info.focus.main')}</p>
              <p className="text-gray-400 text-xs">{t('about.info.focus.tech')}</p>
            </div>
            
            <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-sm rounded-xl p-6 border border-orange-500/20">
              <h4 className="text-xl font-bold text-white mb-3">📱 {t('about.info.contact.title')}</h4>
              <p className="text-gray-300 text-sm">{t('about.info.contact.email')}</p>
              <a href="https://linkedin.com/in/suzanbulbul" target="_blank" rel="noopener noreferrer" className="text-gray-300 text-sm hover:text-blue-400 transition-colors">
                {t('about.info.contact.linkedin')}
              </a>
              <p className="text-gray-400 text-xs">{t('about.info.contact.status')}</p>
            </div>
          </motion.div>
        </div>

        {/* Work Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16"
        >

          <h3 className="text-2xl font-bold text-center mb-8 text-white">{t('about.approach.title')}</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: t('about.approach.learning.title'),
                description: t('about.approach.learning.description'),
                gradient: 'from-blue-500 to-cyan-500',
              },
              {
                title: t('about.approach.code.title'),
                description: t('about.approach.code.description'),
                gradient: 'from-purple-500 to-pink-500',
              },
              {
                title: t('about.approach.team.title'),
                description: t('about.approach.team.description'),
                gradient: 'from-green-500 to-blue-500',
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${value.gradient} rounded-xl mb-4 flex items-center justify-center`}>
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">{value.title}</h4>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 