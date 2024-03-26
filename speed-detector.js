// input car speed
let prompt = require("prompt-sync")({sigint: true});
let speed = prompt("enter car speed")
 
let demeritpoint = 0
const speedlimit = 70

//check car speed
if(speed <=70){
return "OK"
}
else(demeritpoint =Math,floor(speedlimit - 70/5) );

//check if demerit point are more than 12
if(demeritpoint >12){
    return "licence suspended"
}

