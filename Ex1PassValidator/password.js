function Password(){

    var in1= document.getElementById("inp1").value;
    var in2= document.getElementById("inp2").value;

    

    if((in1.length < 8) || (in2.length <8)){
        
        alert("Password not long enough, both must be 8 or greater characters");


    }
    else if(in1!=in2){
        alert("Both don't match");
    }
    else if(in1==in2){
        alert("Password Success");
    }

}