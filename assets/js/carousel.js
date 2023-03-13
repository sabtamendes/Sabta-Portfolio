const prevButton = document.querySelector('.carousel-button-prev');
const nextButton = document.querySelector('.carousel-button-next');
const mainFood = document.querySelector('.main-food');

let scrollAmount = 0;

prevButton.addEventListener('click', () => {
  mainFood.scrollTo({
    top: 0,
    left: (scrollAmount -= 300),
    behavior: 'smooth'
  });

  if (scrollAmount < 0) {
    scrollAmount = 0;
  }
});

nextButton.addEventListener('click', () => {
  mainFood.scrollTo({
    top: 0,
    left: (scrollAmount += 300),
    behavior: 'smooth'
  });

  if (scrollAmount > mainFood.scrollWidth - mainFood.clientWidth) {
    scrollAmount = mainFood.scrollWidth - mainFood.clientWidth;
  }
});




function showText(text) {
    const cardText = document.getElementById('card-text');
    cardText.innerHTML = text;
    cardText.style.display = 'block';
  }
  