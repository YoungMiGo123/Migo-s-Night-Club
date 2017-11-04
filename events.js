
var myIndex = 0;

SlideShow();

function SlideShow(){
    var i;
    var images = document.getElementsByClassName("mySlides");
    for(i = 0; i < images.length;i++) images[i].style.display = "none";

    myIndex++;
    if(myIndex > images.length){
        myIndex =1;
    }

    images[myIndex-1].style.display = "block";
    setTimeout(SlideShow,3000);
}
