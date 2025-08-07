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

API for Blog Entries:
 http://localhost:8000/api/collections/blog/entries

Installation  
# 1. Clone the repository
git clone https://github.com/dev-isyncevolution/statamic-assessment.git  
cd statamic-assessment  
mv .env.example .env


# 2. Install dependencies
composer update / composer install  
npm install    

# 3. Build assets
php artisan migrate  
php artisan db:seed --class=UserSeeder  

# 4. Generate Key
php artisan key:generate (Optional)     
   
# 5. Refresh Statamic’s cache 
php artisan statamic:stache:clear      
php artisan statamic:stache:refresh    
php artisan statamic:eloquent:import-collections   

     Do you want to import collections? (yes/no) [no]:      
     > yes     

     Do you want to import collections trees? (yes/no) [no]:      
     > no      

# 6. Start local server
php artisan serve  

🔗 API Endpoints   
View Blog Collection:
 http://localhost:8000/cp/auth/login  
    Email: john.doe@gmail.com  
    Password: Demo@123  

Create Collections  
http://localhost:8000/cp/collections/create   
Title - blog  
Submit  

🧪 Usage
Visit:
 👉 http://localhost:8000/blog – to view latest blog posts   
 👉 http://localhost:8000/blog/{slug} – to view single post   

📦 Dependencies
Statamic CMS 
TailwindCSS 
Alpine.js 
Swiper.js 

