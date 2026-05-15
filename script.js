// Navigation between homepage and product pages
const homepage = document.getElementById('homepage');
const superheroPage = document.getElementById('superhero-page');
const animePage = document.getElementById('anime-page');
const sportsPage = document.getElementById('sports-page');

// Explore buttons
const exploreButtons = document.querySelectorAll('.explore-btn');
const backToHomeButtons = document.querySelectorAll('.back-to-home');
const homeLink = document.querySelector('.home-link');
const shopLinks = document.querySelectorAll('.shop-link, .shop-superhero, .shop-anime, .shop-sports');

// Show homepage by default
showHomepage();

// Explore button click handlers
exploreButtons.forEach(button => {
    button.addEventListener('click', function() {
        const category = this.closest('.category-section').dataset.category;
        showProductsPage(category);
    });
});

// Back to home and home link
backToHomeButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        showHomepage();
    });
});

homeLink.addEventListener('click', function(e) {
    e.preventDefault();
    showHomepage();
});

// Shop links
shopLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        if (this.classList.contains('shop-superhero')) {
            showProductsPage('superhero');
        } else if (this.classList.contains('shop-anime')) {
            showProductsPage('anime');
        } else if (this.classList.contains('shop-sports')) {
            showProductsPage('sports');
        } else {
            // Default to superhero if just "Shop"
            showProductsPage('superhero');
        }
    });
});

function showHomepage() {
    homepage.style.display = 'flex';
    superheroPage.style.display = 'none';
    animePage.style.display = 'none';
    sportsPage.style.display = 'none';
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);
}

function showProductsPage(category) {
    homepage.style.display = 'none';
    superheroPage.style.display = 'none';
    animePage.style.display = 'none';
    sportsPage.style.display = 'none';
    
    if (category === 'superhero') {
        superheroPage.style.display = 'block';
    } else if (category === 'anime') {
        animePage.style.display = 'block';
    } else if (category === 'sports') {
        sportsPage.style.display = 'block';
    }
    
    document.body.style.overflow = 'auto';
    window.scrollTo(0, 0);
}

// Cart functionality
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartCount = document.querySelector('.cart-count');
let count = 0;

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        count++;
        cartCount.textContent = count;
        
        // Animation effect
        cartCount.style.transform = 'scale(1.2)';
        setTimeout(() => {
            cartCount.style.transform = 'scale(1)';
        }, 300);
        
        // Button feedback
        button.textContent = 'Added!';
        button.style.background = 'linear-gradient(90deg, var(--neon-pink), var(--accent-yellow))';
        setTimeout(() => {
            button.textContent = 'Add to Cart';
            button.style.background = 'linear-gradient(90deg, var(--electric-blue), var(--violet))';
        }, 1500);
    });
});

// Hover effects for category sections
const categorySections = document.querySelectorAll('.category-section');

categorySections.forEach(section => {
    section.addEventListener('mouseenter', function() {
        // Reset all sections first
        categorySections.forEach(s => {
            s.style.flex = '1';
        });
        // Then expand the hovered one
        this.style.flex = '1.5';
    });
    
    section.addEventListener('mouseleave', function() {
        // Reset all sections when leaving any section
        categorySections.forEach(s => {
            s.style.flex = '1';
        });
    });
});