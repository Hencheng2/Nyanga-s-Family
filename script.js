document.addEventListener('DOMContentLoaded', function() {
    var accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(function(header) {
        header.addEventListener('click', function() {
            // Toggle the 'active' class on the clicked header
            this.classList.toggle('active');

            // Get the next sibling element, which is the content panel
            var content = this.nextElementSibling;

            // Toggle the 'show' class to control max-height and padding
            if (content.classList.contains('show')) {
                content.classList.remove('show');
                content.style.maxHeight = null; // Collapse
                content.style.padding = '0 25px'; // Reset padding after collapse
            } else {
                content.classList.add('show');
                // Set max-height to scrollHeight to allow smooth transition
                // A large fixed value can also work if content height is very variable
                content.style.maxHeight = content.scrollHeight + "px";
                content.style.padding = '15px 25px'; // Apply padding when showing
            }
        });
    });
});
                          
