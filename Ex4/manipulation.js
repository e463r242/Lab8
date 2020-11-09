function changeBorder(){

    var red=document.getElementById("rbor").value;
    var green=document.getElementById("gbor").value;
    var blue=document.getElementById("bbor").value;
    var width=document.getElementById("wbor").value;

    document.getElementById("manipulation").style.border=width +'px'+ ' dashed '+"rgb("+ red+","+green+","+blue+")";
}

function changeBackground(){

    var red=document.getElementById("rback").value;
    var green=document.getElementById("gback").value;
    var blue=document.getElementById("bback").value;
    var width=document.getElementById("wback").value;

    document.getElementById("manipulation").style.backgroundColor="rgb("+ red+","+green+","+blue+")";
    document.getElementById("manipulate").style.backgroundSize= width+"px"+ " solid ";

}
