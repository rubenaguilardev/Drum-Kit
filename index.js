let activeButton = document.querySelectorAll(".drum");

activeButton.forEach(button => {
    button.addEventListener('click', function () {
        alert("I got clicked!")
    })
})