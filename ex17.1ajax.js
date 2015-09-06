/**
 * Created by dell on 2015/9/4.
 */
/**
 * global variables to keep track of the request
 * and the functions to call when done
*/
var ajaxreq=false,ajaxCallback;
//ajaxRequest : Set up a request
function ajaxRequest(filename)
{
    try
    {
        //Firefox / IE 7 / Others
        ajaxreq = new XMLHttpRequest();
    }
    catch(err)
    {
        try
        {
            //IE 5,6
            ajaxreq=new ActiveXObject("Microsoft.XMLHTTP");
        }
        catch(err)
        {
            return false;
        }
    }
    ajaxreq.open("GET",filename);
    ajaxreq.onreadystatechange = ajaxResponse;
    ajaxreq.send(null);
}
//ajax Response: Waits for response and calls a function
function ajaxResponse()
{
    if (ajaxreq.readyState != 4) return;
    if (ajaxreq.status==200) //if the request succeeded
    {
        if (ajaxCallback) ajaxCallback();
    }
    else alert("Request failed: "+ajaxreq.statusText);
    return true;
}