class StartScreen{

    private background : HTMLElement;

    constructor(){

        this.background = document.createElement("div");
        document.body.appendChild(this.background);
        this.background.setAttribute("id", "overlay");

        this.background = document.createElement("div");
        document.body.appendChild(this.background);
        this.background.setAttribute("id", "startScreen");

        let inside = document.createElement("div");
        this.background.appendChild(inside);
        inside.setAttribute("id", "startScreenInside");


        inside.innerHTML = "<h3>Morty Machine</h3><h4>A Rick and Morty inspired clicker game</h4><h2>Make sure to turn up the volume!</h2>";


        let button = document.createElement("button");
        inside.appendChild(button);
        button.setAttribute("id", "button");
        button.innerHTML = "Start Game";
        button.addEventListener("click", this.startGame);

    }

    private startGame(){
        document.getElementById("startScreen").remove();
        document.getElementById("overlay").remove();

        let startAudio = document.getElementById("startAudio");
        startAudio.play();
        new Game;
    }

}