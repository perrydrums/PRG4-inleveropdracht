class Menu{

    items : Item;

    constructor(){

        this.items = new Item;

        // let menuDiv = document.createElement("div");
        // menuDiv.setAttribute("id", "menu");
        // document.body.appendChild(menuDiv);

        // let menuBgDiv = document.createElement("div");
        // menuDiv.setAttribute("id", "menuBackground");
        // document.body.appendChild(menuBgDiv);

        let shopList = document.createElement("ul");
        shopList.setAttribute("id", "shopList");
        document.getElementById("menu").appendChild(shopList);

        let portal          = new Portal;
        let dreamInceptor   = new DreamInceptor;
        let mrMeeseeks      = new MrMeeseeks;

    }

}