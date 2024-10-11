// Primer mensaje de bienvenida con datos aleatorios
const nombrePredeterminado = "Juan";
const edadPredeterminada = 30;
const ciudadPredeterminada = "Buenos Aires";

// Mostrar la primera bienvenida al cargar la página
document.getElementById("primeraBienvenida").innerText = 
  `¡Hola ${nombrePredeterminado}, bienvenido! Tienes ${edadPredeterminada} años y vives en ${ciudadPredeterminada}.`;

// Función para manejar el formulario de ingreso de datos del usuario
document.getElementById("datosUsuario").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener los valores ingresados por el usuario
    const nombre = document.getElementById("nombre").value;
    const edad = parseInt(document.getElementById("edad").value);
    const ciudad = document.getElementById("ciudad").value;

    // Mostrar el mensaje de bienvenida personalizado
    document.getElementById("bienvenida").innerText = `¡Hola ${nombre}, bienvenido! Tienes ${edad} años y vives en ${ciudad}.`;

    // Calcular cuántos días ha vivido el usuario
    const diasVividos = edad * 365; // Aproximación (sin tener en cuenta años bisiestos)
    document.getElementById("diasVividos").innerText = `Has vivido aproximadamente ${diasVividos} días.`;
});
