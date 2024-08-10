document.addEventListener('DOMContentLoaded', () => {
    // Select all "Read More" buttons
    const readMoreButtons = document.querySelectorAll('.read-more');

    // Loop through each button and add an event listener
    readMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Get the closest blog-content section
            const blogContent = button.nextElementSibling;
            
            // Toggle the display of the blog-content section
            if (blogContent.style.display === 'none' || !blogContent.style.display) {
                blogContent.style.display = 'block';
                button.textContent = 'Read Less'; // Change button text
            } else {
                blogContent.style.display = 'none';
                button.textContent = 'Read More'; // Change button text
            }
        });

        // Initially hide all blog-content sections
        const blogContent = button.nextElementSibling;
        blogContent.style.display = 'none';
    });
});
