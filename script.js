document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById("imageGallery")) {
        const gallery = document.getElementById("imageGallery");
        const imageFilenames = [];

        for (let i = 1; i <= 100; i++) {
            imageFilenames.push(`${i}.JPG`);
        }

        // Create an Intersection Observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const filename = entry.target.getAttribute("data-src");
                    const image = new Image();
                    image.src = "images/" + filename;
                    image.alt = filename;
                    image.setAttribute("loading", "lazy");

                    entry.target.appendChild(image);
                    observer.unobserve(entry.target);
                }
            });
        });

        // Loop through the hardcoded array and create gallery items
        imageFilenames.forEach((filename) => {
            const galleryItem = document.createElement("div");
            galleryItem.classList.add("gallery-item");
            galleryItem.setAttribute("data-src", filename);

            observer.observe(galleryItem);

            gallery.appendChild(galleryItem);
        });
    }

    const burgerMenu = document.getElementById("burger-menu");
    const subpageLinks = document.querySelector(".subpage-links");
    const pagecontentSection = document.querySelector(".page-content");
    const footerSection = document.querySelector("footer");

    // Add a click event listener to the burger menu
    burgerMenu.addEventListener("click", function () {
        // Toggle the 'show' class on subpage links to reveal them with animation
        this.classList.toggle("active");
        subpageLinks.classList.toggle("show");

        // Toggle the 'hide' class on the gallery and footer to hide them
        pagecontentSection.classList.toggle("hide");
        footerSection.classList.toggle("hide");
    });
});
