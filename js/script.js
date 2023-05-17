function speak() {
    //Preguntas
    var preguntax = "cual es tu nombre,como te llamas,puedes ser mi amiga";
    var text = document.getElementById("text-to-speech").value;
    var valores = preguntax.split(",");
    var valorEncontrado = valores.find(function (valor) {
        return text.includes(valor);
    });
    //Respuestas
    var nombreIA = "Mi nombre es Valeria y me crearon para estar a tu lado y poder ayudarte en lo que necesites"
    var fue = "No entiendo lo que me quieres decir, aun estoy en desarrollo no logro entender muchas cosas"
    //var respuestax = "Mi nombre es Valeria y me crearon para estar a tu lado y poder ayudarte en lo que necesites,No entiendo lo que me quieres decir, aun estoy en desarrollo no logro entender muchas cosas"

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
 */


//configuracion de linterna
// Verificar si el navegador soporta la API DeviceLightEvent
if ('ondevicelight' in window) {
    const btnEncender = document.getElementById('btn-encender');
    const btnApagar = document.getElementById('btn-apagar');

    // Escuchar el evento click del botón "Encender"
    btnEncender.addEventListener('click', function () {
        // Solicitar permiso para acceder al sensor de luz
        if (typeof DeviceLightEvent.requestPermission === 'function') {
            DeviceLightEvent.requestPermission()
                .then(permissionState => {
                    if (permissionState === 'granted') {
                        // Acceder al sensor de luz
                        window.addEventListener('devicelight', function (event) {
                            // Verificar el nivel de luz ambiente
                            if (event.value < 50) {
                                // Encender la linterna
                                // Aquí debes escribir el código para encender la linterna de tu dispositivo
                            }
                        });
                    }
                })
                .catch(console.error);
        } else {
            console.log('No se puede acceder al sensor de luz');
        }
    });

    // Escuchar el evento click del botón "Apagar"
    btnApagar.addEventListener('click', function () {
        // Apagar la linterna
        // Aquí debes escribir el código para apagar la linterna de tu dispositivo
    });
} else {
    console.log('El dispositivo no es compatible con la API DeviceLightEvent');
}








/* 
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