const carouselImages = [
    "img/01.jpg",
    "img/02.jpg",
    "img/03.jpg",
    "img/04.jpg",
    "img/05.jpg"
];



let carousel = document.getElementById('carousel');

for( let i=0; i<carouselImages.length; i++){
    
    carousel.innerHTML +=`<div class="image">
                            <img src="${carouselImages[i]}">
                        </div>`;
};

const imageContainer = document.querySelectorAll('.image');

let prev = document.getElementById('prev').addEventListener('click', goUp);
let next = document.getElementById('next').addEventListener('click', goDown);
let imageSelector = 0;

imageContainer[imageSelector].classList.add('show');

function goUp(event){
    for(let x=0; x<1; x++ ){
        imageContainer[imageSelector].classList.remove('show');
        imageSelector--;
        if(imageSelector<0){
            imageSelector = 4;  
        }
        imageContainer[imageSelector].classList.add('show');
    }
};

function goDown(event){
    for(let x=0; x<1; x++ ){
        imageContainer[imageSelector].classList.remove('show');
        imageSelector++;
        if(imageSelector>4){
            imageSelector = 0;  
        }
        imageContainer[imageSelector].classList.add('show');
    }
    
};




