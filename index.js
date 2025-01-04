let activeButton = document.querySelectorAll(".drum");

activeButton.forEach(button => {
    document.addEventListener('keydown', function (event) {
        let keyPressed = event.key
        let audio = new Audio(`sounds/${keyPressed}.mp3`)
        audio.play();
        buttonAnimation(keyPressed)
   })
})


function buttonAnimation(key) {
    let activeButton = document.querySelector(`.${key}`)
    activeButton.classList.add("pressed")
    setTimeout(function () {
        activeButton.classList.remove("pressed")
    }, 100)
    
}