import { motion } from 'framer-motion'
import { FiShoppingCart, FiHeart } from 'react-icons/fi'
import { useState } from 'react'

/**
 * ProductCard Component
 * Displays individual ramen menu items with image, description, and price
 * Includes smooth hover animations and interactive elements
 */
function ProductCard({ image, title, description, price, japaneseText, onAddToCart }) {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
      className="card group cursor-pointer overflow-hidden"
    >
      {/* Image Container */}
      <div className="relative h-64 mb-4 overflow-hidden rounded-lg bg-dark-700">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ opacity: 1, scale: 1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onAddToCart && onAddToCart(title)}
            className="btn-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center space-x-2"
          >
            <FiShoppingCart size={20} />
            <span>Add to Cart</span>
          </motion.button>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-3">
        {/* Title and Favorite */}
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
              {title}
            </h3>
            {japaneseText && (
              <p className="text-sm text-primary-400 font-japanese mt-1">{japaneseText}</p>
            )}
          </div>
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsFavorite(!isFavorite)}
            className="text-gray-400 hover:text-primary-500 transition-colors ml-2"
          >
            <FiHeart
              size={20}
              fill={isFavorite ? 'currentColor' : 'none'}
              className={isFavorite ? 'text-primary-500' : ''}
            />
          </motion.button>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
          {description}
        </p>

        {/* Price */}
        <div className="flex items-center justify-between pt-4 border-t border-dark-700">
          <span className="text-2xl font-bold text-primary-500">${price}</span>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-outline text-sm py-2 px-4"
          >
            Order Now
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default ProductCard