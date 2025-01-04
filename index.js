let buttons = document.querySelectorAll(".drum");

buttons.forEach(button => {
    button.addEventListener('touchend', function () {
        let buttonKey = this.innerText
        sound(buttonKey)
        buttonAnimation(buttonKey)
    })
})


document.addEventListener('keydown', function (event) {
    let keyPressed = event.key
    sound(keyPressed)
    buttonAnimation(keyPressed)
})


function sound(key) {
    let audio = new Audio(`sounds/${key}.mp3`)
    audio.play();
}


function buttonAnimation(key) {
    let activeButton = document.querySelector(`.${key}`)
    activeButton.classList.add("pressed")
    setTimeout(function () {
        activeButton.classList.remove("pressed")
    }, 100) 
}