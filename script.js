
function toggleMenu() {
    const menuItems = document.querySelector('.menu-items');
    menuItems.classList.toggle('show');
}

// Image Sliding

// Carousel script
const carouselInner = document.querySelector('.carousel-inner');
let currentIndex = 0;

function showNextImage() {
    currentIndex = (currentIndex + 1) % document.querySelectorAll('.carousel-item').length;
    updateCarousel();
}

function updateCarousel() {
    const translateValue = -currentIndex * 100 + '%';
    carouselInner.style.transform = 'translateX(' + translateValue + ')';
}

setInterval(showNextImage, 3000); // Change the interval (in milliseconds) as needed

// Image Sliding End

// Product Section
function addToCart(productName, price) {
    // You can implement your own logic here, such as updating a shopping cart object or making an API call.
    console.log(`Added ${productName} to cart. Price: $${price}`);
}
// Product Section End

// Buy Now Button
function buyNow(productName, price) {
    // Implement your "Buy Now" logic here, such as redirecting to a checkout page or processing the order.
    console.log(`Buy Now: ${productName}. Price: $${price}`);

    // Checkout function
    function checkout() {
        // Redirect to the checkout page
        alert('Redirecting to Checkout Page...');
        window.location.href = 'product1.html'; // Replace 'checkout.html' with the actual path or URL of your checkout page.
    }
}

function redirectToCategory(categoryName, categoryPage) {
            
    window.location.href = categoryPage;
}