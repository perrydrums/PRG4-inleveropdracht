class Item{

    public name : string = "Item";
    public cost : number = 120;
    public speed : number = 5;


    static numPortals :         number = 0;
    static numDreamInceptors :  number = 0;
    static numMrMeeseeks :      number = 0;


    constructor(){

    }

    activateItem(theName : string, theCost : number){

        if(Game.points >= theCost){

            Game.points -= theCost;

            console.log(theName + " with speed 000 bought for " + theCost);

            if(theName == "portal"){
                Item.numPortals++;
                document.getElementById(theName).innerHTML = "[" + Item.numPortals + "] " + theName.toUpperCase() + "S (" + theCost + " Morties)";
                var audio = document.getElementById("portalAudio");
                audio.pause(); //ignore errors, it works:p
                audio.currentTime = 0;
                audio.play();
            }
            if(theName == "dreamInceptor"){
                Item.numDreamInceptors++;
                document.getElementById(theName).innerHTML = "[" + Item.numDreamInceptors + "] " + theName.toUpperCase() + "S (" + theCost + " Morties)";
                var audio = document.getElementById("dreamInceptorAudio");
                audio.pause();
                audio.currentTime = 0;
                audio.play();
            }
            if(theName == "mrMeeseeks"){
                Item.numMrMeeseeks++;
                document.getElementById(theName).innerHTML = "[" + Item.numMrMeeseeks + "] " + theName.toUpperCase() + "S (" + theCost + " Morties)";
                var audio = document.getElementById("mrMeeseeksAudio");
                audio.pause();
                audio.currentTime = 0;
                audio.play();
            }

            document.getElementById(theName).style.color = "green";
        }else{

            let scoreText = document.getElementById("morties");
            let switcher = false;

            
                for(var i = 0; i < 5; i++){
                    let intervalID = setInterval(function(){
                        if(switcher){
                            scoreText.style.color = "white";
                            switcher = false;
                            clearInterval(intervalID);
                        }else{
                            scoreText.style.color = "red";
                            switcher = true;
                        }
                    }, 100);
                }

            var audio = document.getElementById("errorAudio");
            audio.pause();
            audio.currentTime = 0;
            audio.play();
        }
    }

    public checkItems(){

        // RATE / 60 === RATE per second [if browser FPS = 60]

        Game.points += Item.numPortals * (1/60);
        Game.points += Item.numDreamInceptors * (6/60);
        Game.points += Item.numMrMeeseeks * (20/60);

    }


}