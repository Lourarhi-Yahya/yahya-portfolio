# Yahya Lourarhi - Personal Portfolio

A premium, minimalist personal portfolio website showcasing expertise in AI, Data Science, and Business Automation.

## 🚀 Features

- **Modern Design**: Clean, professional interface with premium aesthetics
- **Dark/Light Mode**: Seamless theme switching with smooth transitions
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Smooth Animations**: Framer Motion powered interactions
- **Performance Optimized**: Fast loading with Next.js and TypeScript
- **SEO Ready**: Meta tags and structured data for search engines

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theming**: next-themes
- **Fonts**: Inter & Poppins (Google Fonts)

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd yahya-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `app/layout.tsx` - Update metadata and title
- `components/Hero.tsx` - Update name, tagline, and social links
- `components/About.tsx` - Update personal description
- `components/Projects.tsx` - Add your actual projects
- `components/Contact.tsx` - Update contact information
- `components/Education.tsx` - Update education history

### Styling
- Colors: Modify `tailwind.config.js` for custom color schemes
- Fonts: Update font imports in `app/globals.css`
- Animations: Adjust Framer Motion settings in components

### Content
- **Projects**: Add your real projects with descriptions, tech stacks, and links
- **Skills**: Update the skills array in `components/Skills.tsx`
- **Education**: Modify the education timeline in `components/Education.tsx`
- **Contact**: Update email and social media links

## 📱 Sections

1. **Header**: Navigation with dark mode toggle
2. **Hero**: Animated introduction with CTA buttons
3. **About**: Personal introduction with image
4. **Skills**: Technology stack in responsive grid
5. **Projects**: Portfolio showcase with project cards
6. **Education**: Academic timeline
7. **Contact**: Contact form and information
8. **Footer**: Copyright and quick links

## 🚀 Deployment

### GitHub Pages (Current)
This portfolio is automatically deployed to GitHub Pages using GitHub Actions:

1. **Automatic Deployment**: Every push to the `master` branch triggers a new deployment
2. **Build Process**: Next.js project is built and exported as static files
3. **Live URL**: https://lourarhi-yahya.github.io/yahya-portfolio/

### GitHub Actions Workflow
The `.github/workflows/deploy.yml` file handles:
- ✅ Node.js 18 setup
- ✅ Dependencies installation
- ✅ Next.js build and static export
- ✅ GitHub Pages deployment

### Other Platforms
- **Vercel**: Connect repository for automatic deployments
- **Netlify**: Build command: `npm run build`
- **Railway**: Automatic deployment from GitHub
- **AWS Amplify**: Connect repository for automatic deployments

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

For questions or support, reach out at yahya@example.com

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS 