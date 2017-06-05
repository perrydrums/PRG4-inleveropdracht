class Game{

    private food = new Food();
    
    constructor(){

        requestAnimationFrame(() => this.gameLoop());
    }

    private gameLoop(){

        requestAnimationFrame(() => this.gameLoop());
    }

} 