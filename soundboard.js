window.onload = function(){
    var buttonElementAhem = document.getElementById("Ahem")
    var buttonElementApplause = document.getElementById("Applause")
    var buttonElementBlip = document.getElementById("Blip")

    var audioAhem = new Audio('ahem_x.wav')
    var audioApplause = new Audio('applause_y.wav')
    var audioBlip = new Audio('blip.wav')

    function playSound(){

    }

    buttonElement.addEventListener('click', playSound);
}