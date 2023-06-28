function getFemaleVoice() {
    var voices = window.speechSynthesis.getVoices();
    // Buscar la voz específica
    var voice = voices.find(function (voice) {
        return voice.name === "Microsoft Sabina - Spanish (Mexico)";
    });
    return voice;
}



//---------API DE CLIMA-----------------
const apiKey = '0b15df09486e5a9db2cf2f9a615cee08';
const ciudad = 'Tingo Maria';
var clima;

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    const climaActual = data;
    const temperaturaKelvin = climaActual.main.temp;
    const temperaturaCelsius = temperaturaKelvin - 273.15;
    clima = "El clima en Tingo Maria es " + temperaturaCelsius.toFixed(2) + "°C";
    
    // Aquí puedes realizar otras operaciones con el clima actual si es necesario
  })
  .catch(error => {
    console.error('Error al obtener los datos del clima:', error);
  });




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


    // PREGUNTA DEL CLIMA--------   
    var pregClim = "como esta el clima,como va el clima,va llover";
    var Climax = pregClim.split(",");
    var valorClime = Climax.find(function (valor) {
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
    //var clima = "El clima en Tingo Maria es " + climaActual.main.temp + "°C";


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
    } else if (valorClime) {
        speechUtterance.text = clima;
    } else {
        speechUtterance.text = fue;
    }

    speechSynthesis.speak(speechUtterance);
};

window.speechSynthesis.onvoiceschanged = function () {
    var voices = window.speechSynthesis.getVoices();
    console.log(voices);
};
