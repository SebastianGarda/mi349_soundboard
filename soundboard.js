window.onload = function(){
    var buttonElementAhem = document.getElementById("Ahem")
    var buttonElementApplause = document.getElementById("Applause")
    var buttonElementBlip = document.getElementById("Blip")

    var audioAhem = new Audio('ahem_x.wav')
    var audioApplause = new Audio('applause_y.wav')
    var audioBlip = new Audio('blip.wav')

    function playSoundAhem(){
        Audio.play(audioAhem);
    }

    function playSoundApplause(){
        Audio.play(audioApplause);
    }

    function playSoundBlip(){
        Audio.play(audioBlip);
    }

    buttonElementAhem.addEventListener('click', playSoundAhem);
    buttonElementApplause.addEventListener('click', playSoundApplause);
    buttonElementBlip.addEventListener('click', playSoundBlip);
}