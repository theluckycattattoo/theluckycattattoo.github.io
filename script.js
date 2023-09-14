// script.js

document.addEventListener("DOMContentLoaded", function () {
    let menuVisible = false;

    function toggleMenu() {
        const burgerMenuList = document.getElementById("burger-menu-list");

        if (menuVisible) {
            burgerMenuList.style.visibility = "hidden";
        } else {
            burgerMenuList.style.visibility = "visible";
        }

        menuVisible = !menuVisible;
    }

    // Hardcoded array of image file names
    const imageFilenames = [
        "1.jpg",
        "2.jpg",
        "3.jpg",
        "4.jpg",
        "5.jpg",
        "6.jpg",
        "7.jpg",
        "8.jpg",
        "9.jpg",
        "10.jpg",
        "11.jpg",
        "12.jpg",
        "13.jpg",
        "14.jpg",
        "15.jpg",
        "16.jpg",
        "17.jpg",
        "18.jpg",
        "19.jpg",
        "20.jpg",
        "21.jpg"
        // Add more filenames as needed
    ];

    const gallery = document.getElementById("imageGallery");

    // Loop through the hardcoded array and create gallery items
    imageFilenames.forEach(filename => {
        const galleryItem = document.createElement("div");
        galleryItem.classList.add("gallery-item");

        const image = document.createElement("img");
        image.src = "images/" + filename; // Assuming images are in the "images" folder
        image.alt = filename;

        galleryItem.appendChild(image);
        gallery.appendChild(galleryItem);
    });
});
