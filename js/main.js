const fotoGenero = document.getElementById('imgGenero');

let primerNodo = document.head;
console.log(primerNodo);
let segundoNodo = document.body;
console.log(segundoNodo);

const generos = [{
    id: 1,
    nombre: 'chico',
    genero: 'chico',
    imagen: './img/b.webp'
}, {
    id: 1,
    nombre: 'chica',
    genero: 'chica',
    imagen: './img/c.webp'
}, {
    id: 1,
    nombre: 'ambos',
    genero: 'ambos',
    imagen: './img/d.webp'
}]

let radios = document.querySelectorAll('input[type="radio"]')
console.log(radios);

function cambiarImagen(elemento, source) {
    elemento.src = source;
}

radios.forEach(item => {
    item.addEventListener('click', () => {
        let generoUsuario = item.value;
        let variante = generos.find((genero) => genero.genero == generoUsuario);
        cambiarImagen(fotoGenero, variante.imagen);
    })
})

let agregar = document.querySelector("#complemento");
agregar.innerHTML += "<p>Cupi2 es una aplicación que basada en preguntas hechas por especialistas se encarga de dar un analisis de como estas en tu pareja. </p>";

let nuevoDiv = document.createElement("div");
document.body.prepend(nuevoDiv);
nuevoDiv.innerHTML = "<p>Que mejor que saberlo ahora</p>";

const contenedor = document.getElementById("test");
const botonRes = document.getElementById("boton");
const resultadoTest = document.getElementById("resultado");

const preguntas = [{
        pregunta: "1. Se divierte con su pareja, aún haciendo cosas cotidianas?",
        respuestas: {
            A: "Muchas veces",
            B: "Algunas veces",
            C: "Pocas veces",
        },
        respuestaCorrecta: "A",
    },
    {
        pregunta: "2. Siente que su vida en pareja ha caído en la rutina?",
        respuestas: {
            A: "Muchas veces",
            B: "Algunas veces",
            C: "Pocas veces",
        },
        respuestaCorrecta: "C",
    },
    {
        pregunta: "3. Es usted dependiente de su pareja o su pareja de usted?",
        respuestas: {
            A: "Muchas veces",
            B: "Algunas veces",
            C: "Pocas veces",
        },
        respuestaCorrecta: "C",
    },
    {
        pregunta: "4. Piensa que es la mujer o el hombre que su pareja siempre soño?",
        respuestas: {
            A: "Muchas veces",
            B: "Algunas veces",
            C: "Pocas veces",
        },
        respuestaCorrecta: "A",
    },
    {
        pregunta: "5. Sospecha que su pareja le puede ser infiel?",
        respuestas: {
            A: "Muchas veces",
            B: "Algunas veces",
            C: "Pocas veces",
        },
        respuestaCorrecta: "C",
    },
    {
        pregunta: "6. Puede afirmar que su pareja lo ama de verdad?",
        respuestas: {
            A: "Muchas veces",
            B: "Algunas veces",
            C: "Pocas veces",
        },
        respuestaCorrecta: "A",
    },
    {
        pregunta: "7. Expresa sus gustos, necesidades o sentimientos a la otra persona?",
        respuestas: {
            A: "Muchas veces",
            B: "Algunas veces",
            C: "Pocas veces",
        },
        respuestaCorrecta: "A",
    },
    {
        pregunta: "8. Tiene la libertad de expresar sus sentimientos sin que surjan conflictos?",
        respuestas: {
            A: "Muchas veces",
            B: "Algunas veces",
            C: "Pocas veces",
        },
        respuestaCorrecta: "A",
    },
    {
        pregunta: "9. En este momento puede usted decir que conoce íntegramente a su pareja?",
        respuestas: {
            A: "Muchas veces",
            B: "Algunas veces",
            C: "Pocas veces",
        },
        respuestaCorrecta: "A",
    },
    {
        pregunta: "10. Tiene usted al menos un espacio a la semana para dedicarse a usted mismo/a?",
        respuestas: {
            A: "Muchas veces",
            B: "Algunas veces",
            C: "Pocas veces",
        },
        respuestaCorrecta: "A",
    },
];

function mostrarTest() {
    const preguntasYrespuestas = [];

    preguntas.forEach((preguntaActual, numeroDePregunta) => {
        const respuestas = [];

        for (letraRespuesta in preguntaActual.respuestas) {
            respuestas.push(
                `<label>
                  <input type="radio" name="${numeroDePregunta}" value="${letraRespuesta}" />
                  ${letraRespuesta} : ${preguntaActual.respuestas[letraRespuesta]}
              </label>`
            );
        }

        preguntasYrespuestas.push(
            `<div class="cuestion">${preguntaActual.pregunta}</div>
          <div class="respuestas"> ${respuestas.join("")} </div>
          `
        );
    });

    contenedor.innerHTML = preguntasYrespuestas.join("");
}

mostrarTest();

function mostrarResultado() {
    const respuestas = contenedor.querySelectorAll(".respuestas");
    let respuestasCorrectas = 0;

    preguntas.forEach((preguntaActual, numeroDePregunta) => {
        const todasLasRespuestas = respuestas[numeroDePregunta];
        const checkboxRespuestas = `input[name='${numeroDePregunta}']:checked`;
        const respuestaElegida = (
            todasLasRespuestas.querySelector(checkboxRespuestas) || {}
        ).value;

        if (respuestaElegida === preguntaActual.respuestaCorrecta) {
            respuestasCorrectas++;

            respuestas[numeroDePregunta].style.color = "blue";
        } else {
            respuestas[numeroDePregunta].style.color = "red";
        }
    });


    Swal.fire(resultadoTest.innerHTML = `Usted tiene un ${(respuestasCorrectas/preguntas.length)*100}%  de plenitud en pareja`)

}

botonRes.addEventListener("click", mostrarResultado);

const usuarios = [{
        nombre: 'Gaston',
        mail: 'gaston@gmail.com',
        pass: 'contra'
    },
    {
        nombre: 'Daniela',
        mail: 'danucosplay@gmail.com',
        pass: 'danu'
    },
    {
        nombre: 'Valentina',
        mail: 'valentinakryp@gmail.com',
        pass: 'vkryp'
    }
]

const mailLogin = document.getElementById('emailLogin'),
    passLogin = document.getElementById('passwordLogin'),
    recordar = document.getElementById('recordarme'),
    btnLogin = document.getElementById('login'),
    modalEl = document.getElementById('modalLogin'),
    modal = new bootstrap.Modal(modalEl),
    nombreUsuario = document.getElementById('nombreUsuario'),
    toggles = document.querySelectorAll('.toggles');

function guardarDatos(usuarioDB, storage) {
    const usuario = {
        'name': usuarioDB.nombre,
        'user': usuarioDB.mail,
        'pass': usuarioDB.pass
    }

    storage.setItem('usuario', JSON.stringify(usuario));
}

function borrarDatos() {
    localStorage.clear();
    sessionStorage.clear();
}

function recuperarUsuario(storage) {
    let usuarioEnStorage = JSON.parse(storage.getItem('usuario'));
    return usuarioEnStorage;
}

function saludar(usuario) {
    Swal.fire(nombreUsuario.innerHTML = `Bienvenido/a, <span>${usuario.name}</span>`)
}

function presentarInfo(array, clase) {
    array.forEach(element => {
        element.classList.toggle(clase);
    });
}

function isLogged(usuario) {

    if (usuario) {
        saludar(usuario);
        presentarInfo(toggles, 'd-none');
    }
}

function validarUsuario(usersDB, user, pass) {
    let encontrado = usersDB.find((userDB) => userDB.mail == user);

    if (typeof encontrado === 'undefined') {
        return false;
    } else {
        if (encontrado.pass != pass) {
            return false;
        } else {
            return encontrado;
        }
    }
}

btnLogin.addEventListener('click', (e) => {
    e.preventDefault();

    if (!mailLogin.value || !passLogin.value) {
        alert('Todos los campos son requeridos');
    } else {
        let data = validarUsuario(usuarios, mailLogin.value, passLogin.value);

        if (!data) {
            alert(`Usuario y/o contraseña erróneos`);
        } else {

            if (recordar.checked) {
                guardarDatos(data, localStorage);
                saludar(recuperarUsuario(localStorage));
            } else {
                guardarDatos(data, sessionStorage);
                saludar(recuperarUsuario(sessionStorage));
            }
            modal.hide();
            presentarInfo(toggles, 'd-none');
        }
    }
});

btnLogout.addEventListener('click', () => {
    borrarDatos();
    presentarInfo(toggles, 'd-none');
});

isLogged(recuperarUsuario(localStorage));

const btnTip = document.getElementById('tip');

btnTip.onclick = () => {
    Swal.fire({
        title: 'Primera etapa..',
        text: 'La etapa del enamoramiento inicial es una etapa preciosa, súper intensa, explosiva, fogosa, todo se vive como nuevo, los sentidos se agudizan, la sonrisa la tenemos puesta de manera permanente y se recuerda a posteriori como una época maravillosa.',
        confirmButtonText: 'Entendido',
        position: 'center',
        imageUrl: 'https://media.gq.com.mx/photos/6251e5fe25077df6bc302de3/master/pass/pareja-mano.jpg',
        imageWidth: 400,
        imageHeight: 200,
        iconColor: 'purple',
        icon: 'success'

    })

}

const btnFrase = document.getElementById('frase');

btnFrase.onclick = () => {
    Swal.fire({
        title: 'Segunda etapa..',
        text: 'Es una etapa mucho más tranquila, más pausada, más calmada… en la que la pareja se va asentando y ya no todo pareciese cosa de magia. Hablamos de los 2 o 3 años posteriores a la fase del enamoramiento.',
        icon: 'warning',
        iconColor: 'blue',
        confirmButtonText: 'Entendido',
        position: 'center',
        imageUrl: 'https://media.glamour.mx/photos/6190bc9ff5ed039ceea8bf6a/master/pass/159595.jpg',
        imageWidth: 400,
        imageHeight: 200

    })
}

const btnMoti = document.getElementById('motivacion');

btnMoti.onclick = () => {
    Swal.fire({
        title: 'Tercera etapa..',
        text: 'Si se superan con éxito, tras la fase del noviazgo, llega la estabilidad propiamente dicha. Por lo tanto, si la pareja va a avanzando y la confianza se convierte en uno de los pilares de la relación, se llegará a esta etapa de unión y de amor maduro.',
        icon: 'info',
        iconColor: 'pink',
        confirmButtonText: 'Entendido',
        position: 'center',
        imageUrl: 'https://blog.elartedesabervivir.com/wp-content/uploads/2018/01/caracter%C3%ADsticas-parejas-aman-profundamente-pareja-y-sexualidad-phronesis-arte-de-saber-vivir.jpg',
        imageWidth: 400,
        imageHeight: 200

    })
}