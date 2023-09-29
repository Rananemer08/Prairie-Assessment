var user_input = prompt("Enter a number please");


var is_prime = true;
var output = "";


for(let j=2; j<= user_input; j++){

    is_prime = true;
    
    for(let i=2; i< j; i ++){
        if(j % i === 0){
            is_prime = false;
        } // end for if
    }

     if(is_prime)  
        output += `${j} , `;
}

console.log(output);