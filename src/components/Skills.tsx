import { motion } from 'framer-motion'
import { 
  Code, 
  Palette, 
  Database, 
  Settings,
  Globe,
  Server,
  GitBranch
} from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Frameworks',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React.js', years: '3+ yıl' },
        { name: 'Next.js', years: '3+ yıl' },
        { name: 'Vue.js', years: '2+ yıl' },
        { name: 'Nuxt.js', years: '2+ yıl' },
        { name: 'TypeScript', years: '2+ yıl' },
        { name: 'JavaScript (ES6+)', years: '4+ yıl' },
      ]
    },
    {
      title: 'Backend & Database',
      icon: Server,
      color: 'from-green-500 to-teal-500',
      skills: [
        { name: 'Node.js', years: '1 yıl' },
        { name: 'Express.js', years: '1 yıl' },
        { name: 'MongoDB', years: '1 yıl' },
        { name: 'REST API', years: '4+ yıl' },
        { name: 'Firebase', years: '4+ yıl' },
        { name: 'Strapi CMS', years: '2 yıl' },
      ]
    },
    {
      title: 'Styling & Design',
      icon: Palette,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'HTML5', years: '4+ yıl' },
        { name: 'CSS3', years: '4+ yıl' },
        { name: 'Tailwind CSS', years: '2+ yıl' },
        { name: 'SCSS/Sass', years: '4+ yıl' },
        { name: 'Bootstrap', years: '2 yıl' },
        { name: 'Responsive Design', years: '4+ yıl' },
      ]
    },
    {
      title: 'State Management',
      icon: Database,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Redux', years: '1 yıl' },
        { name: 'Context API', years: '2+ yıl' },
        { name: 'Vuex', years: '3 yıl' },
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: Settings,
      color: 'from-indigo-500 to-purple-500',
      skills: [
        { name: 'Git & GitHub', years: '4+ yıl' },
        { name: 'Docker', years: '1 yıl' },
        { name: 'GitHub Actions (CI/CD', years: '1 yıl' },
        { name: 'Cloudflare Workers', years: '1 yıl' },
        { name: 'Bitbucket', years: '1 yıl' },
        { name: 'GitLab', years: '1 yıl' },
      ]
    },
    {
      title: 'Libraries & Tools',
      icon: GitBranch,
      color: 'from-pink-500 to-rose-500',
      skills: [
        { name: 'Axios', years: '4+ yıl' },
        { name: 'Storybook', years: '2 yıl' },
        { name: 'D3.js', years: '1 yıl' },
        { name: 'i18n', years: '2+ yıl' },
        { name: 'Figma', years: '3+ yıl' },
        { name: 'Adobe XD', years: '1 yıl' },
      ]
    },
    {
      title: 'Project Management',
      icon: Globe,
      color: 'from-teal-500 to-green-500',
      skills: [
        { name: 'Scrum', years: '3+ yıl' },
        { name: 'Agile Development', years: '3+ yıl' },
        { name: 'Remote Collaboration', years: '3+ yıl' },
        { name: 'SEO', years: '1 yıl' },
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 px-6 bg-slate-800/20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Teknoloji Yetkinliklerim</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            4+ yıllık deneyimim boyunca kullandığım teknolojiler ve araçlar. 
            Her teknoloji için kullanım süreme göre deneyim aralığımı belirttim.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 bg-gradient-to-r ${category.color} rounded-xl mr-4`}>
                  <category.icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="flex justify-between items-center py-2 px-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors duration-300"
                  >
                    <span className="text-gray-300 font-medium text-sm">{skill.name}</span>
                    <span className="text-gray-400 text-xs font-mono">{skill.years}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/*        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center text-white mb-8">Öne Çıkan Uzmanlık Alanlarım</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Frontend Development',
                description: 'React.js ve Vue.js ile modern, responsive web uygulamaları geliştirme',
                icon: '⚛️',
                technologies: ['React.js', 'Vue.js', 'TypeScript', 'Tailwind CSS']
              },
              {
                title: 'Full Stack Solutions',
                description: 'Frontend ve backend teknolojilerini entegre ederek complete solutions',
                icon: '🔧',
                technologies: ['Node.js', 'Express.js', 'MongoDB', 'REST API']
              },
              {
                title: 'Modern Development',
                description: 'CI/CD, Docker ve modern deployment araçları ile efficient development',
                icon: '🚀',
                technologies: ['Docker', 'GitHub Actions', 'Cloudflare Workers']
              }
            ].map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/30 backdrop-blur-sm rounded-xl p-6 border border-slate-600 hover:border-slate-500 transition-all duration-300"
              >
                <div className="text-3xl mb-4">{area.icon}</div>
                <h4 className="text-lg font-semibold text-white mb-3">{area.title}</h4>
                <p className="text-gray-400 text-sm mb-4">{area.description}</p>
                <div className="flex flex-wrap gap-2">
                  {area.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-md border border-slate-600"
                    >
                      {tech}
                    </span>
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

export default Skills 