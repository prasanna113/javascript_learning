function menuHandler() {
    // Menu Section
    document.querySelector("#open-nav-menu").addEventListener("click", function() {    
    document.querySelector("header nav .wrapper").classList.add("nav-open");
    });

    document.querySelector("#close-nav-menu").addEventListener("click", function() {
    document.querySelector("header nav .wrapper").classList.remove("nav-open");
    });
}


// Greeting Section

function celsiusToFahr(temperature) {
    let fahr = (temperature * 9 / 5) + 32;
    
    return fahr;
}

let currentHour = new Date().getHours();

let greetingText;

if (currentHour < 12) {
    greetingText = "Good Morning!";
} else if (currentHour < 19) {
    greetingText = "Good Afternoon!";
} else if (currentHour < 24) {
    greetingText = "Good Evening!";
} else {
    greetingText = "Welcome!";
}
// document.querySelector("span[data-time=hours]").innerHTML = localTime.getHours().toString().padStart(2,"0");

const weatherCondition = "sunny";
const userLocation = "Rio de Janerio";
let temperature = 30;

let celsiusText = `The weather is ${weatherCondition} in ${userLocation} and it's ${temperature.toFixed(1)}°C outside. `;
let fahrText = `The weather is ${weatherCondition} in ${userLocation} and it's ${celsiusToFahr(temperature).toFixed(1)}°F outside. `;

document.querySelector("#greeting").innerHTML = greetingText;
document.querySelector("p#weather").innerHTML = celsiusText;

// Setting weather text based on temperature unit
document.querySelector(".weather-group").addEventListener("click", function(event) {
    if (event.target.id == "celsius") {
        document.querySelector("p#weather").innerHTML = celsiusText;
    } else if (event.target.id == "fahr") {
        document.querySelector("p#weather").innerHTML = fahrText;
    }


});

// Setting the local time on the screen
setInterval(function () {
    let localTime = new Date();

    document.querySelector("span[data-time=hours]").innerHTML = localTime.getHours().toString().padStart(2,"0");
    document.querySelector("span[data-time=minutes]").innerHTML = localTime.getMinutes().toString().padStart(2,"0");
    document.querySelector("span[data-time=seconds]").innerHTML = localTime.getSeconds().toString().padStart(2,"0");
}, 1000);

// Gallery section

const galleryImages = [
    {
        src: "./assets/gallery/image1.jpg",
        alt: "Thumbnail Image 1"
    },
    {
        src: "./assets/gallery/image2.jpg",
        alt: "Thumbnail Image 2"
    },
    {
        src: "./assets/gallery/image3.jpg",
        alt: "Thumbnail Image 3"
    }    
];

let mainImage = document.querySelector("#gallery > img");
let thumbnails = document.querySelector("#gallery .thumbnails")

mainImage.src = galleryImages[0].src;
mainImage.alt = galleryImages[0].alt;

// <img src="./assets/gallery/image1.jpg" 
// alt="Thumbnail Image 1" 
// data-array-index="0" data-selected="true"></img>

galleryImages.forEach(function (image, index) {
    let thumb = document.createElement("img");
    thumb.src = image.src;
    thumb.alt = image.alt;
    thumb.dataset.arrayIndex = index;
    thumb.dataset.selected = index === 0 ? true : false;
    
    thumb.addEventListener("click", function(event) {
        let selectedIndex = event.target.dataset.arrayIndex;
        let selectedImage = galleryImages[selectedIndex];

        mainImage.src = selectedImage.src;
        mainImage.alt = selectedImage.alt;

        thumbnails.querySelectorAll("img").forEach(function (img){
            img.dataset.selected = false;
        });

        event.target.dataset.selected = true;
    });

    thumbnails.appendChild(thumb);
});


menuHandler();