function mostrarComentarios(select) {
    var comentarios = document.getElementById("comentarios");
    var comentariosInput = document.getElementById("comentarios_municipio");

    if (select.value === "otro") {
        comentarios.style.display = "block";
        comentariosInput.setAttribute("required", "required");
    } else {
        comentarios.style.display = "none";
        comentariosInput.removeAttribute("required");
    }
}