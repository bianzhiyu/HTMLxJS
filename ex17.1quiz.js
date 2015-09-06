/**
 * Created by dell on 2015/9/4.
 */
var qn=0;
function getQuestions()
{
    var obj=document.getElementById("question");
    obj.firstChild.nodeValue="(please wait)";
    ajaxCallback = nextQuestion;
    ajaxRequest("ex17.1questions.xml");
}
function nextQuestion()
{
    questions=ajaxreq.responseXML.getElementsByTagName("q");
    var obj=document.getElementById("question");
    if (qn<questions.length)
    {
        var q=questions[qn].firstChild.nodeValue;
        obj.firstChild.nodeValue=q;
    }
    else
    {
        obj.firstChild.nodeValue="(no more questions)";
    }
}
function checkAnswer()
{
    var answer=ajaxreq.responseXML.getElementsByTagName("a");
    var a=answer[qn].firstChild.nodeValue;
    var answerfield=document.getElementById("answer");
    if (a==answerfield.value) alert("Correct!");
    else alert("Incorrect. The correct answer is: "+a);
    qn++;
    answerfield.value="";
    nextQuestion();
}
var obj=document.getElementById("startq");
obj.onclick=getQuestions;
ans=document.getElementById("submit");
ans.onclick=checkAnswer;