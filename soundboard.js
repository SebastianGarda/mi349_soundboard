window.onload = function(){
    var buttonElementAhem = document.getElementById("Ahem")
    var buttonElementApplause = document.getElementById("Applause")
    var buttonElementBlip = document.getElementById("Blip")

    function playSoundAhem(){
        var audioAhem = new Audio('ahem_x.wav')
        audio.play();
    }

    function playSoundApplause(){
        var audioApplause = new Audio('applause_y.wav')
        audio.play();
    }

    function playSoundBlip(){
        var audioBlip = new Audio('blip.wav')
        audio.play();
    }

    buttonElementAhem.addEventListener('click', playSoundAhem);
    buttonElementApplause.addEventListener('click', playSoundApplause);
    buttonElementBlip.addEventListener('click', playSoundBlip);
}