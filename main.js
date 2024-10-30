document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default link behavior

            // Close all dropdowns before opening the clicked one
            navLinks.forEach(otherLink => {
                const otherDropdown = otherLink.nextElementSibling;
                if (otherDropdown !== link.nextElementSibling) {
                    otherDropdown.classList.remove('show');
                    otherLink.classList.remove('active'); // Optional: Remove active class
                }
            });

            // Toggle the clicked dropdown
            const dropdown = link.nextElementSibling;
            dropdown.classList.toggle('show');
            link.classList.toggle('active'); // Toggle active class for the clicked link
        });
    });

    // Optional: Close dropdowns when clicking outside
    document.addEventListener('click', function (event) {
        if (!event.target.closest('.nav')) {
            navLinks.forEach(link => {
                const dropdown = link.nextElementSibling;
                dropdown.classList.remove('show');
                link.classList.remove('active'); // Optional: Remove active class
            });
        }
    });
});