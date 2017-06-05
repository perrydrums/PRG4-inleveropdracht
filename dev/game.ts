class Game{

    private _morty : Morty;
    public static points : number = 0;

    private menu : Menu;

    get morty(){
        return this._morty;
    }
    set morty(morty:Morty){
        this._morty = Morty;
    }
    
    constructor(){

        this.morty = new Morty;
        this.menu = new Menu;

        document.getElementById("morty").addEventListener("click", e => this.addPoint(e));

        requestAnimationFrame(() => this.gameLoop());

    }

    private gameLoop(){

        this.showPoints();

        this.menu.items.checkItems();


        requestAnimationFrame(() => this.gameLoop());
    }

    public addPoint(e:any){
        Game.points++;
        var audio = document.getElementById("mortyAudio");
        audio.pause(); //ignore errors, it works
        audio.currentTime = 0;
        audio.play();
    }

    public showPoints(){

        let totalSpeed =    Item.numPortals + 
                            Item.numDreamInceptors * 6 +
                            Item.numMrMeeseeks * 20;

        document.getElementById("morties").innerHTML = "<h1>" + Math.floor(Game.points) + " Morties</h1>";
        document.getElementById("mortiesSecond").innerHTML = "<h2>" + totalSpeed + " Morties/second</h2>";
    }

} 