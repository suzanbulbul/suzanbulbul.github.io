import { motion } from 'framer-motion'

const About = () => {
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
            <span className="gradient-text">Hakkımda</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              Merhaba! Ben Suzan Bülbül 👋
            </h3>
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                <strong className="text-white">Frontend ağırlıklı projelerde</strong>, modern framework'lerle 
                <strong className="text-white"> performanslı</strong>, <strong className="text-white">sürdürülebilir</strong> ve 
                <strong className="text-white"> yeniden kullanılabilir</strong> arayüzler geliştiriyorum. 
                <strong className="text-white">Vue.js/Nuxt.js</strong>, <strong className="text-white">React.js/Next.js</strong> ile 
                component-based yapılar kuruyor, responsive ve kullanıcı dostu arayüzler geliştiriyorum.
              </p>
              <p>
                <strong className="text-white">State management</strong>, <strong className="text-white">form handling</strong>, 
                <strong className="text-white">i18n</strong>, <strong className="text-white">authentication/authorization</strong>, 
                <strong className="text-white">content management</strong>, <strong className="text-white">SEO-friendly</strong> sayfa yapıları ve 
                <strong className="text-white">reusable component</strong> sistemleri üzerine deneyim sahibiyim.
              </p>
              <p>
                Tasarımdan deploy sürecine kadar tüm aşamalarda aktif rol alıyor, gerektiğinde sıfırdan sistem kuruyorum. 
                <strong className="text-white">Design system</strong> oluşturma, <strong className="text-white">CI/CD</strong> süreçleri, 
                <strong className="text-white">REST API</strong> entegrasyonları, <strong className="text-white">serverless</strong> mimari ve 
                <strong className="text-white">testable UI</strong> geliştirme gibi konulara odaklanıyorum.
              </p>
              <p>
                Kod kalitesine önem veriyor, <strong className="text-white">scalable</strong> ve 
                <strong className="text-white">maintainable</strong> yapılar kurmaya özen gösteriyorum.
              </p>
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
              <h4 className="text-xl font-bold text-white mb-3">🎓 Eğitim</h4>
              <p className="text-gray-300 text-sm">İnönü Üniversitesi</p>
              <p className="text-gray-300 text-sm">Bilgisayar Mühendisliği</p>
              <p className="text-gray-400 text-xs">2017 - 2021 | GPA: 3.19</p>
            </div>
            
            <div className="bg-gradient-to-r from-green-500/10 to-teal-500/10 backdrop-blur-sm rounded-xl p-6 border border-green-500/20">
              <h4 className="text-xl font-bold text-white mb-3">🌍 Çalışma</h4>
              <p className="text-gray-300 text-sm">Full Remote</p>
              <p className="text-gray-300 text-sm">Esnek Saatler</p>
            </div>
            
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <h4 className="text-xl font-bold text-white mb-3">⚡ Odak</h4>
              <p className="text-gray-300 text-sm">Frontend Development</p>
              <p className="text-gray-400 text-xs">React, Vue, TypeScript</p>
            </div>
            
            <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-sm rounded-xl p-6 border border-orange-500/20">
              <h4 className="text-xl font-bold text-white mb-3">📱 İletişim</h4>
              <p className="text-gray-300 text-sm">suzanbulbl@gmail.com</p>
              <a href="https://linkedin.com/in/suzanbulbul" target="_blank" rel="noopener noreferrer" className="text-gray-300 text-sm hover:text-blue-400 transition-colors">
                linkedin.com/in/suzanbulbul
              </a>
              <p className="text-gray-400 text-xs">İletişime açık</p>
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

          <h3 className="text-2xl font-bold text-center mb-8 text-white">Çalışma Yaklaşımım</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Sürekli Öğrenme',
                description: 'Teknolojinin hızla değiştiği bu alanda kendimi güncel tutuyorum. Yeni frameworkler ve araçları öğrenmeyi seviyorum.',
                gradient: 'from-blue-500 to-cyan-500',
              },
              {
                title: 'Temiz Kod',
                description: 'Okunabilir, sürdürülebilir ve test edilebilir kod yazmaya özen gösteriyorum. Code review süreçlerine katılırım.',
                gradient: 'from-purple-500 to-pink-500',
              },
              {
                title: 'Ekip Çalışması',
                description: 'İletişim becerileri güçlü, sorumluluk sahibi ve ekip içinde uyumlu çalişan bir geliştiriciyim.',
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