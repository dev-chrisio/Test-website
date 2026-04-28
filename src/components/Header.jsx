import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'
import { motion } from 'framer-motion'

/**
 * Header Component
 * Responsive navigation header with mobile menu toggle
 * Includes smooth animations and Japanese text
 */
function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <header className="sticky top-0 z-50 bg-dark-900 border-b border-dark-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-3xl font-bold font-serif text-primary-500 group-hover:text-primary-400 transition-colors"
            >
              CJ
            </motion.div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-white">Ramen</span>
              <span className="text-xs text-primary-400 font-japanese">ラーメン</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div key={item.path} whileHover={{ y: -2 }}>
                <Link
                  to={item.path}
                  className="text-gray-300 hover:text-primary-400 font-medium transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block btn-primary"
          >
            Reserve Table
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={toggleMenu}
            className="md:hidden text-primary-500 hover:text-primary-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.nav
            initial="hidden"
            animate="visible"
            variants={menuVariants}
            className="md:hidden pb-6 space-y-4"
          >
            {navItems.map((item) => (
              <motion.div key={item.path} variants={itemVariants}>
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-300 hover:text-primary-400 font-medium transition-colors py-2"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full btn-primary mt-4"
            >
              Reserve Table
            </motion.button>
          </motion.nav>
        )}
      </div>
    </header>
  )
}

export default Header