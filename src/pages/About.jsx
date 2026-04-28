import { motion } from 'framer-motion'
import { FiAward, FiUsers, FiTarget, FiHeart } from 'react-icons/fi'

/**
 * About Page Component
 * Tells the story of CJRamen and its mission
 * Includes Japanese text and smooth animations
 */
function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const team = [
    {
      name: 'Chef Takeshi Yamamoto',
      role: 'Head Chef & Founder',
      japaneseRole: '主一人与一人の初代',
      bio: '30+ years of experience in authentic Japanese cuisine',
      image: '👨‍🍳',
    },
    {
      name: 'Yuki Tanaka',
      role: 'Sous Chef',
      japaneseRole: '副主人',
      bio: 'Specializes in traditional broth preparation',
      image: '👩‍🍳',
    },
    {
      name: 'Hiroshi Sato',
      role: 'Noodle Master',
      japaneseRole: '麺職人',
      bio: 'Expert in hand-pulled noodle techniques',
      image: '👨‍🍳',
    },
  ]

  const values = [
    {
      icon: FiHeart,
      title: 'Passion',
      japaneseTitle: '情熱',
      description: 'We pour our hearts into every bowl of ramen we create',
    },
    {
      icon: FiAward,
      title: 'Quality',
      japaneseTitle: '品質',
      description: 'Only the finest ingredients and traditional methods',
    },
    {
      icon: FiUsers,
      title: 'Community',
      japaneseTitle: 'コミュニティ',
      description: 'Building connections through authentic food',
    },
    {
      icon: FiTarget,
      title: 'Excellence',
      japaneseTitle: '卓越',
      description: 'Continuous improvement in every aspect',
    },
  ]

  return (
    <div className="bg-dark-900 min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-800">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-title"
          >
            About CJRamen
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 leading-relaxed"
          >
            A journey of passion, tradition, and culinary excellence
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <h2 className="text-4xl font-bold font-serif text-white mb-6">Our Story</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                CJRamen was founded with a simple mission: to bring authentic Japanese ramen to the heart of our community. 
                Our journey began when Chef Takeshi Yamamoto, a master ramen chef with over 30 years of experience, 
                decided to share his passion for traditional Japanese cuisine with the world.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Every bowl of ramen at CJRamen is a testament to our commitment to excellence. We source only the finest 
                ingredients, many imported directly from Japan, and prepare our broths using time-honored techniques that 
                have been perfected over generations.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                本物のラーメン (Honmono no Ramen) - "True Ramen" - is not just our motto, it's our promise to you. 
                We believe that great ramen is more than just food; it's an experience, a connection, and a celebration 
                of Japanese culinary tradition.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-12"
          >
            <motion.div variants={itemVariants} className="text-center space-y-4">
              <h2 className="section-title">Our Values</h2>
              <p className="section-subtitle">What drives us every day</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -10 }}
                    className="card text-center space-y-4"
                  >
                    <div className="flex justify-center">
                      <Icon className="text-primary-500" size={40} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{value.title}</h3>
                      <p className="text-sm text-primary-400 font-japanese">{value.japaneseTitle}</p>
                    </div>
                    <p className="text-gray-400">{value.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-12"
          >
            <motion.div variants={itemVariants} className="text-center space-y-4">
              <h2 className="section-title">Meet Our Team</h2>
              <p className="section-subtitle">The passionate people behind every bowl</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="card text-center space-y-4"
                >
                  <div className="text-7xl">{member.image}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-primary-400 font-semibold">{member.role}</p>
                    <p className="text-sm text-primary-400 font-japanese">{member.japaneseRole}</p>
                  </div>
                  <p className="text-gray-400 text-sm">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-800">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-8 text-center"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <h2 className="text-4xl font-bold font-serif text-white mb-6">Our Mission</h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                To preserve and celebrate the authentic traditions of Japanese ramen while creating memorable dining 
                experiences that bring people together. We are committed to using sustainable practices, supporting local 
                communities, and continuously innovating to delight our customers.
              </p>
              <p className="text-lg text-primary-400 font-japanese italic mt-8">
                一杯のラーメン、一心の想い。
              </p>
              <p className="text-gray-400 text-sm">
                "One bowl of ramen, one heart's wish."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold font-serif text-white"
          >
            Experience CJRamen Today
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400"
          >
            Visit us and discover why CJRamen is the destination for authentic Japanese ramen
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-lg"
          >
            Visit Us Now
          </motion.button>
        </div>
      </section>
    </div>
  )
}

export default About