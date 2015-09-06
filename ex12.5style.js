/**
 * Created by dell on 2015/9/2.
 */
function change(event,name)
{
    var i=document.form1[event.target?event.target.name:event.srcElement.name].selectedIndex;
    var clr=document.form1[event.target?event.target.name:event.srcElement.name].options[i].value;
    document.getElementById(name).style.color=clr;
}
