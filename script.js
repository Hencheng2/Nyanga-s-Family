document.addEventListener('DOMContentLoaded', function() {
    // Select all accordion toggle buttons
    var accordionToggles = document.querySelectorAll('.accordion-toggle');

    accordionToggles.forEach(function(toggle) {
        toggle.addEventListener('click', function() {
            // Get the corresponding panel for this toggle
            var panel = this.nextElementSibling; // The div with class accordion-panel

            // Check if the current toggle is already active (i.e., its panel is open)
            var isActive = this.classList.contains('active');

            // --- Close all other open accordion items ---
            // Find all currently active toggles
            document.querySelectorAll('.accordion-toggle.active').forEach(function(activeToggle) {
                // If it's not the toggle that was just clicked
                if (activeToggle !== toggle) {
                    activeToggle.classList.remove('active'); // Remove active class from header
                    var activePanel = activeToggle.nextElementSibling;
                    activePanel.classList.remove('is-expanded'); // Remove expanded class from panel
                    activePanel.style.maxHeight = null; // Collapse the panel
                    activePanel.style.padding = '0 30px'; // Reset padding
                }
            });

            // --- Toggle the clicked accordion item ---
            if (isActive) {
                // If it was active, close it
                this.classList.remove('active');
                panel.classList.remove('is-expanded');
                panel.style.maxHeight = null; // Set height to 0 for collapse transition
                panel.style.padding = '0 30px'; // Reset padding
            } else {
                // If it was not active, open it
                this.classList.add('active');
                panel.classList.add('is-expanded');
                // Set max-height to scrollHeight to allow CSS transition to work smoothly
                panel.style.maxHeight = panel.scrollHeight + "px";
                panel.style.padding = '25px 30px'; // Apply padding when opened
            }
        });
    });
});
