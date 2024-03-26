function toggleResponsiveNavbar() {
    const navbar = document.querySelector('.navbar');
    if (window.innerWidth <= 768) {
        navbar.classList.add('responsive');
    } else {
        navbar.classList.remove('responsive');
    }
}


toggleResponsiveNavbar();


window.addEventListener('resize', toggleResponsiveNavbar);


let slideIndex = 0;

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}


function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
}

function displayCurrentDate() {
    const dateElement = document.querySelector('.current-date');
    const currentDate = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);
    dateElement.textContent = formattedDate;
}


function displayRandomQuote() {
    const quotes = [
        "The Earth laughs in flowers. - Ralph Waldo Emerson",
        "Where flowers bloom, so does hope. - Lady Bird Johnson",
        "Flowers are the music of the ground. - Edwin Curran",
        "Happiness held is the seed; Happiness shared is the flower. - John Harrigan",
        "A rose can never be a sunflower, and a sunflower can never be a rose. All flowers are beautiful in their own way. - Miranda Kerr"
    ];
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteElement = document.querySelector('.quote');
    quoteElement.textContent = quotes[randomIndex];
}

function displayRandomBouquets() {
    const bouquetImages = document.querySelectorAll('.bouquet-image');
    bouquetImages.forEach(image => {
        const randomIndex = Math.floor(Math.random() * 9) + 1; 
        image.src = `Images/pic ${randomIndex}.jpg`;
        image.alt = `Bouquet ${randomIndex}`;
    });
}

// Call functions when DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
    showSlides(); 
    displayCurrentDate();
    displayRandomQuote(); 
displayRandomBouquets(); 
});
