/// <reference path="item.ts"/>

class Portal extends Item{

    constructor(){
        super();

        let li = document.createElement("li");
        li.setAttribute("id", "portal");
        document.getElementById("shopList").appendChild(li);
        li.innerHTML = "PORTAL (50 Morties)";

        document.getElementById("portal").addEventListener("click", e => this.setItem(e));
    }

    private setItem(e:any){
        super.activateItem("portal", 50);
    }
}


class DreamInceptor extends Item{

    constructor(){
        super();

        let li = document.createElement("li");
        li.setAttribute("id", "dreamInceptor");
        document.getElementById("shopList").appendChild(li);
        li.innerHTML = "DREAMINCEPTOR (250 Morties)";

        document.getElementById("dreamInceptor").addEventListener("click", e => this.setItem(e));
    }

    private setItem(e:any){
        super.activateItem("dreamInceptor", 250);
    }

}


class MrMeeseeks extends Item{

    constructor(){
        super();

        let li = document.createElement("li");
        li.setAttribute("id", "mrMeeseeks");
        document.getElementById("shopList").appendChild(li);
        li.innerHTML = "MRMEESEEK (3000 Morties)";

        document.getElementById("mrMeeseeks").addEventListener("click", e => this.setItem(e));
    }

    private setItem(e:any){
        super.activateItem("mrMeeseeks", 3000);
    }

}