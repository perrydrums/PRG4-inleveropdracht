class GameObject{

    constructor(elementName:string, posX:number, posY:number){

        let element = document.createElement(elementName);
        document.body.appendChild(element);

        this.place(element, posX, posY);

    }

    place(element:any, posX:number, posY:number){
        element.style.transform = "translate(" + posX + "px, " + posY + "px)";
    }

}