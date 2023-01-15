let slides = document.querySelectorAll('.slide-container');
let next = document.querySelectorAll('.next');
let previous = document.querySelectorAll('.previous');

for(let i = 0; i < next.length; i++){
    next[i].addEventListener('click',function(){
        for(let i = 0; i < slides.length; i++){
            slides[i].classList.toggle('active')
            slides[i].style.animation = 'slideContent .5s linear';
        }
    })
}

for(let i = 0; i < next.length; i++){
    previous[i].addEventListener('click',function(){
        for(let i = 0; i < slides.length; i++){
            slides[i].classList.toggle('active');
            slides[i].style.animation = 'slideContentBack .5s linear';
        }
    })
}
