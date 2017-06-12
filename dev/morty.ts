class Morty{

    private div : HTMLElement;

    private game:Game;

    constructor(g:Game){

        this.game = g;

        this.div = document.createElement("div");
        this.div.setAttribute("id", "morty");
        document.body.appendChild(this.div);

        this.div.addEventListener("click", ()=> this.game.addPoint());

    }

}