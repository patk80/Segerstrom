let accordionButton = document.querySelector(".accordion-button");

accordionButton.addEventListener("click", () => {
    if( !accordionButton.classList.contains('collapsed') ) {
        accordionButton.innerHTML = '<i class="fas fa-minus me-2"></i> Hide Package Content';
    } else {
        accordionButton.innerHTML = '<i class="fas fa-plus me-2"></i> Show Package Content';
    }
});