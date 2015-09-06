/**
 * Created by dell on 2015/9/5.
 */
var numslides=0,currentslide=0;
var slides = new Array();
function MakeSlideShow()
{
    var imgs = document.getElementsByTagName("img");
    for (var i=0;i<imgs.length;i++)
    {
        if (imgs[i].className != "slide") continue;
        slides[numslides]=imgs[i];
        imgs[i].style.display = (numslides==0)? "block" : "none";
        imgs[i].onclick=NextSlide;
        numslides++;
    }
}
function NextSlide()
{
    slides[currentslide].style.display="none";
    currentslide=(currentslide+1)%numslides;
    slides[currentslide].style.display="block";
}
window.onload=MakeSlideShow;