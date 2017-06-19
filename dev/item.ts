class Item{

    protected game : Game;

    static numPortals :         number = 0;
    static numDreamInceptors :  number = 0;
    static numMrMeeseeks :      number = 0;


    constructor(g:Game){
        this.game = g;
    }

    protected activateItem(theName : string, theCost : number){

        if(this.game.points >= theCost){

            this.game.points -= theCost;

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

    private checkItems(){

        // RATE / 60 === RATE per second [if browser FPS = 60]

        this.game.points += Item.numPortals * (1/60);
        this.game.points += Item.numDreamInceptors * (6/60);
        this.game.points += Item.numMrMeeseeks * (20/60);

    }


}