function validar() {
    var username = document.getElementById('username').value;
    if (username === "") {
        alert("El nombre de usuario no puede estar vacío");
        return false;
    }

    var password = document.getElementById('password').value;
    if (password === "") {
        alert("La contraseña no puede estar vacía");
        return false;
    }
}

function validaregis() {
    var nombre = document.getElementById('nombre').value;
    if (nombre === "") {
        alert("El nombre de usuario no puede estar vacío");
        return false;
    }

    var apellido = document.getElementById('apellido').value;
    if (apellido === "") {
        alert("El apellido de usuario no puede estar vacío");
        return false;
    }

    var password = document.getElementById('password').value;
    if (password === "") {
        alert("La contraseña no puede estar vacía");
        return false;
    }

    var email = document.getElementById('email').value;
    if (!/^([a-zA-Z0-9_-])+@([live.uleam.edu])+(.[com])+/.test(email)) {
        alert("El buzón es incorrecto");
        return false;
    }
}

function validar_registroti() {
    var TEMA = document.getElementById('TEMA').value.trim();
    var DESCRIPCION = document.getElementById('DESCRIPCION').value.trim();
    var OBJETIVOG = document.getElementById('OBJETIVOG').value.trim();
    var OBJETIVOE = document.getElementById('OBJETIVOE').value.trim();
    var palabrasClave = document.getElementById('palabra-clave').value.trim();
    var seccion = document.getElementById('seccion').value.trim();
    var archivoPDF = document.querySelector('input[type="file"][accept="application/pdf"]').files[0];
    var fecha = document.getElementById('fecha').value.trim();

    // Validar campos obligatorios
    if (TEMA === "" || DESCRIPCION === "" || OBJETIVOG === "" || seccion === "" ||  archivoPDF === null || fecha === "") {
        alert("Todos los campos obligatorios deben ser completados.");
        return false;
    }

    // Validar longitud de palabras clave
    if (palabrasClave.length > 100) {
        alert("La longitud de las palabras clave no puede exceder los 100 caracteres.");
        return false;
    }

    // Todo está validado, permitir el envío del formulario
    return true;
}



function validarExtensionArchivo(archivo, extensionesPermitidas) {
    if (archivo) {
        var nombreArchivo = archivo.name.toLowerCase();
        var extension = nombreArchivo.substring(nombreArchivo.lastIndexOf('.') + 1);

        return extensionesPermitidas.includes(extension);
    }

    return false; // El archivo no está presente
}




function validar_contra() {
    var oldpw = document.getElementById('oldpw').value,
        newpw = document.getElementById('newpw').value;
    if (oldpw !== '' && newpw !== '') {
        if (oldpw !== newpw) {
            alert("¡Las contraseñas no coinciden!");
        } else {
            alert("Los datos son correctos :)");
        }
    } else {
        alert("¡Los campos no deben estar vacíos!");
    }
}

function validar_correo() {
    var email = document.getElementById('email').value;
    if (!/^([a-zA-Z0-9_-])+@([live.uleam.edu])+(.[ec])+/.test(email)) {
        alert("El buzón es incorrecto");
        return false;
    }
}

function validarEntrada(input) {
    if (input.trim() === "") {
        return false;
    }
    return true;
}


function buscar() {
    var searchTerm = document.getElementById("searchterm").value.toLowerCase();
    var listaElementos = document.getElementById("listaElementos").getElementsByTagName("li");

    for (var i = 0; i < listaElementos.length; i++) {
        var textoElemento = listaElementos[i].innerText.toLowerCase();
        var elementoVisible = textoElemento.includes(searchTerm);
        listaElementos[i].style.display = elementoVisible ? "block" : "none";
    }
}

function eliminarControl() {
    var select = document.getElementById("controles");
    var selectedOption = select.options[select.selectedIndex];

    if (selectedOption) {
        var confirmacion = confirm("¿Estás seguro de que deseas eliminar el control y seguimiento seleccionado?");
        if (confirmacion) {
            var id = selectedOption.value;
            eliminarControlEnLista(id);
        }
    } else {
        alert("Por favor, selecciona un control y seguimiento antes de eliminar.");
    }
}

function eliminarProyecto() {
    var confirmacion = confirm("¿Estás seguro de que deseas eliminar este trabajo ?");

    if (confirmacion) {
            // Aquí deberías obtener el identificador único del trabajo de proyecto
            var idTrabajoProyecto = obtenerIdTrabajoProyecto();

        // Simulación de una eliminación exitosa
        alert("El trabajo de proyecto fue eliminado con éxito.");
        
        // Redirige a la página de inicio después de la eliminación
        window.location.href = "ruta_a_tu_pagina_home.html";
    } else {
        // En caso de cancelación, no hagas ninguna acción.
        alert("La eliminación fue cancelada.");
    }
}

function validarFormulario() {
    var inputValue = document.getElementById('inputText').value;
    if (inputValue.trim() === '') {
        alert('Por favor, ingrese un valor antes de guardar.');
    } else {
        alert('¡Formulario válido! Puedes realizar acciones adicionales aquí.');
    }
}

const navmenu = document.querySelector(".nav-menu");
const navtoggle = document.querySelector(".nav-toggle");
navtoggle.addEventListener("click", () => {
    navmenu.classList.toggle("nav-menu_visible");
});

const create = str => document.createElement(str);
const files = document.querySelectorAll('.fancy-file');
Array.from(files).forEach(f => {
    const label = create('label');
    const span_text = create('span');
    const span_name = create('span');
    const span_button = create('span');

    label.htmlFor = f.id;

    span_text.className = 'fancy-file__fancy-file-name';
    span_button.className = 'fancy-file__fancy-file-button';

    span_name.innerHTML = f.dataset.empty || 'Ningun archivo seleccionado';
    span_button.innerHTML = f.dataset.button || 'Buscar';

    label.appendChild(span_text);
    label.appendChild(span_button);
    span_text.appendChild(span_name);
    f.parentNode.appendChild(label);

    span_name.style.width = (span_text.clientWidth - 20) + 'px';

    f.addEventListener('change', e => {
        if (f.files.length == 0) {
            span_name.innerHTML = f.dataset.empty || 'Ningún archivo seleccionado';
        } else if (f.files.length > 1) {
            span_name.innerHTML = f.files.length + ' archivos seleccionados';
        } else {
            span_name.innerHTML = f.files[0].name;
        }
    });
});

const $seleccionArchivos = document.querySelector("#seleccionArchivos"),
    $imagenPrevisualizacion = document.querySelector("#imagenPrevisualizacion");

$seleccionArchivos.addEventListener("change", () => {
    const archivos = $seleccionArchivos.files;
    if (!archivos || !archivos.length) {
        $imagenPrevisualizacion.src = "";
        return;
    }
    const primerArchivo = archivos[0];
    const objectURL = URL.createObjectURL(primerArchivo);
    $imagenPrevisualizacion.src = objectURL;
});
