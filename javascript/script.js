document.addEventListener('DOMContentLoaded', () => {
    // 1. Get references to the three required elements
    const menuButton = document.getElementById('menu-button');
    const mobileNav = document.getElementById('mobile-nav');
    const backgroundBlack = document.getElementById('background-black');

    // Check if all elements exist before adding the listener
    if (menuButton && mobileNav && backgroundBlack) {
        // 2. Add the click event listener to the menu button
        menuButton.addEventListener('click', () => {
            // 3. Toggle 'mobile-nav-active' class on the 'mobile-nav' element
            mobileNav.classList.toggle('mobile-nav-active');

            // 4. Toggle 'background-black-active' class on the 'background-black' element
            backgroundBlack.classList.toggle('background-black-active');
        });
    } else {
        // Optional: Log an error if elements are missing in the HTML
        console.error("One or more required elements (menu-button, mobile-nav, background-black) not found in the DOM.");
    }
});