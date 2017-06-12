/// <reference path="item.ts"/>

class Portal extends Item{


    constructor(g:Game){
        super(g);

        let li = document.createElement("li");
        li.setAttribute("id", "portal");
        document.getElementById("shopList").appendChild(li);
        li.innerHTML = "PORTAL (50 Morties)";

        document.getElementById("portal").addEventListener("click", () => this.setItem());
    }

    private setItem(){
        super.activateItem("portal", 50);
    }
}


class DreamInceptor extends Item{

    constructor(g:Game){
        super(g);

        let li = document.createElement("li");
        li.setAttribute("id", "dreamInceptor");
        document.getElementById("shopList").appendChild(li);
        li.innerHTML = "DREAMINCEPTOR (250 Morties)";

        document.getElementById("dreamInceptor").addEventListener("click", () => this.setItem());
    }

    private setItem(){
        super.activateItem("dreamInceptor", 250);
    }

}


class MrMeeseeks extends Item{

    constructor(g:Game){
        super(g);

        let li = document.createElement("li");
        li.setAttribute("id", "mrMeeseeks");
        document.getElementById("shopList").appendChild(li);
        li.innerHTML = "MRMEESEEK (3000 Morties)";

        document.getElementById("mrMeeseeks").addEventListener("click", () => this.setItem());
    }

    private setItem(){
        super.activateItem("mrMeeseeks", 3000);
    }

}