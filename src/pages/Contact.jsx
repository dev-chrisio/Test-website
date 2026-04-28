import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend } from 'react-icons/fi'

/**
 * Contact Page Component
 * Displays contact form, location, hours, and contact information
 * Includes Japanese text and smooth animations
 */
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', message: '' })
    }, 3000)
  }

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

  const contactInfo = [
    {
      icon: FiPhone,
      title: 'Phone',
      japaneseTitle: '電話',
      value: '(555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: FiMail,
      title: 'Email',
      japaneseTitle: 'メール',
      value: 'info@cjramen.com',
      link: 'mailto:info@cjramen.com',
    },
    {
      icon: FiMapPin,
      title: 'Address',
      japaneseTitle: '住所',
      value: '123 Ramen Street, Tokyo District, CA 90210',
      link: '#',
    },
  ]

  const hours = [
    { day: 'Monday - Thursday', hours: '11:00 AM - 10:00 PM' },
    { day: 'Friday - Saturday', hours: '11:00 AM - 11:00 PM' },
    { day: 'Sunday', hours: '12:00 PM - 9:00 PM' },
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
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 leading-relaxed"
          >
            Get in touch with us for reservations, inquiries, or feedback
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <motion.a
                  key={index}
                  href={info.link}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="card text-center space-y-4 cursor-pointer group"
                >
                  <div className="flex justify-center">
                    <Icon className="text-primary-500 group-hover:text-primary-400 transition-colors" size={40} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
                      {info.title}
                    </h3>
                    <p className="text-sm text-primary-400 font-japanese">{info.japaneseTitle}</p>
                  </div>
                  <p className="text-gray-300 group-hover:text-primary-400 transition-colors">{info.value}</p>
                </motion.a>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <h2 className="text-3xl font-bold font-serif text-white">Send us a Message</h2>
              <p className="text-gray-400">We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.</p>
            </motion.div>

            <motion.form
              variants={itemVariants}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Name */}
              <div className="space-y-2">
                <label className="block text-white font-semibold">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="block text-white font-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="block text-white font-semibold">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder="(555) 123-4567"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="block text-white font-semibold">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                  placeholder="Your message here..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full btn-primary flex items-center justify-center space-x-2 text-lg"
              >
                <span>{submitted ? 'Message Sent!' : 'Send Message'}</span>
                <FiSend />
              </motion.button>

              {/* Success Message */}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500 bg-opacity-20 border border-green-500 rounded-lg text-green-400 text-center"
                >
                  Thank you for your message! We'll get back to you soon.
                </motion.div>
              )}
            </motion.form>
          </motion.div>

          {/* Hours and Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-8"
          >
            {/* Hours */}
            <motion.div variants={itemVariants} className="card space-y-6">
              <div className="flex items-center space-x-3">
                <FiClock className="text-primary-500" size={32} />
                <h3 className="text-2xl font-bold text-white">Hours</h3>
              </div>
              <div className="space-y-4">
                {hours.map((item, index) => (
                  <div key={index} className="flex justify-between items-center pb-4 border-b border-dark-700 last:border-b-0">
                    <span className="text-gray-300 font-semibold">{item.day}</span>
                    <span className="text-primary-400">{item.hours}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Additional Info */}
            <motion.div variants={itemVariants} className="card space-y-6">
              <h3 className="text-2xl font-bold text-white">Visit Us</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-400 text-sm mb-2">Location</p>
                  <p className="text-white font-semibold">123 Ramen Street</p>
                  <p className="text-white font-semibold">Tokyo District, CA 90210</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-2">Parking</p>
                  <p className="text-white">Free parking available in our lot</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-2">Reservations</p>
                  <p className="text-white">Call us to reserve your table</p>
                </div>
              </div>
            </motion.div>

            {/* Japanese Text */}
            <motion.div variants={itemVariants} className="card text-center space-y-4">
              <p className="text-2xl text-primary-400 font-japanese">ご来店お待ちしています</p>
              <p className="text-gray-400">"We look forward to your visit"</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold font-serif text-white text-center">Find Us on the Map</h2>
            <div className="w-full h-96 bg-dark-700 rounded-lg overflow-hidden border border-dark-600 flex items-center justify-center">
              <div className="text-center space-y-4">
                <FiMapPin className="text-primary-500 mx-auto" size={48} />
                <p className="text-gray-400">123 Ramen Street, Tokyo District, CA 90210</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  Get Directions
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact