// Seleccionar elementos del DOM necesarios para la funcionalidad
let indicator = document.querySelector("#indicator"); // Elemento que se moverá como indicador visual
let links = document.querySelectorAll("nav ul li a"); // Todos los enlaces de navegación

/**
 * Función que mueve el indicador visual hasta el enlace seleccionado
 * @param {Event} e - Evento del click que contiene información del elemento target
 */
function moveIndicator(e) {
	// Obtener el enlace que fue clickeado
	let link = e.target;

	// Encontrar el elemento nav padre para calcular posiciones relativas
	let nav = link.closest("nav");

	// Obtener las dimensiones y posición del enlace clickeado
	let linkRect = link.getBoundingClientRect();

	// Obtener las dimensiones y posición del elemento nav
	let navRect = nav.getBoundingClientRect();

	// Calcular la posición del enlace relativa al elemento nav
	// Esto es necesario porque el indicador está posicionado absolutamente dentro del nav
	let leftPosition = linkRect.left - navRect.left;

	// Aplicar los estilos al indicador para moverlo y ajustar su ancho
	indicator.style.left = `${leftPosition}px`; // Posición horizontal
	indicator.style.width = `${linkRect.width}px`; // Ancho igual al del enlace
}

// Agregar event listeners a todos los enlaces de navegación
links.forEach((link) => {
	link.addEventListener("click", (e) => {
		// Cuando se hace click en un enlace, mover el indicador a esa posición
		moveIndicator(e);
	});
});

// Inicializar la posición del indicador cuando la página termine de cargar
document.addEventListener("DOMContentLoaded", () => {
	// Verificar que existan enlaces en la navegación
	if (links.length > 0) {
		// Posicionar el indicador en el primer enlace por defecto
		// Se crea un objeto simulando un evento para reutilizar la función moveIndicator
		moveIndicator({ target: links[0] });
	}
});
