function hover(e)
{
	if (!e) var e=window.event;
	whichlink= (e.target)?e.target.id:e.srcElement.id;
	if (whichlink=="order") desc="Order a product";
	else if (whichlink=="email") desc="Send us a message";
	else if (whichlink=="complain") desc="Insult us, our products, or our families";
	d=document.getElementById("description");
	d.innerHTML=desc;
}
function cleardesc()
{
	var d=document.getElementById("description");
	d.innerHTML="";
}
orderlink=document.getElementById("order");
orderlink.onmouseover=hover;
orderlink.onmouseout=cleardesc;
emaillink=document.getElementById("email");
emaillink.onmouseover=hover;
emaillink.onmouseout=cleardesc;
complainlink=document.getElementById("complain");
complainlink.onmouseover=hover;
complainlink.onmouseout=cleardesc;
