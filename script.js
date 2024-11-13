document.addEventListener('DOMContentLoaded', function () {
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const closeIcon = document.getElementById('close-icon');
    const hamburgerMenu = document.getElementById('hamburger-menu');

    // Show the hamburger menu
    hamburgerIcon.addEventListener('click', () => {
        hamburgerMenu.classList.add('active');
        hamburgerIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
    });

    // Close the hamburger menu
    closeIcon.addEventListener('click', () => {
        hamburgerMenu.classList.remove('active');
        closeIcon.classList.add('hidden');
        hamburgerIcon.classList.remove('hidden');
    });
});
