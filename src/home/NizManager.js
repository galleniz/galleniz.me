const niz = document.getElementsByClassName("papu")[0]
var isInAnimation = false;
var sound = new Audio("sounds/silly/sonic.mp3");
var tryingToLoadOtherSong = false;
var sounds =[
    // "sonic",
    // "mario",
    "yippee-tbh",
    "tubo",
    "woag"

]
document.addEventListener("DOMContentLoaded", function() {
    niz.onclick = ()=> {
        //  change sound to random sound
        if (!tryingToLoadOtherSong)
            sound.src = `sounds/silly/${sounds[Math.floor(Math.random() * sounds.length)]}.mp3`;
        console.log(sound.src	)
        tryingToLoadOtherSong = true;
        console.log("niz fue clickeada");
        // add onload to play sound
        sound.onloadeddata = () => {
            sound.currentTime = 0;
            tryingToLoadOtherSong = false;
        sound.play();
        }

        

        //  hacer efecto como brinco de mario bross
        if (!isInAnimation){
            isInAnimation = true;
            niz.animate(
                [
                    { transform: 'scale(1.1) translateY(0px)' },
                    { transform: 'scale(1.15) translateY(-15px)' },
                    { transform: 'scale(1.1) translateY(0px)' }
                ],
                {
                    duration: 120,
                    
                }
            );
            // niz.addEventListener("animationend", function() {
            setTimeout(function () {
                isInAnimation = false;
            }, 250)
            // });
        }
        
    }
});