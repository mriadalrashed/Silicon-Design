# Silicon Design - Banking App Landing Page

This is a modern, responsive landing page for a mobile banking application called Silicon Design. The website features a clean design with both light and dark mode support.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Dark/Light Mode**: Toggle between light and dark themes with persistent storage
- **Interactive Elements**: Smooth animations, hover effects, and transitions
- **FAQ Accordion**: Expandable FAQ section with smooth animations
- **Newsletter Subscription**: Email subscription form with validation
- **Modern UI**: Clean, professional design following modern web standards

## Sections

1. **Header**: Navigation with logo, theme switcher, and sign-in button
2. **Hero Section**: Main banner with app description and store download buttons
3. **App Features**: Grid layout showcasing key features with icons
4. **How It Works**: Visual demonstration of the app functionality
5. **FAQ**: Frequently asked questions with expandable answers
6. **Newsletter**: Subscription form for updates

## File Structure

```
/
├── index.html          # Main HTML file
├── css/
│   ├── style.css       # Main stylesheet
│   ├── normalize.css   # CSS reset/normalize
│   └── all.min.css     # Font Awesome icons (placeholder)
├── js/
│   └── script.js       # JavaScript functionality
├── images/             # Image assets directory
└── README.md           # This file
```

## Required Assets

To complete the website, you'll need to add the following image files to the `images/` directory:

- `logo.png` - Light mode logo
- `logo-dark.png` - Dark mode logo
- `hero.png` - Hero section app preview image
- `appstore.png` - App Store download button (light)
- `googleplay.png` - Google Play download button (light)
- `appstoredark.png` - App Store download button (dark)
- `googleplaydark.png` - Google Play download button (dark)
- `phone-1.png`, `phone-2.png`, `phone-3.png` - Phone screenshots for "How It Works" section
- `favicon.ico` - Website favicon

## Font Awesome

The website uses Font Awesome icons. You'll need to either:
1. Download Font Awesome CSS and place it in `css/all.min.css`
2. Or use the CDN version by replacing the local link with:
   ```html
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
   ```

## JavaScript Features

- **Theme Switching**: Persistent dark/light mode toggle

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Customization

### Colors
The main colors can be customized by modifying the CSS variables in `:root`:
- `--main-color`: Primary brand color (#6366F1)
- `--hover-color`: Hover state color (#4044ee)
- `--dark-mode-color`: Dark mode background (#0B0F19)

### Typography
The website uses the "Manrope" font family from Google Fonts. You can change this by modifying the font imports and the `font-family` property in the CSS.

## Deployment

This is a static website that can be deployed to any web server or hosting platform:
- GitHub Pages
- Netlify
- Vercel
- Traditional web hosting

Simply upload all files to your web server's public directory.

## License

This project is for educational/demonstration purposes. Please ensure you have proper licenses for any fonts, icons, or images used in production.
