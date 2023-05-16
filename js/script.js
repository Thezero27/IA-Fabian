
function speak() {
    var text = document.getElementById("text-to-speech").value;

    var speechSynthesis = window.speechSynthesis;
    var speechUtterance = new SpeechSynthesisUtterance(text);

    // Establecer la voz femenina
    speechUtterance.voice = getFemaleVoice();

    speechSynthesis.speak(speechUtterance);
}

function getFemaleVoice() {
    var voices = window.speechSynthesis.getVoices();

    // Buscar la voz específica
    var voice = voices.find(function (voice) {
        return voice.name === "Microsoft Sabina - Spanish (Mexico)";
    });

    return voice;
}



window.speechSynthesis.onvoiceschanged = function () {
    var voices = window.speechSynthesis.getVoices();
    console.log(voices);
};