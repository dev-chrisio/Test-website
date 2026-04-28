import { motion } from 'framer-motion'
import { FiArrowRight, FiStar } from 'react-icons/fi'
import ProductCard from '../components/ProductCard'

/**
 * Home Page Component
 * Features hero section, featured products, testimonials, and CTA
 * Includes Japanese text and smooth animations
 */
function Home() {
  // Featured products with placeholder images
  const featuredProducts = [
    {
      id: 1,
      title: 'Tonkotsu Ramen',
      japaneseText: '豚骨ラーメン',
      description: 'Rich and creamy pork bone broth with tender chashu pork and soft-boiled egg',
      price: 12.99,
      image: 'https://images.unsplash.com/photo-1623521885457-c41b3a7071e7?w=500&h=500&fit=crop',
    },
    {
      id: 2,
      title: 'Shoyu Ramen',
      japaneseText: '醤油ラーメン',
      description: 'Traditional soy-based broth with a perfect balance of flavors and toppings',
      price: 11.99,
      image: 'https://images.unsplash.com/photo-1612874742237-6526221fcf4f?w=500&h=500&fit=crop',
    },
    {
      id: 3,
      title: 'Miso Ramen',
      japaneseText: '味噌ラーメン',
      description: 'Savory miso-based broth with fresh vegetables and premium toppings',
      price: 12.49,
      image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=500&h=500&fit=crop',
    },
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Food Critic',
      text: 'CJRamen serves the most authentic and delicious ramen I\'ve ever tasted. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Regular Customer',
      text: 'The quality of ingredients and attention to detail is exceptional. Worth every penny!',
      rating: 5,
    },
    {
      name: 'Emma Davis',
      role: 'Food Blogger',
      text: 'A hidden gem! The atmosphere is great and the ramen is absolutely incredible.',
      rating: 5,
    },
  ]

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

  return (
    <div className="bg-dark-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="space-y-8"
          >
            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-primary-400 font-japanese text-xl md:text-2xl font-semibold"
            >
              本物のラーメン
            </motion.p>

            {/* Main Title */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold font-serif text-white leading-tight"
            >
              Experience Authentic
              <span className="block text-primary-500 mt-2">Japanese Ramen</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
            >
              Crafted with traditional recipes and premium ingredients, every bowl of CJRamen tells a story of passion and dedication to culinary excellence.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center space-x-2 text-lg"
              >
                <span>Order Now</span>
                <FiArrowRight />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-outline flex items-center space-x-2 text-lg"
              >
                <span>View Menu</span>
                <FiArrowRight />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-12"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="section-title">Featured Specialties</h2>
            <p className="section-subtitle">Our most popular ramen bowls, crafted to perfection</p>
          </motion.div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                onAddToCart={(title) => console.log(`Added ${title} to cart`)}
              />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-12"
          >
            {/* Section Header */}
            <motion.div variants={itemVariants} className="text-center space-y-4">
              <h2 className="section-title">Why Choose CJRamen?</h2>
              <p className="section-subtitle">Excellence in every bowl</p>
            </motion.div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Authentic Recipes',
                  description: 'Traditional Japanese recipes passed down through generations',
                  icon: '🍜',
                },
                {
                  title: 'Premium Ingredients',
                  description: 'Only the finest ingredients sourced from trusted suppliers',
                  icon: '✨',
                },
                {
                  title: 'Expert Chefs',
                  description: 'Trained chefs with years of experience in Japanese cuisine',
                  icon: '👨‍🍳',
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="card text-center space-y-4"
                >
                  <div className="text-5xl">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-12"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="section-title">What Our Customers Say</h2>
            <p className="section-subtitle">Join thousands of satisfied ramen lovers</p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="card space-y-4"
              >
                {/* Stars */}
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FiStar key={i} className="text-primary-500 fill-primary-500" size={18} />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-300 italic">"{testimonial.text}"</p>

                {/* Author */}
                <div className="pt-4 border-t border-dark-700">
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-primary-400">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-600 to-primary-500">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-serif text-white"
          >
            Ready to Experience the Best Ramen?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white opacity-90"
          >
            Visit us today or order online for delivery
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-dark-900 text-primary-500 px-8 py-4 rounded-lg font-bold text-lg hover:bg-dark-800 transition-colors"
          >
            Reserve Your Table Now
          </motion.button>
        </div>
      </section>
    </div>
  )
}

export default Home