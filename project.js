
// post slide
function slideLeft(id) {
    const slider = document.getElementById(id);
    slider.scrollBy({ left: -300, behavior: 'smooth' });
}
function slideRight(id) {
    const slider = document.getElementById(id);
    slider.scrollBy({ left: 300, behavior: 'smooth' });
}

// Menu slider
function slideLeftMenu(id) {
    const slider = document.getElementById(id);
    slider.scrollBy({ left: -350, behavior: 'smooth' });
}
function slideRightMenu(id) {
    const slider = document.getElementById(id);
    slider.scrollBy({ left: 350, behavior: 'smooth' });
}

// thumbnail slider
function slideLeftthumbnail(id) {
    const slider = document.getElementById(id);
    slider.scrollBy({ left: -500, behavior: 'smooth' });
}
function slideRightthumbnail(id) {
    const slider = document.getElementById(id);
    slider.scrollBy({ left: 500, behavior: 'smooth' });
}

// Reviews Slider
function slideLeftreview(id) {
    const slider = document.getElementById(id);
    slider.scrollBy({ left: -700, behavior: 'smooth' });
}
function slideRightreview(id) {
    const slider = document.getElementById(id);
    slider.scrollBy({ left: 700, behavior: 'smooth' });
}


function slideLeftre(id) {
    const slider = document.getElementById(id);
    slider.scrollBy({ left: -700, behavior: 'smooth' });
}
function slideRightre(id) {
    const slider = document.getElementById(id);
    slider.scrollBy({ left: 700, behavior: 'smooth' });
}




window.onload = function () {
    fetch('project.xml')  // Change the path to the actual path of your XML file
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const xml = parser.parseFromString(data, "application/xml");
            
            // Loop through each slider in the XML
            const sliders = xml.getElementsByTagName("slider");

            // Loop through each slider and update the corresponding HTML container
            Array.from(sliders).forEach(slider => {
                const sliderId = slider.getAttribute('id');  // Get the slider ID (graphic, social, etc.)
                const images = slider.getElementsByTagName("image");
            
                // Get the slider container by its ID from the HTML
                const container = document.getElementById(sliderId);
            
                // Clear existing content inside the container
                container.innerHTML = '';
            
                // Loop through all images and add them to the corresponding slider
                Array.from(images).forEach(imageElement => {
                    const imageUrl = imageElement.textContent;
                    const slide = document.createElement('div');
                    slide.className = 'slide';  // Add the common class name for each slide
            
                    // Create the image element
                    const img = document.createElement('img');
                    img.src = imageUrl;
                    img.alt = "Slider Image";
            
                    // Append the image to the slide and then append the slide to the container
                    slide.appendChild(img);
                    container.appendChild(slide);
                });
            });
            
        })
        .catch(error => console.error("Error loading XML:", error));
};
