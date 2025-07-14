document.addEventListener('DOMContentLoaded', function() {
    var accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(function(header) {
        header.addEventListener('click', function() {
            // Get the content panel associated with this header
            var content = this.nextElementSibling;

            // Check if the clicked header is already active
            var isActive = this.classList.contains('active');

            // Close all other open accordion items
            document.querySelectorAll('.accordion-header.active').forEach(function(activeHeader) {
                if (activeHeader !== header) { // Don't close the current header if it's already active
                    activeHeader.classList.remove('active');
                    activeHeader.nextElementSibling.classList.remove('show');
                    activeHeader.nextElementSibling.style.maxHeight = null;
                    activeHeader.nextElementSibling.style.padding = '0 30px'; // Reset padding when collapsing
                }
            });

            // Toggle the 'active' class on the clicked header
            this.classList.toggle('active');

            // Toggle the 'show' class and adjust max-height for smooth transition
            if (isActive) {
                // If it was active, collapse it
                content.classList.remove('show');
                content.style.maxHeight = null;
                content.style.padding = '0 30px'; // Reset padding when collapsing
            } else {
                // If it was not active, expand it
                content.classList.add('show');
                content.style.maxHeight = content.scrollHeight + "px"; // Set to actual height for smooth animation
                content.style.padding = '25px 30px'; // Apply padding when showing
            }
        });
    });
});
