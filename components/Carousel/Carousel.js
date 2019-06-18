class Carousel {
    constructor(element){
        this.element = element;
        this.buttonRight = document.querySelector('.right-button');
        this.buttonLeft = document.querySelector('.left-button');
        this.images = document.querySelectorAll('.caro-img');
        this.images[0].style.display = 'flex';
        this.buttonRight.addEventListener('click', () => this.picChangeRight());
        this.count = 0;

        this.buttonLeft.addEventListener('click', () => this.picChangeLeft());
    }
    picChangeRight(){
        if(this.count < this.images.length-1 ){
        this.count = this.count + 1;
        }
        else{
            this.count = 0;
        }
        this.images.forEach(image => image.style.display = 'none');
        this.images[this.count].style.display = 'flex';
    }

    picChangeLeft(){
        if(this.count > 0){
        this.count = this.count - 1;
        }
        else{
            this.count = this.images.length-1 ;
        }
        this.images.forEach(image => image.style.display = 'none');
        this.images[this.count].style.display = 'flex';
    }
}

let carousel = document.querySelector('.carousel');
const carouselInstance = new Carousel(carousel);
  
/* get tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
  return new TabLink(tab);
}); */

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
  