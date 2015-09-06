var names=new Array();
var len=0;
do
{
	next = window.prompt("Enter the Next Name(end by pressing cancel button)","");
	if (next>" ") names[len++]=next;
}while (next>" ");
document.write("Direct txt:<br />");
document.write(next);
document.write("<br />");
document.write("<h2>"+(names.length)+" names entered.</h2>");
document.write("<ol>");
for (i in names)
{
	document.write("<li>"+names[i]+"<br /></li>");
}
document.write("</ol>");