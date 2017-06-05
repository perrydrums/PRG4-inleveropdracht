var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GameObject = (function () {
    function GameObject(elementName, posX, posY) {
        var element = document.createElement(elementName);
        document.body.appendChild(element);
        this.place(element, posX, posY);
    }
    GameObject.prototype.place = function (element, posX, posY) {
        element.style.transform = "translate(" + posX + "px, " + posY + "px)";
    };
    return GameObject;
}());
var Food = (function (_super) {
    __extends(Food, _super);
    function Food() {
        return _super.call(this, "food", 50, 90) || this;
    }
    return Food;
}(GameObject));
var Game = (function () {
    function Game() {
        var _this = this;
        this.food = new Food();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
var Snake = (function (_super) {
    __extends(Snake, _super);
    function Snake() {
        return _super.call(this) || this;
    }
    return Snake;
}(GameObject));
//# sourceMappingURL=main.js.map