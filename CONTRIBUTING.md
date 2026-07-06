# Contributing to Better Atimonan

Thank you for your interest in contributing!

## Getting Started

### Prerequisites

- Node.js v18 or higher
- pnpm v8 or higher
- Git

### Setup

```bash
git clone <repository-url>
cd better-atimonan
npm install -g pnpm@8.15.0
pnpm install
pnpm run dev
```

Open in your browser:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## How to Contribute

### Reporting Bugs

1. Check existing issues to avoid duplicates
2. Create a new issue with:
   - Clear, descriptive title
   - Steps to reproduce
   - Expected vs actual behavior
   - Browser and device information
   - Screenshots if applicable

### Suggesting Features

1. Open an issue with the `enhancement` label
2. Describe the feature and its benefit
3. Include mockups or examples if possible

### Submitting Code

1. **Fork** the repository
2. **Create** a feature branch
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make** your changes
4. **Test** your changes
   ```bash
   pnpm run lint
   pnpm run build
   ```
5. **Commit** with a descriptive message
   ```bash
   git commit -m "Add: brief description of changes"
   ```
6. **Push** to your fork
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Open** a Pull Request

### Commit Message Format

```
Type: brief description

Types:
- Add: New feature or content
- Fix: Bug fix
- Update: Changes to existing feature
- Remove: Removed feature or content
- Docs: Documentation changes
- Style: CSS/formatting changes (no logic change)
- Refactor: Code restructuring
```

## Contribution Areas

| Area               | Description                          |
| ------------------ | ------------------------------------ |
| Bug Fixes          | Fix reported issues                  |
| Features           | Implement new functionality          |
| Design             | Improve UI/UX and accessibility      |
| Documentation      | Improve guides and comments          |
| Backend API        | Enhance Express.js backend           |
| Frontend UI        | Improve React frontend               |

## Code Guidelines

### Frontend (React + TypeScript)

- Use meaningful variable and function names
- Add comments for complex logic
- Ensure type safety
- Use Tailwind CSS classes
- Ensure responsive design

### Backend (Express.js + TypeScript)

- Follow REST API best practices
- Use proper error handling
- Document API endpoints
- Ensure type safety
- Follow existing code patterns

### Shared Packages

- Use `@better-atimonan/types` for shared types
- Use `@better-atimonan/utils` for shared utilities
- Keep packages focused and reusable

### Accessibility

- Maintain WCAG 2.1 compliance
- Include alt text for images
- Ensure keyboard navigation works

## Pull Request Process

1. Ensure your code follows the style guidelines
2. Update documentation if needed
3. Test thoroughly before submitting
4. Fill out the PR template completely
5. Link related issues
6. Wait for review and address feedback

## Review Criteria

Pull requests are reviewed for:
- Code quality and style consistency
- Functionality and bug-free operation
- Accessibility compliance
- Mobile responsiveness
- Security considerations
- Proper use of shared packages

## License

By contributing to this project, you agree that your contributions will be licensed under the MIT License.
