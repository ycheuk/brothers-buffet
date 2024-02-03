document.addEventListener("DOMContentLoaded", function () {
    var header = document.querySelector(".header");

    window.addEventListener("scroll", function () {
        var scrollPosition = window.scrollY;

        if (scrollPosition > 50) {
            header.style.backgroundColor = "#333"; /* Change the background color when scrolled */
        } else {
            header.style.backgroundColor = "rgba(0, 0, 0, 0.5)"; /* Set the initial transparent background */
        }
    });
});
