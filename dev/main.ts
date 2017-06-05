window.addEventListener("load", function() {
    window.alert("Make sure you turn up the volume!");
    var audio = document.getElementById("startAudio");
    audio.play();
    new Game();
});