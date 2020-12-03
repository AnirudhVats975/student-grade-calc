



var web_programming = document.getElementById("web_programming");
var maths = document.getElementById("maths");
var computer = document.getElementById("computer");
var physics = document.getElementById("physics");
var show_result=  document.getElementById("show_result");
//  declear span id

var programming_error = document.getElementById("programming_error");
var maths_error = document.getElementById("maths_error");
var computer_error = document.getElementById("computer_error");
var physics_error = document.getElementById("physics_error");

const btnResult = () =>{ 
   
    // empty input filed error

 if(web_programming.value === ""){
    document.getElementById("web_programming").setAttribute("required" , "true");
     return false;
 }
 if(web_programming.value.length >=3 && web_programming.value  >=101 ){
   
     document.getElementById("alert").style.display="block";
     document.getElementById("alert_box").innerHTML = "Fill Correct Marks In Web Programming Field";
     return false;
 }

 
  
 
 if(maths.value === ""){
    document.getElementById("maths").setAttribute("required" , "true");
    return false;
}

if(maths.value.length >=3 && maths.value  >=101 ){
    document.getElementById("alert").style.display="block";
    return false;
}



if(computer.value === ""){
    document.getElementById("computer").setAttribute("required" , "true");
    return false;
}

if(computer.value.length >=3 && computer.value  >=101 ){
    document.getElementById("alert").style.display="block";
    return false;

}



if(physics.value === ""){
    document.getElementById("physics").setAttribute("required" , "true");
    return false;
}

if(physics.value.length >=3 && physics.value  >=101 ){
    document.getElementById("alert").style.display="block";
    return false;
}

    // total marks
 const TotalMarks = parseFloat(web_programming.value) + parseFloat(maths.value)  + parseFloat(computer.value)+  parseFloat(physics.value);
   

    //persantage
  const persantage = parseFloat(TotalMarks/400)*100;





//    grade calculation
if(persantage <= 100 && persantage >=85){
    grades ="A";
}

else if (persantage <= 84 && persantage >=65){
    grades ="B";
}

else if(persantage <= 64 && persantage >=50){
    grades ="C";
}


else if(persantage <= 49 && persantage >=40){
    grades ="D";
}

else{
    grades ="F";
}


//   pass and fail condition
if(persantage >=39){
    document.getElementById("show_result").innerHTML = `Out of 400 Your Total is ${TotalMarks} and Persantage is ${persantage}%. <br> Your Grade is ${grades}. You are Pass`;
    
}


else{
    document.getElementById("show_result").innerHTML = `Out of 400 Your Total is ${TotalMarks} and Persantage is ${persantage}%. <br> Your Grade is ${grades}. You are Fail.`;
}

    
}