# Excellence Code - Static HTML/CSS/JS Export

এটি Excellence Code ওয়েবসাইটের সম্পূর্ণ static HTML, CSS এবং JavaScript export।

## 📁 File Structure

```
static-export/
├── index.html          # Main HTML file
├── styles.css          # Complete CSS stylesheet
├── script.js           # JavaScript functionality
├── README.md           # This file
└── images/             # Image assets (you need to add these)
    ├── hero-tech-bg.png
    ├── about-tech.png
    ├── service-development.png
    ├── service-design.png
    ├── service-marketing.png
    ├── service-events.png
    ├── service-analytics.png
    └── contact-bg.png
```

## 🚀 Setup Instructions

### Step 1: Create Images Folder
`images/` নামে একটি folder তৈরি করুন এবং নিচের images গুলো add করুন:

1. **hero-tech-bg.png** - Hero section background
2. **about-tech.png** - About section image
3. **service-development.png** - Development service icon
4. **service-design.png** - Design service icon
5. **service-marketing.png** - Marketing service icon
6. **service-events.png** - Events service icon
7. **service-analytics.png** - Analytics service icon
8. **contact-bg.png** - Contact section background

### Step 2: Open in Browser
`index.html` file টি যেকোনো modern browser এ open করুন।

### Step 3: Deploy (Optional)
যেকোনো static hosting service এ deploy করতে পারবেন:
- Netlify
- Vercel
- GitHub Pages
- Firebase Hosting
- Any web server

## 📋 Features

✅ Fully responsive design (mobile, tablet, desktop)
✅ Smooth scroll navigation
✅ Mobile hamburger menu
✅ Accordion services section
✅ Contact form with validation
✅ Scroll animations
✅ CSS variables for easy theming
✅ No external dependencies (except Google Fonts)

## 🎨 Customization

### Colors
সব colors CSS variables এ define করা আছে। `styles.css` এর `:root` section এ পরিবর্তন করুন:

```css
:root {
  --primary: hsl(213, 52%, 24%);  /* Deep Blue */
  --background: hsl(0, 0%, 100%); /* White */
  /* ... */
}
```

### Fonts
Google Fonts থেকে Inter font ব্যবহার করা হয়েছে। পরিবর্তন করতে:
1. `index.html` এ Google Fonts link পরিবর্তন করুন
2. `styles.css` এ `font-family` পরিবর্তন করুন

### Content
- `index.html` এ সব text content আছে
- Company name, contact info, services - সব এখানে edit করুন

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📧 Contact Form

Contact form টি currently client-side validation করে এবং console এ data log করে। 
Backend integration এর জন্য `script.js` এর form handling section modify করুন।

## 📄 License

Excellence Code Marketing Services LLC © 2024