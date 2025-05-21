const max=100;
const min=1;
const answer=Math.floor(Math.random()*(max-min+1))+min;
let guess;
let attempt=0;
let flag=true;
while(flag)
{
    guess=window.prompt(`Enter the number btw ${min}-${max}:`);
    guess=Number(guess);
    console.log(guess);
    if(isNaN(guess))
    {
        window.alert("enter valid one");
    }
    else if(guess<min || guess>max){
        window.alert("enter valid value");
    }
    else{
        if(guess<answer){
            window.alert("You too low!!");
            attempt++;
        }
        else if(guess>answer){
            window.alert("you too high!!");
            attempt++;
        }
        else{
            window.alert("you are cirrect ");
            flag=false;
            break;
        }
    }
    

}