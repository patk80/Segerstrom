let accordionButtons = document.querySelectorAll(".accordion-button");
// Looping through all elements and adding an event listener //
accordionButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        if( !btn.classList.contains('collapsed') ) {
            btn.innerHTML = '<i class="fas fa-minus me-2"></i> Hide Package Content';
        } else {
            btn.innerHTML = '<i class="fas fa-plus me-2"></i> Show Package Content';
        }
    });
});