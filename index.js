let activeButton = document.querySelectorAll(".drum");

activeButton.forEach(button => {
    button.addEventListener('click', function () {
        let audio = new Audio(`sounds/${this.innerText}.mp3`);
        audio.play();
        
    })
})
