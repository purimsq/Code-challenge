// prompt user to input student marks
let prompt = require("prompt-sync")({sigint: true});
let score = prompt("please enter score")

// convert score to a number
score =parseFloat(score)

//check if input score is between o to 100
if(score <0 || score >100){
//display an error if input is not between 0 to 100
console.log ("Error;enter a valid score")

}
else{
    console.log("Accepted",score)
}

// display grade depending on score
if(score > 79)
return "you got an A"

 if(score >= 60 && score <=79)
 return "you got a B"

 if(score >49 && score <=59)
 return "you got a C"

 if(score >=40 && score <=49)
 return "you got a D"

 if(score <40)
 return "you got an E"


