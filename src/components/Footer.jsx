import { Link } from 'react-router-dom'
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { motion } from 'framer-motion'

/**
 * Footer Component
 * Contains contact information, links, and social media
 * Includes Japanese text and smooth animations
 */
function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { title: 'Quick Links', links: [{ name: 'Home', path: '/' }, { name: 'Menu', path: '/menu' }, { name: 'About', path: '/about' }] },
    { title: 'Hours', links: [{ name: 'Mon-Thu: 11AM - 10PM', path: '#' }, { name: 'Fri-Sat: 11AM - 11PM', path: '#' }, { name: 'Sun: 12PM - 9PM', path: '#' }] },
  ]

  const socialLinks = [
    { icon: FaFacebook, url: '#', label: 'Facebook' },
    { icon: FaInstagram, url: '#', label: 'Instagram' },
    { icon: FaTwitter, url: '#', label: 'Twitter' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <footer className="bg-dark-900 border-t border-dark-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold font-serif text-primary-500">CJ</span>
              <div>
                <p className="text-lg font-bold text-white">Ramen</p>
                <p className="text-xs text-primary-400 font-japanese">ラーメン</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Experience authentic Japanese ramen crafted with traditional recipes and premium ingredients.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-bold text-white mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400 hover:text-primary-400 transition-colors">
                <FiPhone className="text-primary-500" />
                <span className="text-sm">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 hover:text-primary-400 transition-colors">
                <FiMail className="text-primary-500" />
                <span className="text-sm">info@cjramen.com</span>
              </div>
              <div className="flex items-start space-x-3 text-gray-400 hover:text-primary-400 transition-colors">
                <FiMapPin className="text-primary-500 mt-1" />
                <span className="text-sm">123 Ramen Street<br />Tokyo District, CA 90210</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <div className="space-y-2">
              {['Home', 'Menu', 'About', 'Contact'].map((link) => (
                <Link
                  key={link}
                  to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                  className="text-gray-400 hover:text-primary-400 transition-colors text-sm block"
                >
                  {link}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Hours */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center space-x-2">
              <FiClock className="text-primary-500" />
              <span>Hours</span>
            </h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Mon-Thu: 11AM - 10PM</p>
              <p>Fri-Sat: 11AM - 11PM</p>
              <p>Sun: 12PM - 9PM</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-dark-800 my-8"></div>

        {/* Bottom Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0"
        >
          {/* Copyright */}
          <motion.p variants={itemVariants} className="text-gray-500 text-sm">
            &copy; {currentYear} CJRamen. All rights reserved. | 本物のラーメン
          </motion.p>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex items-center space-x-6">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={social.label}
                  href={social.url}
                  aria-label={social.label}
                  whileHover={{ scale: 1.2, color: '#f04438' }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-400 hover:text-primary-500 transition-colors"
                >
                  <Icon size={20} />
                </motion.a>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer