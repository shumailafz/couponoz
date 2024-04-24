const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <img src="img/dark-logo.png" class="brand-logo" alt="">
            <div class="nav-items">
                <a href=""><img src="img/user.png" alt=""></a>
                <a href="404.html"><img src="img/cart.png" alt=""></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="index.html" class="link">home</a></li>
            <li class="link-item"><a href="shopping.html" class="link">Shopping</a></li>
            <li class="link-item"><a href="food.html" class="link">Food</a></li>
            <li class="link-item"><a href="travel.html" class="link">Travel</a></li>
            <li class="link-item"><a href="payments.html" class="link">Payments</a></li>
        </ul>
    `;
}

createNav();