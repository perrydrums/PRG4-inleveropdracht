class Game{

    private morty : Morty;
    public points : number = 0;
    private sScreen : StartScreen;

    private menu : Menu;
    
    constructor(){

        this.morty = new Morty(this); //Morty regelt eventListener en spreekt addPoints aan
        this.menu = new Menu(this);

        requestAnimationFrame(() => this.gameLoop());

    }

    private gameLoop(){

        this.showPoints();

        this.menu.items.checkItems();

        requestAnimationFrame(() => this.gameLoop());

    }

    public addPoint(){
        this.points++;
        var audio = document.getElementById("mortyAudio");
        audio.pause(); //ignore errors, it works
        audio.currentTime = 0;
        audio.play();
    }

    public showPoints(){

        let totalSpeed =    Item.numPortals + 
                            Item.numDreamInceptors * 6 +
                            Item.numMrMeeseeks * 20;

        document.getElementById("morties").innerHTML = "<h1>" + Math.floor(this.points) + " Morties</h1>";
        document.getElementById("mortiesSecond").innerHTML = "<h2>" + totalSpeed + " Morties/second</h2>";
    }

} 