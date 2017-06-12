class AudioHandler{

    constructor(){
        
    }

    playRick(){
        var randomNumber = Math.ceil(Math.random() * 3);
		console.log(randomNumber);
		switch(randomNumber){
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
    }

}