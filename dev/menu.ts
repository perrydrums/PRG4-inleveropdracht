class Menu{

    items : Item;
    private game : Game;
    private audioHandler : AudioHandler;

    constructor(g:Game){

        this.game = g;

        this.items = new Item(this.game);

        let shopList = document.createElement("ul");
        shopList.setAttribute("id", "shopList");
        document.getElementById("menu").appendChild(shopList);

        this.audioHandler = new AudioHandler();

        let rick = document.createElement("div");
        rick.setAttribute("id", "menuBackground");
        document.getElementById("menu").appendChild(rick);
        rick.addEventListener("click", ()=> this.audioHandler.playRick());

        let portal          = new Portal(this.game);
        let dreamInceptor   = new DreamInceptor(this.game);
        let mrMeeseeks      = new MrMeeseeks(this.game);

    }

}