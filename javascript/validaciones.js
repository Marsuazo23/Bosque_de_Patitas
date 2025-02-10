// Obtén el formulario y añade un event listener para el submit
const form = document.getElementById('adopcionForm');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que se envíe el formulario
    
    // Verifica si el formulario es válido
    if (form.checkValidity() === false) {
        // Si no es válido, aplica la clase is-invalid a los campos que fallaron
        form.classList.add('was-validated');
    } else {
        // Si es válido, puedes realizar otras acciones
        alert("Formulario enviado correctamente!");
        
        // Limpiar el formulario
        form.reset();
        
        // Eliminar las advertencias de validación
        form.classList.remove('was-validated');
    }
});
