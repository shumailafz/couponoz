const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
        <img src="img/dark-logo.png" class="logo" alt="">
        <div class="footer-ul-container">
            <ul class="category">
                <li class="category-title">Food</li>
                <li><a href="food.html" class="footer-link">Swiggi</a></li>
                <li><a href="food.html" class="footer-link">Zomato</a></li>
                <li><a href="404.html" class="footer-link">Dominos</a></li>
            </ul>
            <ul class="category">
                <li class="category-title">Shopping</li>
                <li><a href="shopping.html" class="footer-link">Amazon</a></li>
                <li><a href="shopping.html" class="footer-link">Flipkart</a></li>
                <li><a href="404.html" class="footer-link">Myntra</a></li>
            </ul>
        </div>
    </div>
    <p class="footer-title">about Couponoz</p>
    <p class="info">Our website provide free coupons of various services across food, travel, shopping and many more domains. </p>
    <p class="info">telephone - 91189XXXXX</p>
    <div class="footer-social-container">
        <div>
            <a href="404.html" class="social-link">terms & services</a>
            <a href="404.html" class="social-link">privacy page</a>
        </div>
        <div>
            <a href="https://www.instagram.com/" class="social-link">instagram</a>
        </div>
    </div>
    <p class="footer-credit">Couponoz, Best Coupon Website</p>
    `;
}

createFooter();