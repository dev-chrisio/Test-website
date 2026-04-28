# CJRamen - Authentic Japanese Ramen Restaurant Website

🍜 **本物のラーメン** (Honmono no Ramen) - "True Ramen"

A modern, responsive React website for CJRamen, an authentic Japanese ramen restaurant. Built with cutting-edge technologies and smooth animations for an exceptional user experience.

## 🌟 Features

### Core Features
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Smooth Animations**: Framer Motion animations for engaging user interactions
- **Modern UI**: Dark theme with vibrant accent colors and professional design
- **Japanese Text Integration**: Authentic Japanese text throughout the site
- **Product Showcase**: Beautiful product cards with hover effects and animations
- **Contact Form**: Functional contact form with validation and success feedback
- **Menu Filtering**: Dynamic menu filtering by category
- **Navigation**: Sticky header with mobile-responsive navigation menu

### Pages
1. **Home** - Hero section, featured products, testimonials, and CTA
2. **Menu** - Complete menu with category filtering and product details
3. **About** - Company story, team information, and values
4. **Contact** - Contact form, location, hours, and contact information

### Components
- **Header** - Responsive navigation with mobile menu
- **Footer** - Contact info, links, hours, and social media
- **ProductCard** - Reusable product display component
- **Smooth Animations** - Page transitions and interactive elements

## 🛠️ Technologies Used

### Frontend Framework
- **React 18.2.0** - UI library
- **React Router DOM 6.20.0** - Client-side routing
- **Vite 5.0.0** - Build tool and dev server

### Styling & Animation
- **Tailwind CSS 3.3.0** - Utility-first CSS framework
- **Framer Motion 10.16.0** - Animation library
- **PostCSS 8.4.31** - CSS processing
- **Autoprefixer 10.4.16** - CSS vendor prefixes

### Icons & UI
- **React Icons 4.12.0** - Icon library (Feather, Font Awesome)

### Development
- **@vitejs/plugin-react 4.2.0** - React plugin for Vite
- **Node.js** - JavaScript runtime
- **npm** - Package manager

## 📋 Project Structure

```
Test-website/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation header
│   │   ├── Footer.jsx          # Footer with contact info
│   │   └── ProductCard.jsx     # Reusable product card
│   ├── pages/
│   │   ├── Home.jsx            # Home page
│   │   ├── Menu.jsx            # Menu page with filtering
│   │   ├── About.jsx           # About page
│   │   └── Contact.jsx         # Contact page
│   ├── styles/
│   │   └── index.css           # Global styles
│   ├── App.jsx                 # Main app component
│   └── main.jsx                # React entry point
├── public/                     # Static assets
├── index.html                  # HTML entry point
├── package.json                # Dependencies
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
├── vite.config.js              # Vite configuration
└── README.md                   # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm (v8 or higher)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/dev-chrisio/Test-website.git
   cd Test-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The application will open at `http://localhost:3000`

## 📦 Available Scripts

### Development
```bash
npm run dev
```
Starts the development server with hot module replacement (HMR).

### Build
```bash
npm run build
```
Creates an optimized production build in the `dist` folder.

### Preview
```bash
npm run preview
```
Preview the production build locally.

### Lint
```bash
npm run lint
```
Run ESLint to check code quality.

## 🎨 Design System

### Color Palette
- **Primary**: #f04438 (Red/Orange)
- **Dark**: #111827 (Dark background)
- **Accent**: #d4af37 (Gold)
- **Cream**: #fef5e7

### Typography
- **Sans**: Inter (default)
- **Serif**: Playfair Display (headings)
- **Japanese**: Noto Sans JP

### Animations
- Fade In/Out
- Slide Up/Down/Left/Right
- Hover effects
- Staggered animations
- Smooth transitions

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Deploy CJRamen website"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite configuration
   - Click "Deploy"

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `dist` folder
   - Or connect your GitHub repository for auto-deployment

### Deploy to GitHub Pages

1. **Update vite.config.js**
   ```javascript
   export default defineConfig({
     base: '/Test-website/',
     // ... rest of config
   })
   ```

2. **Build and deploy**
   ```bash
   npm run build
   git add dist -f
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔧 Configuration

### Tailwind CSS
Custom theme configuration in `tailwind.config.js`:
- Custom colors
- Custom animations
- Extended spacing
- Custom border radius

### Vite
Configuration in `vite.config.js`:
- Development server on port 3000
- Optimized production build
- Source maps disabled for production

## 📝 Code Style

- **Functional Components**: All components use React hooks
- **Comments**: Complex logic is documented
- **Naming**: Clear, descriptive component and variable names
- **Structure**: Organized folder structure for scalability

## 🎯 Performance Optimizations

- Lazy loading with React Router
- Image optimization with Unsplash URLs
- CSS minification with Tailwind
- JavaScript minification with Terser
- Smooth animations with GPU acceleration

## 🌍 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Chrisjohn Lloyd Oporto**
- Email: oportochrisjohnlloyd@gmail.com
- GitHub: [@dev-chrisio](https://github.com/dev-chrisio)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For support, email info@cjramen.com or open an issue on GitHub.

## 🙏 Acknowledgments

- React community for excellent documentation
- Tailwind CSS for utility-first CSS framework
- Framer Motion for smooth animations
- Unsplash for high-quality images
- All contributors and supporters

---

**本物のラーメン** - Experience authentic Japanese ramen at CJRamen! 🍜

Built with ❤️ by Chrisjohn Lloyd Oporto