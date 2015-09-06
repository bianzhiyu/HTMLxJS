/**
 * Created by dell on 2015/9/2.
 */
function changehead()
{
    var i=document.form1.heading.selectedIndex;
    var headcolor=document.form1.heading.options[i].value;
    document.getElementById("head1").style.color=headcolor;
}
function changebody()
{
    var i=document.form1.body.selectedIndex;
    var doccolor=document.form1.body.options[i].value;
    document.getElementById("p1").style.color=doccolor;
}
