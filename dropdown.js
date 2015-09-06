/**
 * Created by dell on 2015/9/6.
 */
var t=false,current;
function SetupMenu()
{
    if (!document.getElementsByTagName) return;
    var items=document.getElementsByTagName("LI");//it must be big letter li
    for (var i=0;i<items.length;i++)
    {
        if (items[i].className!="menu") continue;
        var thelink=findChild(items[i],"A");
        thelink.onmouseover=ShowMenu;
        thelink.onmouseout=StartTimer;
        var ul;
        if (ul=findChild(items[i],"UL"))
        {
            ul.style.display="none";
            for (var j=0;j<ul.childNodes.length;j++)
            {
                ul.childNodes[j].onmouseover=ResetTimer;
                ul.childNodes[j].onmouseout=StartTimer;
            }
        }
    }
}
function findChild(obj,tag)
{
    var cn=obj.childNodes;
    for (var k=0;k<cn.length;k++)
    {
        if (cn[k].nodeName==tag) return cn[k];
    }
    return false;
}
function ShowMenu(e)
{
    if (!e) var e=window.event;
    var thislink=(e.target? e.target: e.srcElement);
    ResetTimer();
    if (current) HideMenu(current);
    thislink=thislink.parentNode;
    current=thislink;
    ul=findChild(thislink,"UL");
    if (!ul) return;
    ul.style.display="block";
}
function HideMenu(thelink)
{
    var ul=findChild(thelink,"UL");
    if (!ul) return;
    ul.style.display="none";
}
function ResetTimer()
{
    if (t) window.clearTimeout(t);
}
function StartTimer()
{
    t=window.setTimeout("HideMenu(current)",200);
}
window.onload=SetupMenu;