var x=100,y=150;
function pos(dx,dy)
{
    if (!document.getElementById) return;
    x+=dx*10;
    y+=dy*10;
    oo=document.getElementById("square");
    oo.style.top=y+"px";
    oo.style.left=x+"px";
}
function hidesquare()
{
    if (!document.getElementById) return;
    oo=document.getElementById("square");
    oo.style.display="none";
}
function showsquare()
{
    if (!document.getElementById) return;
    oo=document.getElementById("square");
    oo.style.display="block";
}