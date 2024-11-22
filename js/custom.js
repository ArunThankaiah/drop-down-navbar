// Toggle the main menu when the hamburger button is clicked
document.querySelector('.mobile-toggle').addEventListener('click', function () {
    document.querySelector('.mobile-nav').classList.toggle('open');
});

// Toggle submenus when a dropdown link is clicked
const dropDowns = document.querySelectorAll('.mobile-drop-down > a');
dropDowns.forEach(dropdown => {
    dropdown.addEventListener('click', function (e) {
        // Prevent the default link behavior (which is to navigate)
        e.preventDefault();
        // Toggle the active class to show/hide the submenu
        this.parentElement.classList.toggle('active');
    });
});

// Close the navbar and submenus if the user clicks outside of the mobile nav
document.addEventListener('click', function (event) {
    // Check if the click is outside the mobile nav and the toggle button
    if (!event.target.closest('.mobile-nav') && !event.target.closest('.mobile-toggle')) {
        document.querySelector('.mobile-nav').classList.remove('open');  // Close the main navbar
        // Close all dropdowns
        document.querySelectorAll('.mobile-drop-down.active').forEach(item => {
            item.classList.remove('active');
        });
    }
});

// Prevent clicks inside the menu from closing it
const menuList = document.querySelector('.mobile-ul');
menuList.addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent the click from propagating to the document
});

// ---------------------------------------------------------------------

