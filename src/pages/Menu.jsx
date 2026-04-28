import { useState } from 'react'
import { motion } from 'framer-motion'
import ProductCard from '../components/ProductCard'

/**
 * Menu Page Component
 * Displays all ramen varieties with filtering and categories
 * Includes Japanese text and smooth animations
 */
function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const menuItems = [
    {
      id: 1,
      title: 'Tonkotsu Ramen',
      japaneseText: '豚骨ラーメン',
      category: 'broth',
      description: 'Rich and creamy pork bone broth with tender chashu pork and soft-boiled egg',
      price: 12.99,
      image: 'https://images.unsplash.com/photo-1623521885457-c41b3a7071e7?w=500&h=500&fit=crop',
    },
    {
      id: 2,
      title: 'Shoyu Ramen',
      japaneseText: '醤油ラーメン',
      category: 'broth',
      description: 'Traditional soy-based broth with a perfect balance of flavors and toppings',
      price: 11.99,
      image: 'https://images.unsplash.com/photo-1612874742237-6526221fcf4f?w=500&h=500&fit=crop',
    },
    {
      id: 3,
      title: 'Miso Ramen',
      japaneseText: '味噌ラーメン',
      category: 'broth',
      description: 'Savory miso-based broth with fresh vegetables and premium toppings',
      price: 12.49,
      image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=500&h=500&fit=crop',
    },
    {
      id: 4,
      title: 'Spicy Miso Ramen',
      japaneseText: '辛味噌ラーメン',
      category: 'spicy',
      description: 'Fiery miso broth with chili oil and spicy toppings for heat lovers',
      price: 13.49,
      image: 'https://images.unsplash.com/photo-1612874742237-6526221fcf4f?w=500&h=500&fit=crop',
    },
    {
      id: 5,
      title: 'Vegetarian Ramen',
      japaneseText: 'ベジタリアンラーメン',
      category: 'vegetarian',
      description: 'Plant-based broth with fresh vegetables and tofu for a lighter option',
      price: 10.99,
      image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=500&h=500&fit=crop',
    },
    {
      id: 6,
      title: 'Seafood Ramen',
      japaneseText: 'シーフードラーメン',
      category: 'premium',
      description: 'Premium seafood broth with shrimp, scallops, and fresh fish',
      price: 15.99,
      image: 'https://images.unsplash.com/photo-1623521885457-c41b3a7071e7?w=500&h=500&fit=crop',
    },
    {
      id: 7,
      title: 'Black Garlic Ramen',
      japaneseText: '黒ニンニクラーメン',
      category: 'premium',
      description: 'Rich broth infused with aged black garlic for a unique umami flavor',
      price: 14.99,
      image: 'https://images.unsplash.com/photo-1612874742237-6526221fcf4f?w=500&h=500&fit=crop',
    },
    {
      id: 8,
      title: 'Cold Ramen',
      japaneseText: '冷やしラーメン',
      category: 'cold',
      description: 'Refreshing cold noodles with chilled broth and fresh toppings',
      price: 11.49,
      image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=500&h=500&fit=crop',
    },
  ]

  const categories = [
    { id: 'all', name: 'All Items', label: 'すべて' },
    { id: 'broth', name: 'Classic Broths', label: 'クラシック' },
    { id: 'spicy', name: 'Spicy', label: '辛い' },
    { id: 'vegetarian', name: 'Vegetarian', label: 'ベジタリアン' },
    { id: 'premium', name: 'Premium', label: 'プレミアム' },
    { id: 'cold', name: 'Cold Ramen', label: '冷やし' },
  ]

  const filteredItems = selectedCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory)

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
    <div className="bg-dark-900 min-h-screen pt-20">
      {/* Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-dark-800">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-title"
          >
            Our Menu
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="section-subtitle"
          >
            Explore our authentic Japanese ramen collection
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-wrap gap-4 justify-center"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'btn-primary'
                    : 'bg-dark-800 text-gray-300 hover:text-primary-400 border border-dark-700'
                }`}
              >
                <div className="flex flex-col items-center">
                  <span>{category.name}</span>
                  <span className="text-xs text-primary-400 font-japanese">{category.label}</span>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Menu Items Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item) => (
              <motion.div key={item.id} variants={itemVariants}>
                <ProductCard
                  {...item}
                  onAddToCart={(title) => console.log(`Added ${title} to cart`)}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-2xl text-gray-400">No items found in this category</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: 'Customization',
                description: 'Customize your ramen with your preferred toppings and broth intensity',
                icon: '🎨',
              },
              {
                title: 'Dietary Options',
                description: 'We offer vegetarian, vegan, and gluten-free options',
                icon: '🌱',
              },
              {
                title: 'Delivery Available',
                description: 'Order online for fast delivery to your location',
                icon: '🚚',
              },
            ].map((info, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card text-center space-y-4"
              >
                <div className="text-5xl">{info.icon}</div>
                <h3 className="text-xl font-bold text-white">{info.title}</h3>
                <p className="text-gray-400">{info.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Menu