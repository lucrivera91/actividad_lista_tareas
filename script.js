// Función para agregar una nueva tarea
function agregarTarea() {
  const nuevaTareaInput = document.getElementById("nuevaTarea");
  const listaTareas = document.getElementById("listaTareas");
  const nuevaTareaTexto = nuevaTareaInput.value.trim();

  if (nuevaTareaTexto !== "") {
    const nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = nuevaTareaTexto;
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.className = "delete";
    botonEliminar.onclick = function () {
      listaTareas.removeChild(nuevaTarea);
    };
    listaTareas.appendChild(nuevaTarea);
    nuevaTarea.appendChild(botonEliminar);
    nuevaTareaInput.value = "";
  }
}
// Función para marcar una tarea como completada
function marcarCompletada(tarea) {
  tarea.classList.toggle("completed");
}

// Agregar evento de clic a las tareas para marcarlas como completadas
document
  .getElementById("listaTareas")
  .addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
      marcarCompletada(event.target);
    }
  });
// Agregar evento de clic al botón "Agregar"
document.getElementById("agregar").addEventListener("click", agregarTarea);

const mostrarCompletadas = () => {
  const tareas = document.querySelectorAll("li");
  tareas.forEach((tarea) => {
    if (tarea.classList.contains("completed")) {
      tarea.style.display = "flex";
    } else {
      tarea.style.display = "none";
    }
  });
};

const mostrarPendientes = () => {
  const tareas = document.querySelectorAll("li");
  tareas.forEach((tarea) => {
    if (!tarea.classList.contains("completed")) {
      tarea.style.display = "flex";
    } else {
      tarea.style.display = "none";
    }
  });
};

document
  .getElementById("completadas")
  .addEventListener("click", mostrarCompletadas);

document
  .getElementById("pendientes")
  .addEventListener("click", mostrarPendientes);
