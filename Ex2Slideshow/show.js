var slideIndex=1;


function next(){

    if(slideIndex==5){
        slideIndex=1;
    }
    else{    
        slideIndex=slideIndex+1;
    }
    document.getElementById('slide').src="Pic"+slideIndex+".jpg";


}

function previous(){

    if(slideIndex==1){
        slideIndex=5;
    }
    else{
        slideIndex=slideIndex-1;
    }
    document.getElementById('slide').src="Pic"+slideIndex+".jpg";
}