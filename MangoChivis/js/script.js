document.getElementById("pedidoForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let telefono = document.getElementById("telefono").value;
    let cantidad = document.getElementById("cantidad").value;

    let mensajePedido = `Nuevo pedido de Mangonadas:\n\nNombre: ${nombre}\nTeléfono: ${telefono}\nCantidad: ${cantidad}`;

    // Enviar correo
    window.location.href = `mailto:mikahck@hotmail.com?subject=Pedido de Mangonadas&body=${encodeURIComponent(mensajePedido)}`;

    // Actualizar enlace de WhatsApp
    let mensajeWhatsApp = encodeURIComponent(`Hola, quiero pedir Mangonadas:\n\nNombre: ${nombre}\nTeléfono: ${telefono}\nCantidad: ${cantidad}`);
    document.getElementById("whatsapp-link").href = `https://wa.me/521234567890?text=${mensajeWhatsApp}`;
});









