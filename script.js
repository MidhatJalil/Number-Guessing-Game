let Comp = Math.floor(Math.random()*20)+1;

function guess(){
    let attempts = 0;
   let userInput = +(document.getElementById('guess').value);

    
  
    let printmsg =  document.getElementById('msg').innerHTML;

   if( userInput ===  Comp ){
    document.getElementById('msg').innerHTML = `Wooho!! Your Guess is right`;
    printmsg.style.color = "green";
   }

   else if(userInput > Comp){
    document.getElementById('msg').innerHTML = `Too high`;
    printmsg.style.color = "Red";
   }

   else if (userInput < Comp ){
    document.getElementById('msg').innerHTML = `Too low`;
     printmsg.style.color ="Blue";
   }

   else if  (userInput > 20){
    document.getElementById('msg').innerHTML = `Please Enter number between 1-20`;
   }

   else{
    document.getElementById('msg').innerHTML = `Try Again`;

   }
   attempts++;
  

   document.getElementById('attempt').innerHTML = `Attempt: ${attempts}`;

}

function refresh(){
    Comp = Math.floor(Math.random()*20)+1;
    attempt = 0;
    document.getElementById('guess').value = 0;

    document.getElementById('msg').innerHTML = "";

    document.getElementById('attempt').innerHTML = `Attempt: ${attempt}`;

    
}

