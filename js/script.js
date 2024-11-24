document.addEventListener('DOMContentLoaded', function() {
    let dropdownButton = document.getElementById('openDropdown');
    let dropdownMenu = document.getElementById('dropdownMenu');
    let openMobileMenu = document.getElementById('openMobileMenu');
    let closeCatalog = document.querySelector("#closeCatalog");
    let mobileMenu = document.querySelector(".mobile-menu");
    let openCatalog = document.getElementById("openCatalog");
    let catalog = document.querySelector(".catalog");
    let openDesktopCatalog = document.querySelector("#openDesktopCatalog");
    let desktopCatalog = document.querySelector(".desktop-catalog");
    
    dropdownButton.addEventListener('click', () => {
        dropdownMenu.classList.toggle('show');
    });

    openMobileMenu.addEventListener("click", () =>{
        mobileMenu.classList.add('show');
    })
    document.addEventListener("click", (event) => {
        if (!catalog.contains(event.target) && !mobileMenu.contains(event.target) && !openMobileMenu.contains(event.target)) {
            mobileMenu.classList.remove('show');
        }
    });

    openCatalog.addEventListener("click", () =>{
        catalog.classList.add('show');
    })
    closeCatalog.addEventListener("click", () =>{
        catalog.classList.remove('show');
    })
    openDesktopCatalog.addEventListener("click", () => {
        desktopCatalog.classList.toggle('show');
    })
});


