let activeButton = document.querySelectorAll(".drum");

activeButton.forEach(button => {
    document.addEventListener('keydown', function (event) {
        let keyPressed = event.key
        let audio = new Audio(`sounds/${keyPressed}.mp3`);
            audio.play();
   })
})


