/**
 * Created by dell on 2015/9/3.
 */
function Toggle(e)
{
    if (!document.getElementById) return;
    if (!e) e=window.event;

    var whichlink=(e.target)? e.target.id: e.srcElement.id;
    var obj=document.getElementById(whichlink+"menu");
    var visible=(obj.style.display=="block");

    var key=document.getElementById(whichlink);
    var keyname=key.firstChild.nodeValue.substring(3);

    if (visible)
    {
        obj.style.display="none";
        key.firstChild.nodeValue="[+]"+keyname;
    }
    else
    {
        obj.style.display="block";
        key.firstChild.nodeValue="[-]"+keyname;
    }
}
function act4()
{
    if (!document.getElementById) return;

    var obj=document.getElementById("part4");
    var oo2=document.getElementById("part4menu");

    if (oo2.style.display=="block")
    {
        oo2.style.display="none";
        obj.firstChild.nodeValue[1]="+";
    }
    else
    {
        oo2.style.display="block";
        obj.firstChild.nodeValue[1]="-";
    }
}
document.getElementById("products").onclick=Toggle;
document.getElementById("support").onclick=Toggle;
document.getElementById("contact").onclick=Toggle;
document.getElementById("part4").onclick=act4;
