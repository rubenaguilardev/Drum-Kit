let activeButton = document.querySelectorAll(".drum");

activeButton.forEach(button => {
    button.addEventListener('click', function () {
        let audio = new Audio("sounds/tom-1.mp3")
        audio.play()
    })
})