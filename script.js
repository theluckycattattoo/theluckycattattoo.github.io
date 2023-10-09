document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById("imageGallery")) {
        const gallery = document.getElementById("imageGallery");
        // Hardcoded array of image file names
        const imageFilenames = [];
        for (let i = 1; i <= 100; i++) {
            imageFilenames.push(`${i}.JPG`);
        }

        // Loop through the hardcoded array and create gallery items
        imageFilenames.forEach((filename) => {
            const galleryItem = document.createElement("div");
            galleryItem.classList.add("gallery-item");

            const image = document.createElement("img");
            image.src = "images/" + filename; // Assuming images are in the "images" folder
            image.alt = filename;
            image.setAttribute("loading", "lazy"); // Correct way to set the loading attribute

            galleryItem.appendChild(image);
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
