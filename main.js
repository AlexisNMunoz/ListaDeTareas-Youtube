//Variables
const formulario = document.querySelector("#formulario")
const listaDeTareas = document.querySelector("#listaDeTareas")

let tareas = []

//Eventos
eventos()
function eventos() {
    formulario.addEventListener("submit", agregarTarea)
}

//Funciones
function agregarTarea(e) {
    e.preventDefault()

    const tarea = document.querySelector("#tarea").value

    //Validar tarea
    if (tarea === "") {
        mensajeError("Para enviar debe escribir algo...")
        return
    }

    const objetoTareas = {
        id: Date.now(),
        tarea
    }

    tareas = [...tareas, objetoTareas]

    mostrarTareasHTML()

    formulario.reset()
}

//Mensaje de error
function mensajeError(error) {
    const errorMensaje = document.createElement("p")
    errorMensaje.textContent = error

    const contenedor = document.querySelector("#contenedor")

    contenedor.appendChild(errorMensaje)

    setTimeout(() => {
        errorMensaje.remove()
    }, 2000);
}

//Mostrar tareas en el HTML

function mostrarTareasHTML() {
    limpiarHTML()
    tareas.forEach(tarea => {
        const btnBorrar = document.createElement("button")
        btnBorrar.textContent = "Borrar"

        btnBorrar.onclick = () => borrarTarea(tarea.id)

        const li = document.createElement("li")
        li.innerText = tarea.tarea

        li.appendChild(btnBorrar)

        listaDeTareas.appendChild(li)
    })
}

//Borrar tarea

function borrarTarea(id) {
    tareas = tareas.filter(tarea => tarea.id !== id)
    mostrarTareasHTML()
}

//Limpiar HTML
function limpiarHTML() {
    while (listaDeTareas.firstChild) {
        listaDeTareas.removeChild(listaDeTareas.firstChild)
    }
}

