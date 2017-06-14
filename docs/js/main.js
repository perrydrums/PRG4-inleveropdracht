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
var AudioHandler = (function () {
    function AudioHandler() {
    }
    AudioHandler.prototype.playRick = function () {
        var randomNumber = Math.ceil(Math.random() * 3);
        console.log(randomNumber);
        switch (randomNumber) {
            case 1:
                var audio = document.getElementById("rickAudio1");
                break;
            case 2:
                var audio = document.getElementById("rickAudio2");
                break;
            case 3:
                var audio = document.getElementById("rickAudio3");
                break;
            default:
                break;
        }
        audio.play();
    };
    return AudioHandler;
}());
var Game = (function () {
    function Game() {
        var _this = this;
        this.points = 0;
        this.morty = new Morty(this);
        this.menu = new Menu(this);
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.showPoints();
        this.menu.items.checkItems();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.prototype.addPoint = function () {
        this.points++;
        var audio = document.getElementById("mortyAudio");
        audio.pause();
        audio.currentTime = 0;
        audio.play();
    };
    Game.prototype.showPoints = function () {
        var totalSpeed = Item.numPortals +
            Item.numDreamInceptors * 6 +
            Item.numMrMeeseeks * 20;
        document.getElementById("morties").innerHTML = "<h1>" + Math.floor(this.points) + " Morties</h1>";
        document.getElementById("mortiesSecond").innerHTML = "<h2>" + totalSpeed + " Morties/second</h2>";
    };
    return Game;
}());
var Item = (function () {
    function Item(g) {
        this.name = "Item";
        this.cost = 120;
        this.speed = 5;
        this.game = g;
    }
    Item.prototype.activateItem = function (theName, theCost) {
        if (this.game.points >= theCost) {
            this.game.points -= theCost;
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
        this.game.points += Item.numPortals * (1 / 60);
        this.game.points += Item.numDreamInceptors * (6 / 60);
        this.game.points += Item.numMrMeeseeks * (20 / 60);
    };
    return Item;
}());
Item.numPortals = 0;
Item.numDreamInceptors = 0;
Item.numMrMeeseeks = 0;
var Portal = (function (_super) {
    __extends(Portal, _super);
    function Portal(g) {
        var _this = _super.call(this, g) || this;
        var li = document.createElement("li");
        li.setAttribute("id", "portal");
        document.getElementById("shopList").appendChild(li);
        li.innerHTML = "PORTAL (50 Morties)";
        document.getElementById("portal").addEventListener("click", function () { return _this.setItem(); });
        return _this;
    }
    Portal.prototype.setItem = function () {
        _super.prototype.activateItem.call(this, "portal", 50);
    };
    return Portal;
}(Item));
var DreamInceptor = (function (_super) {
    __extends(DreamInceptor, _super);
    function DreamInceptor(g) {
        var _this = _super.call(this, g) || this;
        var li = document.createElement("li");
        li.setAttribute("id", "dreamInceptor");
        document.getElementById("shopList").appendChild(li);
        li.innerHTML = "DREAMINCEPTOR (250 Morties)";
        document.getElementById("dreamInceptor").addEventListener("click", function () { return _this.setItem(); });
        return _this;
    }
    DreamInceptor.prototype.setItem = function () {
        _super.prototype.activateItem.call(this, "dreamInceptor", 250);
    };
    return DreamInceptor;
}(Item));
var MrMeeseeks = (function (_super) {
    __extends(MrMeeseeks, _super);
    function MrMeeseeks(g) {
        var _this = _super.call(this, g) || this;
        var li = document.createElement("li");
        li.setAttribute("id", "mrMeeseeks");
        document.getElementById("shopList").appendChild(li);
        li.innerHTML = "MRMEESEEK (3000 Morties)";
        document.getElementById("mrMeeseeks").addEventListener("click", function () { return _this.setItem(); });
        return _this;
    }
    MrMeeseeks.prototype.setItem = function () {
        _super.prototype.activateItem.call(this, "mrMeeseeks", 3000);
    };
    return MrMeeseeks;
}(Item));
window.addEventListener("load", function () {
    new StartScreen;
});
var Menu = (function () {
    function Menu(g) {
        var _this = this;
        this.game = g;
        this.items = new Item(this.game);
        var shopList = document.createElement("ul");
        shopList.setAttribute("id", "shopList");
        document.getElementById("menu").appendChild(shopList);
        this.audioHandler = new AudioHandler();
        var rick = document.createElement("div");
        rick.setAttribute("id", "menuBackground");
        document.getElementById("menu").appendChild(rick);
        rick.addEventListener("click", function () { return _this.audioHandler.playRick(); });
        var portal = new Portal(this.game);
        var dreamInceptor = new DreamInceptor(this.game);
        var mrMeeseeks = new MrMeeseeks(this.game);
    }
    return Menu;
}());
var Morty = (function () {
    function Morty(g) {
        var _this = this;
        this.game = g;
        this.div = document.createElement("div");
        this.div.setAttribute("id", "morty");
        document.body.appendChild(this.div);
        this.div.addEventListener("click", function () { return _this.game.addPoint(); });
    }
    return Morty;
}());
var StartScreen = (function () {
    function StartScreen() {
        this.background = document.createElement("div");
        document.body.appendChild(this.background);
        this.background.setAttribute("id", "overlay");
        this.background = document.createElement("div");
        document.body.appendChild(this.background);
        this.background.setAttribute("id", "startScreen");
        var inside = document.createElement("div");
        this.background.appendChild(inside);
        inside.setAttribute("id", "startScreenInside");
        inside.innerHTML = "<h3>Morty Machine</h3><h4>A Rick and Morty inspired clicker game</h4><h2>Make sure to turn up the volume!</h2>";
        var button = document.createElement("button");
        inside.appendChild(button);
        button.setAttribute("id", "button");
        button.innerHTML = "Start Game";
        button.addEventListener("click", this.startGame);
    }
    StartScreen.prototype.startGame = function () {
        document.getElementById("startScreen").remove();
        document.getElementById("overlay").remove();
        var startAudio = document.getElementById("startAudio");
        startAudio.play();
        new Game;
    };
    return StartScreen;
}());
//# sourceMappingURL=main.js.map