// script.js

document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.querySelector(".burger-menu");

    burgerMenu.addEventListener("click", function () {
        burgerMenu.classList.toggle("active"); // Toggle the "active" class on the burger menu
    });

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
        "21.jpg",
        "22.jpg",
        "23.jpg",
        "24.jpg",
        "25.jpg",
        "26.jpg",
        "27.jpg",
        "28.jpg"
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
