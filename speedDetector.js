// input car speed
let prompt = require("prompt-sync")({sigint: true});
let speed = parseInt(prompt("enter car speed"));
 
let output;
let demeritpoints = 0


//check car speed
if(speed <= 70){
output = "OK";
}else{
    let speedDiffernce = (speed - 70);
    let target = Math.floor(speedDiffernce / 5);
    demeritpoints = target;
    if(demeritpoints >= 12){
        output = "lisence suspended";
    }else if(demeritpoints >=0 && demeritpoints < 12){
        output = demeritpoints
    }
};

console.log(output)



