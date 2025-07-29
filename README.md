# Statamic Blog with Alpine.js & TailwindCSS

This project is a dynamic blog built with Statamic, Alpine.js, and TailwindCSS, supporting filtered categories and paginated content.

🚀 Features

- Dynamic blog listing from Statamic Collection API
- Category filtering
- "Load more" pagination
- Accordion blocks in blog detail pages
- Responsive layout with TailwindCSS
- Real asset-based image loading
- Swiper.js image carousels

---

📁 File Structure

/resources/views
├── blog/
│   ├── index.antlers.html        # Blog listing page
│   └── show.antlers.html         # Single blog post detail
├── layout.antlers.html           # Global site layout
├── partials/
│   ├── blog/
│   │   ├── card.antlers.html         # Individual post card
│   │   ├── filter.antlers.html       # Category filter UI
│   │   ├── grid.antlers.html         # Blog grid layout
│   │   └── load-more.antlers.html    # "Load More" button
│   └── blog-detail/
│       ├── accordion.antlers.html    # Accordion block
│       ├── content.antlers.html      # Bard content renderer
│       └── swiper.antlers.html       # Swiper carousel integration
└── welcome.blade.php                 # Laravel's default welcome page









🧩 Dynamic Content Cards with Bard

Alpine.js Interactivity
Expandable card sections
Accordions for content grouping
Animated transitions
Swiper.js
Responsive image carousel inside content cards
TailwindCSS Styling
Clean typography
Smooth hover effects
Card hover shadows and transitions
Mobile-first responsive layout
🔗 API Endpoints
View Blog Collection:
 http://localhost:8000/cp/collections/blog


API for Blog Entries:
 http://localhost:8000/api/collections/blog/entries
Installation
Installation
# 1. Clone the repository
git clone https://github.com/your-username/statamic-site.git
cd statamic-site

# 2. Install dependencies
composer install
npm install

# 3. Build assets
npm run dev

# 4. Run database migrations
php artisan migrate

# 5. Seed the database
php artisan db:seed --class=UserSeeder

# 6. Start local server
php artisan serve

Email: john.doe@gmail.com
Password: Demo@123



🧪 Usage
Visit:
 👉 http://localhost:8000/blog – to view latest blog posts
 👉 http://localhost:8000/blog/{slug} – to view single post

📦 Dependencies
Statamic CMS
TailwindCSS
Alpine.js
Swiper.js
