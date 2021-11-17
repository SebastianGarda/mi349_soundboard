window.onload = function(){
    var buttonElementAhem = document.getElementById("Ahem")
    var buttonElementApplause = document.getElementById("Applause")
    var buttonElementBlip = document.getElementById("Blip")

    function playSoundAhem(){
        var audioAhem = new Audio('ahem_x.wav')
        audioAhem.play();
    }

    function playSoundApplause(){
        var audioApplause = new Audio('applause_y.wav')
        audioApplause.play();
    }

    function playSoundBlip(){
        var audioBlip = new Audio('blip.wav')
        audioBlip.play();
    }

    buttonElementAhem.addEventListener("click", playSoundAhem);
    buttonElementApplause.addEventListener("click", playSoundApplause);
    buttonElementBlip.addEventListener("click", playSoundBlip);
}