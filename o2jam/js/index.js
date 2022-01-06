var mainmenu = document.getElementsByClassName("mainmenu");
var submenus = document.getElementsByClassName("submenu");

slideIndex = 1;
showslides(slideIndex);

function showslides(n){
    slides = document.getElementsByClassName("eventdiv"); //배열변수
    for(i=0; i<slides.length; i++){
        slides[i].style.display="none";
    }
    if(n>slides.length){
        slideIndex = 1;
    }
    if(n<1){
        slideIndex = slides.length;
    }
    slides[slideIndex-1].style.display="block";

    //dot 설정
    dots = document.getElementsByClassName("btn");
    for(i=0;i<dots.length;i++){
        dots[i].classList.remove("active");
    }
    dots[slideIndex-1].classList.add("active");
}

function plusslide(n){
    showslides(slideIndex+=n);
}

showslides();