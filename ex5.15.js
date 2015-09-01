var numnames=0;
var names=new Array();
function SortNames()
{
	thename=document.theform.newname.value;
	names[numnames++]=thename.toUpperCase();
	names.sort();
	str="";
	for (i=0;i<names.length;i++)
	{
		str+=i+" : "+names[i]+"\n";
	}
	document.theform.sorted.value=str;
}