
function slideLeft(id) {
    const slider = document.getElementById(id);
    slider.scrollBy({ left: -700, behavior: 'smooth' });
}
function slideRight(id) {
    const slider = document.getElementById(id);
    slider.scrollBy({ left: 700, behavior: 'smooth' });
}
