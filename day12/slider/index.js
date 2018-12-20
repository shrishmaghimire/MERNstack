const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

const imageArr= ['sagun','shrishma','anika']
let currentImage=0;

prevButton.addEventListener('click',prevImg);
nextButton.addEventListener('click',prevImg);
