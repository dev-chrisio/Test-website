# Contributing to CJRamen

Thank you for your interest in contributing to CJRamen! This document provides guidelines and instructions for contributing to the project.

## Code of Conduct

- Be respectful and inclusive
- Welcome diverse perspectives
- Focus on constructive feedback
- Report inappropriate behavior

## Getting Started

### Prerequisites
- Node.js v16 or higher
- npm v8 or higher
- Git
- GitHub account

### Setup Development Environment

1. **Fork the repository**
   - Click "Fork" on GitHub

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/Test-website.git
   cd Test-website
   ```

3. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/dev-chrisio/Test-website.git
   ```

4. **Install dependencies**
   ```bash
   npm install
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

## Development Workflow

### Creating a Feature Branch

```bash
# Update main branch
git checkout main
git pull upstream main

# Create feature branch
git checkout -b feature/your-feature-name
```

### Branch Naming Convention

- `feature/description` - New features
- `fix/description` - Bug fixes
- `docs/description` - Documentation updates
- `style/description` - Code style changes
- `refactor/description` - Code refactoring
- `test/description` - Test additions

### Making Changes

1. **Write clean code**
   - Follow existing code style
   - Use meaningful variable names
   - Add comments for complex logic

2. **Test your changes**
   ```bash
   npm run dev
   # Test in browser
   ```

3. **Check for errors**
   ```bash
   npm run lint
   ```

4. **Commit with clear messages**
   ```bash
   git add .
   git commit -m "feat: add new feature description"
   ```

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation
- `style` - Code style
- `refactor` - Code refactoring
- `test` - Tests
- `chore` - Build/dependencies

**Example:**
```
feat(menu): add category filtering

Implement dynamic menu filtering by category with smooth animations.
Users can now filter ramen by type (broth, spicy, vegetarian, etc.)

Closes #123
```

## Code Standards

### React Components

```javascript
/**
 * ComponentName Component
 * Brief description of what the component does
 */
function ComponentName({ prop1, prop2 }) {
  // Component logic
  return (
    <div>
      {/* JSX */}
    </div>
  )
}

export default ComponentName
```

### Naming Conventions

- **Components**: PascalCase (e.g., `ProductCard`)
- **Functions**: camelCase (e.g., `handleSubmit`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `MAX_ITEMS`)
- **Files**: Match component name or use kebab-case for utilities

### CSS/Tailwind

- Use Tailwind utility classes
- Avoid inline styles
- Use custom CSS only when necessary
- Follow mobile-first approach

### Comments

```javascript
// Single line comment for brief explanations

/**
 * Multi-line comment for complex logic
 * Explain the why, not the what
 */
```

## Testing

### Manual Testing

1. Test all pages
2. Test responsive design
3. Test form submissions
4. Test animations
5. Test navigation
6. Check console for errors

### Browser Testing

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Pull Request Process

### Before Submitting

1. **Update your branch**
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. **Run tests**
   ```bash
   npm run lint
   npm run build
   ```

3. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

### Creating a Pull Request

1. Go to GitHub and click "New Pull Request"
2. Select your branch
3. Fill in the PR template:

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Related Issues
Closes #123

## Testing
Describe how you tested the changes

## Screenshots (if applicable)
Add screenshots for UI changes

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex logic
- [ ] Documentation updated
- [ ] No new warnings generated
- [ ] Tests added/updated
- [ ] All tests passing
```

### PR Review Process

1. Maintainers will review your PR
2. Address any requested changes
3. Push updates to the same branch
4. PR will be merged once approved

## Project Structure

```
src/
├── components/      # Reusable components
├── pages/          # Page components
├── styles/         # Global styles
├── utils/          # Helper functions
├── hooks/          # Custom hooks
├── App.jsx         # Main app component
└── main.jsx        # Entry point
```

## Adding New Features

### New Page

1. Create file in `src/pages/PageName.jsx`
2. Add route in `App.jsx`
3. Add navigation link in `Header.jsx`
4. Test all links

### New Component

1. Create file in `src/components/ComponentName.jsx`
2. Add PropTypes or TypeScript types
3. Add JSDoc comments
4. Export from component file

### New Utility

1. Create file in `src/utils/utilityName.js`
2. Add JSDoc comments
3. Export functions
4. Add tests if applicable

## Documentation

### Update README

If adding features, update README.md:
- Add to features list
- Update project structure if needed
- Add usage examples

### Code Comments

- Explain complex logic
- Document component props
- Add JSDoc for functions

## Performance Considerations

- Minimize re-renders
- Use React.memo for expensive components
- Lazy load routes
- Optimize images
- Minimize bundle size

## Accessibility

- Use semantic HTML
- Add alt text to images
- Ensure keyboard navigation
- Test with screen readers
- Follow WCAG guidelines

## Security

- Never commit secrets
- Validate user input
- Use environment variables
- Keep dependencies updated
- Report security issues privately

## Common Issues

### Build Fails
```bash
rm -rf node_modules
npm install
npm run build
```

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

### Git Conflicts
```bash
git fetch upstream
git rebase upstream/main
# Resolve conflicts in editor
git add .
git rebase --continue
```

## Getting Help

- Check existing issues
- Read documentation
- Ask in discussions
- Contact maintainers

## Recognition

Contributors will be recognized in:
- README.md
- GitHub contributors page
- Release notes

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for contributing to CJRamen! 🍜**