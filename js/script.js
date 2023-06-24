function getFemaleVoice() {
    var voices = window.speechSynthesis.getVoices();
    // Buscar la voz específica
    var voice = voices.find(function (voice) {
        return voice.name === "Microsoft Sabina - Spanish (Mexico)";
    });
    return voice;
}

var btnEnviar = document.getElementById("btnE");
btnEnviar.onclick = function () {
    // Preguntas NOMBRE DE IA
    var preguntaNom = "cual es tu nombre,como te llamas";
    var text = document.getElementById("text-to-speech").value;
    var valores = preguntaNom.split(",");
    var valorEncontrado = valores.find(function (valor) {
        return text.includes(valor);
    });
    
    // PREGUNTA SI QUIERE SER TU AMIGA   
    var pregAmiga = "puedes ser mi amiga,quiero ser tu amiga";
    var Amigos = pregAmiga.split(",");
    var valorAmigo = Amigos.find(function (valor) {
        return text.includes(valor);
    });

    // PREGUNTA QUE PELICULA RECOMIENDAS
    var pregPeli = "que pelicula me recomiendas,que película me recomiendas";
    var Pelicula = pregPeli.split(",");
    var valorPeli = Pelicula.find(function (valor) {
        return text.includes(valor);
    });

    var fechaActual = new Date(); // Obtener la fecha y hora actual
    var horaExacta = fechaActual.toLocaleTimeString(); // Obtener la hora exacta en formato de cadena

    console.log(horaExacta); // Imprimir la hora exacta en la consola

    // Respuestas
    var nombreIA = "Mi nombre es Merly y me crearon para estar a tu lado y poder ayudarte en lo que necesites";
    var friends = "No se diga más, a partir de ahora, siendo " + horaExacta + ", me declaro tu amiga incondicional";
    var fue = "No entiendo lo que me quieres decir, aún estoy en desarrollo y no logro entender muchas cosas";
    var peli = "Por el momento, la película que te recomiendo para ver en pareja es 'A todos los chicos de los que me enamoré' y 'Están los besos'";

    var speechSynthesis = window.speechSynthesis;
    var speechUtterance = new SpeechSynthesisUtterance();

    // Establecer la voz femenina
    speechUtterance.voice = getFemaleVoice();

    if (valorEncontrado) {
        speechUtterance.text = nombreIA;
    } else if (valorAmigo) {
        speechUtterance.text = friends;
    } else if (valorPeli) {
        speechUtterance.text = peli;
    } else {
        speechUtterance.text = fue;
    }

    speechSynthesis.speak(speechUtterance);
};

window.speechSynthesis.onvoiceschanged = function () {
    var voices = window.speechSynthesis.getVoices();
    console.log(voices);
};
