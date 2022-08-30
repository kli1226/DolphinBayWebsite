const scrollToTop = function () {

    // Construct a button 
    const scrollButton = document.createElement("button");
    scrollButton.innerHTML = "&uarr;";
    scrollButton.setAttribute("id", "scroll-button");
    document.body.appendChild(scrollButton);

    // Button based on how far the scroll goes
    const buttonAppearance = function () {
        // scrollY is a read-only property of the Window interface that returns the number of pixels that the document is currently scrolled vertically.
        if (window.scrollY > window.innerHeight) {
            scrollButton.classList.add("show");
        } else {
            scrollButton.classList.remove("show");
        }
    };
    window.addEventListener("scroll", buttonAppearance);

    // Executes the scrolling motion when clicking the button 
    const scroll = function () {
        if (window.scrollY != 0) {
            setTimeout(function () {
                window.scrollTo(0, window.scrollY - 1500);
                scroll();
            }, 1000);
        }
    };
    scrollButton.addEventListener("click", scroll);
};

scrollToTop();
