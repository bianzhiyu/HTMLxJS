/**
 * Created by dell on 2015/9/5.
 */
var t;
function StartSearch()
{
    if (t) window.clearTimeout(t);
    t=window.setTimeout("LiveSearch();",200);
}
function LiveSearch()
{
    var query=document.getElementById("searchlive").value;
    var filename="ex17.2search.php?query="+query;
    ajaxCallback=DisplayResults;
    ajaxRequest(filename);
}
function DisplayResults()
{
    var ul=document.getElementById("list");
    var div=document.getElementById("results");
    div.removeChild(ul);
    ul=document.createElement("UL");
    ul.id="list";
    var names=ajaxreq.responseXML.getElementsByTagName("name");
    for (var i=0;i<names.length;i++)
    {
        var li=document.createElement("li");
        var name=names[i].firstChile.nodeValue;
        var text=document.createTextNode(name);
        li.appendChild(text);
        ul.appendChild(li);
    }
    if (names.length==0)
    {
        var li=document.createElement("li");
        li.appendChild(document.createTextNode("No Results."));
        ul.appendChild(li);
    }
    div.appendChild(ul);
}
var obj=document.getElementById("searchlive");
obj.onkeydown = StartSearch;