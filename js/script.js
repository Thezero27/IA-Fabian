function speak() {
    //Preguntas
    var preguntax = "cual es tu nombre,como te llamas,puedes ser mi amiga";
    var text = document.getElementById("text-to-speech").value;
    var valores = preguntax.split(",");
    var valorEncontrado = valores.find(function (valor) {
        return text.includes(valor);
    });
    //Respuestas
    var nombreIA = "Mi nombre es Shayla y me crearon para estar a tu lado y poder ayudarte en lo que necesites"
    var fue = "No entiendo lo que me quieres decir, aun estoy en desarrollo no logro entender muchas cosas"
    var fgh = "Patrocinios"
    //NO SIRBE var respuestax = "Mi nombre es Merly y me crearon para estar a tu lado y poder ayudarte en lo que necesites,No entiendo lo que me quieres decir, aun estoy en desarrollo no logro entender muchas cosas"

    if (valorEncontrado) {
        var speechSynthesis = window.speechSynthesis;
        var speechUtterance = new SpeechSynthesisUtterance(nombreIA);

        // Establecer la voz femenina
        speechUtterance.voice = getFemaleVoice();

        speechSynthesis.speak(speechUtterance);
    } else {
        var speechSynthesis = window.speechSynthesis;
        var speechUtterance = new SpeechSynthesisUtterance(fue);

        // Establecer la voz femenina
        speechUtterance.voice = getFemaleVoice();
        speechSynthesis.speak(speechUtterance);
    }
}
function getFemaleVoice() {
    var voices = window.speechSynthesis.getVoices();
    // Buscar la voz específica
    var voice = voices.find(function (voice) {
        return voice.name === "Microsoft Sabina - Spanish (Mexico)";
    });
    return voice;
}


//TE amo CRUSH

/* 
alert(text)
if (text === nomIA) {

    function speak() {
        var speechSynthesis = window.speechSynthesis;
        var speechUtterance = new SpeechSynthesisUtterance(nombreIA);

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
} else {
    function speak() {
        var speechSynthesis = window.speechSynthesis;
        var speechUtterance = new SpeechSynthesisUtterance(fue);

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
}
//Thezero para su Crush Merly
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
} */



window.speechSynthesis.onvoiceschanged = function () {
    var voices = window.speechSynthesis.getVoices();
    console.log(voices);
};
