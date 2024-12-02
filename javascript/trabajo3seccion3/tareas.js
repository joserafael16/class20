
        // Función para agregar un producto
        function agregarProducto() {
            // Obtener el texto del input
            let texto = document.getElementById("textoProducto").value;
            
            // Si el texto no está vacío
            if (texto !== "") {
                // Crear un nuevo elemento de lista
                let nuevoProducto = document.createElement("li");
                
                // Agregar el texto
                nuevoProducto.innerHTML = texto + " ";
                
                // Crear botón de eliminar
                let botonEliminar = document.createElement("button");
                botonEliminar.innerHTML = "Eliminar";
                botonEliminar.onclick = function() {
                    nuevoProducto.remove();
                };
                
                // Agregar función para tachar al hacer clic
                nuevoProducto.onclick = function() {
                    nuevoProducto.classList.toggle("tachado");
                };
                
                // Agregar el botón al elemento de lista
                nuevoProducto.appendChild(botonEliminar);
                
                // Agregar el producto a la lista
                document.getElementById("listaProductos").appendChild(nuevoProducto);
                
                // Limpiar el input
                document.getElementById("textoProducto").value = "";
            }
        }

        // Agregar producto al presionar Enter
        document.getElementById("textoProducto").onkeypress = function(e) {
            if (e.key === "Enter") {
                agregarProducto();
            }
        };
    