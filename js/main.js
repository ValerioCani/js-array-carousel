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
    console.log(i);

}
