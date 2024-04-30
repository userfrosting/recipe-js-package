const DarkReader = require('darkreader/darkreader');

// Function used to toggle the state
function toggleDarkMode() {
    if (DarkReader.isEnabled()) {
        DarkReader.disable();
        localStorage.setItem('UF-DarkMode-enabled', false);
    } else {
        DarkReader.enable();
        localStorage.setItem('UF-DarkMode-enabled', true);
    }
}

// Init when document is ready
$(function() { 
    // Init event listener for button
    $('.darkmode-btn').on( "click", function() {
        toggleDarkMode();
    });

    // Set initial state as saved in local storage 
    const enabled = localStorage.getItem('UF-DarkMode-enabled');
    if (enabled === "true") { DarkReader.enable(); }
});
