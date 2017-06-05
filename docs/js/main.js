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
var Game = (function () {
    function Game() {
        var _this = this;
        this.morty = new Morty;
        this.menu = new Menu;
        document.getElementById("morty").addEventListener("click", function (e) { return _this.addPoint(e); });
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    Object.defineProperty(Game.prototype, "morty", {
        get: function () {
            return this._morty;
        },
        set: function (morty) {
            this._morty = Morty;
        },
        enumerable: true,
        configurable: true
    });
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.showPoints();
        this.menu.items.checkItems();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.prototype.addPoint = function (e) {
        Game.points++;
        var audio = document.getElementById("mortyAudio");
        audio.pause();
        audio.currentTime = 0;
        audio.play();
    };
    Game.prototype.showPoints = function () {
        var totalSpeed = Item.numPortals +
            Item.numDreamInceptors * 6 +
            Item.numMrMeeseeks * 20;
        document.getElementById("morties").innerHTML = "<h1>" + Math.floor(Game.points) + " Morties</h1>";
        document.getElementById("mortiesSecond").innerHTML = "<h2>" + totalSpeed + " Morties/second</h2>";
    };
    return Game;
}());
Game.points = 0;
var Item = (function () {
    function Item() {
        this.name = "Item";
        this.cost = 120;
        this.speed = 5;
    }
    Item.prototype.activateItem = function (theName, theCost) {
        if (Game.points >= theCost) {
            Game.points -= theCost;
            console.log(theName + " with speed 000 bought for " + theCost);
            if (theName == "portal") {
                Item.numPortals++;
                document.getElementById(theName).innerHTML = "[" + Item.numPortals + "] " + theName.toUpperCase() + "S (" + theCost + " Morties)";
                var audio = document.getElementById("portalAudio");
                audio.pause();
                audio.currentTime = 0;
                audio.play();
            }
            if (theName == "dreamInceptor") {
                Item.numDreamInceptors++;
                document.getElementById(theName).innerHTML = "[" + Item.numDreamInceptors + "] " + theName.toUpperCase() + "S (" + theCost + " Morties)";
                var audio = document.getElementById("dreamInceptorAudio");
                audio.pause();
                audio.currentTime = 0;
                audio.play();
            }
            if (theName == "mrMeeseeks") {
                Item.numMrMeeseeks++;
                document.getElementById(theName).innerHTML = "[" + Item.numMrMeeseeks + "] " + theName.toUpperCase() + "S (" + theCost + " Morties)";
                var audio = document.getElementById("mrMeeseeksAudio");
                audio.pause();
                audio.currentTime = 0;
                audio.play();
            }
            document.getElementById(theName).style.color = "green";
        }
        else {
            var scoreText_1 = document.getElementById("morties");
            var switcher_1 = false;
            var _loop_1 = function () {
                var intervalID = setInterval(function () {
                    if (switcher_1) {
                        scoreText_1.style.color = "white";
                        switcher_1 = false;
                        clearInterval(intervalID);
                    }
                    else {
                        scoreText_1.style.color = "red";
                        switcher_1 = true;
                    }
                }, 100);
            };
            for (var i = 0; i < 5; i++) {
                _loop_1();
            }
            var audio = document.getElementById("errorAudio");
            audio.pause();
            audio.currentTime = 0;
            audio.play();
        }
    };
    Item.prototype.checkItems = function () {
        Game.points += Item.numPortals * (1 / 60);
        Game.points += Item.numDreamInceptors * (6 / 60);
        Game.points += Item.numMrMeeseeks * (20 / 60);
    };
    return Item;
}());
Item.numPortals = 0;
Item.numDreamInceptors = 0;
Item.numMrMeeseeks = 0;
var Portal = (function (_super) {
    __extends(Portal, _super);
    function Portal() {
        var _this = _super.call(this) || this;
        var li = document.createElement("li");
        li.setAttribute("id", "portal");
        document.getElementById("shopList").appendChild(li);
        li.innerHTML = "PORTAL (50 Morties)";
        document.getElementById("portal").addEventListener("click", function (e) { return _this.setItem(e); });
        return _this;
    }
    Portal.prototype.setItem = function (e) {
        _super.prototype.activateItem.call(this, "portal", 50);
    };
    return Portal;
}(Item));
var DreamInceptor = (function (_super) {
    __extends(DreamInceptor, _super);
    function DreamInceptor() {
        var _this = _super.call(this) || this;
        var li = document.createElement("li");
        li.setAttribute("id", "dreamInceptor");
        document.getElementById("shopList").appendChild(li);
        li.innerHTML = "DREAMINCEPTOR (250 Morties)";
        document.getElementById("dreamInceptor").addEventListener("click", function (e) { return _this.setItem(e); });
        return _this;
    }
    DreamInceptor.prototype.setItem = function (e) {
        _super.prototype.activateItem.call(this, "dreamInceptor", 250);
    };
    return DreamInceptor;
}(Item));
var MrMeeseeks = (function (_super) {
    __extends(MrMeeseeks, _super);
    function MrMeeseeks() {
        var _this = _super.call(this) || this;
        var li = document.createElement("li");
        li.setAttribute("id", "mrMeeseeks");
        document.getElementById("shopList").appendChild(li);
        li.innerHTML = "MRMEESEEK (3000 Morties)";
        document.getElementById("mrMeeseeks").addEventListener("click", function (e) { return _this.setItem(e); });
        return _this;
    }
    MrMeeseeks.prototype.setItem = function (e) {
        _super.prototype.activateItem.call(this, "mrMeeseeks", 3000);
    };
    return MrMeeseeks;
}(Item));
window.addEventListener("load", function () {
    window.alert("Make sure you turn up the volume!");
    var audio = document.getElementById("startAudio");
    audio.play();
    new Game();
});
var Menu = (function () {
    function Menu() {
        this.items = new Item;
        var shopList = document.createElement("ul");
        shopList.setAttribute("id", "shopList");
        document.getElementById("menu").appendChild(shopList);
        var portal = new Portal;
        var dreamInceptor = new DreamInceptor;
        var mrMeeseeks = new MrMeeseeks;
    }
    return Menu;
}());
var Morty = (function () {
    function Morty() {
        var morty = document.createElement("div");
        morty.setAttribute("id", "morty");
        document.body.appendChild(morty);
    }
    return Morty;
}());
//# sourceMappingURL=main.js.map