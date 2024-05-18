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

const products = [
    {
      title: "AstroFiction",
      author: "John Doe",
      price: 49.9,
      image: "./assets/products/img6.png"
    },
    {
      title: "Space Odissey",
      author: "Marie Anne",
      price: 35,
      image: "./assets/products/img1.png"
    },
    {
      title: "Doomed City",
      author: "Jason Cobert",
      price: 0,
      image: "./assets/products/img2.png"
    },
    {
      title: "Black Dog",
      author: "John Doe",
      price: 85.35,
      image: "./assets/products/img3.png"
    },
    {
      title: "My Little Robot",
      author: "Pedro Paulo",
      price: 0,
      image: "./assets/products/img5.png"
    },
    {
      title: "Garden Girl",
      author: "Ankit Patel",
      price: 45,
      image: "./assets/products/img4.png"
    }
  ]

// Menu section
function menuHandler() {
    // Menu Section
    document.querySelector("#open-nav-menu").addEventListener("click", function () {
        document.querySelector("header nav .wrapper").classList.add("nav-open");
    });

    document.querySelector("#close-nav-menu").addEventListener("click", function () {
        document.querySelector("header nav .wrapper").classList.remove("nav-open");
    });
}

// Temperature conversion
function celsiusToFahr(temperature) {
    let fahr = (temperature * 9 / 5) + 32;

    return fahr;
}

// Greeting section
function greetingHandler() {
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

    const weatherCondition = "sunny";
    const userLocation = "Rio de Janerio";
    let temperature = 30;

    let celsiusText = `The weather is ${weatherCondition} in ${userLocation} and it's ${temperature.toFixed(1)}°C outside. `;
    let fahrText = `The weather is ${weatherCondition} in ${userLocation} and it's ${celsiusToFahr(temperature).toFixed(1)}°F outside. `;

    document.querySelector("#greeting").innerHTML = greetingText;
    document.querySelector("p#weather").innerHTML = celsiusText;

    // Setting weather text based on temperature unit
    document.querySelector(".weather-group").addEventListener("click", function (event) {
        if (event.target.id == "celsius") {
            document.querySelector("p#weather").innerHTML = celsiusText;
        } else if (event.target.id == "fahr") {
            document.querySelector("p#weather").innerHTML = fahrText;
        }


    });
}

// Gallery section
function clockHandler() {
    // Setting the local time on the screen
    setInterval(function () {
        let localTime = new Date();

        document.querySelector("span[data-time=hours]").innerHTML = localTime.getHours().toString().padStart(2, "0");
        document.querySelector("span[data-time=minutes]").innerHTML = localTime.getMinutes().toString().padStart(2, "0");
        document.querySelector("span[data-time=seconds]").innerHTML = localTime.getSeconds().toString().padStart(2, "0");
    }, 1000);
}

// Gallery section
function galleryHandler() {
    let mainImage = document.querySelector("#gallery > img");
    let thumbnails = document.querySelector("#gallery .thumbnails")

    mainImage.src = galleryImages[0].src;
    mainImage.alt = galleryImages[0].alt;

    galleryImages.forEach(function (image, index) {
        let thumb = document.createElement("img");
        thumb.src = image.src;
        thumb.alt = image.alt;
        thumb.dataset.arrayIndex = index;
        thumb.dataset.selected = index === 0 ? true : false;

        thumb.addEventListener("click", function (event) {
            let selectedIndex = event.target.dataset.arrayIndex;
            let selectedImage = galleryImages[selectedIndex];

            mainImage.src = selectedImage.src;
            mainImage.alt = selectedImage.alt;

            thumbnails.querySelectorAll("img").forEach(function (img) {
                img.dataset.selected = false;
            });

            event.target.dataset.selected = true;
        });

        thumbnails.appendChild(thumb);
    });
}

function productsHandler() {
    let productsSection = document.querySelector(".products-area");

    // Run a loop through the prodcts and create an HTML element(product-item") for each of them
    products.forEach(function(product, index){
        // Create the HTML element for the individual product
        let productElm = document.createElement("div");
        productElm.classList.add("product-item");
        
        // Create the product image
        let productImg = document.createElement("img");
        productImg.src = product.image;
        productImg.alt = "Image for " + product.title;

        // reate the product details section
        let productDetails = document.createElement("div");
        productDetails.classList.add("product-details");

        // Create product title, author, priceTitle and price
        let productTitle = document.createElement("h3");
        productTitle.classList.add("product-title");
        productTitle.textContent = product.title;

        let productAuthor = document.createElement("p");
        productAuthor.classList.add("product-author");
        productAuthor.textContent = product.author;

        let priceTitle = document.createElement("p");
        priceTitle.classList.add("price-title");
        priceTitle.textContent = "Price";

        let productPrice = document.createElement("p");
        productPrice.classList.add("product-price");
        productPrice.textContent = product.price > 0 ? "$" + product.price.toFixed(2) : "Free";

        // Append product details
        productDetails.append(productTitle);
        productDetails.append(productAuthor);
        productDetails.append(priceTitle);
        productDetails.append(productPrice);


        // Add all child HTML elements of the product
        productElm.append(productImg);
        productElm.append(productDetails);

        // Add the complete individualproductto the Product Section
        productsSection.append(productElm);
    });
}


// Page load
menuHandler();
greetingHandler();
clockHandler();
galleryHandler();
productsHandler();