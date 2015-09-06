/**
 * Created by dell on 2015/9/5.
 */
var numslides= 0;
var currentslide=0;
var x=0;
var slides = new Array();
function MakeSlideShow()
{
    var imgs = document.getElementsByTagName("img");
    for (var i=0;i<imgs.length;i++)
    {
        if (imgs[i].className != "slide") continue;
        slides[numslides] = imgs[i];
        imgs[i].style.zIndex =( numslides==0 ? 10 : 0);
        imgs[i].style.opacity=(numslides==0 ? 100 : 0);
        imgs[i].onclick = NextSlide;
        numslides++;
    }
    oldslide=numslides-1;
}
function NextSlide()
{
    slides[currentslide].style.zIndex=9;
    slides[oldslide].style.zIndex=0;
    oldslide = currentslide;
    currentslide = (currentslide + 1) % numslides;
    slides[currentslide].style.opacity=0;
    slides[currentslide].style.zIndex=10;
    x=100;
    AnimateSlide();
}
function AnimateSlide()
{
    x-=2;
    slides[currentslide].style.opacity=100-x;
    slides[oldslide].style.opacity=x;
    if (x > 0) window.setTimeout("AnimateSlide();",20);
}
window.onload = MakeSlideShow;