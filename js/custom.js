// Select all the dropdown menu items
const dropdownItems = document.querySelectorAll('.mobile-drop-down');

// Loop through each dropdown and add an event listener for click
dropdownItems.forEach(dropdown => {
    dropdown.addEventListener('click', function(event) {
        const dropdownMenu = this.querySelector('ul'); // Find the nested <ul> dropdown

        // Close all other dropdowns (if any are open)
        dropdownItems.forEach(item => {
            if (item !== this) {
                item.querySelector('ul').style.display = 'none'; // Hide others
            }
        });

        // Toggle the clicked dropdown menu
        if (dropdownMenu.style.display === 'block') {
            dropdownMenu.style.display = 'none'; // If it's open, close it
        } else {
            dropdownMenu.style.display = 'block'; // If it's closed, open it
        }

        // Prevent the click event from propagating to parent elements
        event.stopPropagation();
    });
});

// Close all dropdowns if the user clicks anywhere outside the mobile nav
document.addEventListener('click', function(event) {
    if (!event.target.closest('.mobile-nav')) {
        dropdownItems.forEach(item => {
            item.querySelector('ul').style.display = 'none'; // Close dropdowns
        });
    }
});



// Select the toggle button and the menu list
const toggleBtn = document.querySelector('.mobile-toggle');
const menuList = document.querySelector('.mobile-ul'); // Menu list
const mobileNav = document.querySelector('.mobile-nav'); // The parent container

// Add event listener to the toggle button
toggleBtn.addEventListener('click', function(event) {
    // Prevent the click from propagating to the document (to avoid closing the menu immediately)
    event.stopPropagation();

    // Toggle the menu visibility
    if (menuList.style.left === '0px') {
        menuList.style.left = '-100%'; // Close the menu
    } else {
        menuList.style.left = '0'; // Open the menu
    }
});

// Close the menu if clicking outside the menu or toggle button
document.addEventListener('click', function(event) {
    // If the click is outside of the menu and toggle button, close the menu
    if (!mobileNav.contains(event.target)) {
        menuList.style.left = '-100%'; // Close the menu
    }
});

// Prevent clicks inside the menu from closing it
menuList.addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent the click from propagating to the document
});
