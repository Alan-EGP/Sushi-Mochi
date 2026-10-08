// ---------- VENTANA DE INICIO DE SESIÓN ----------
// Solo visual: no guarda ni valida los datos en ningún lado.
const loginFondo = document.getElementById("login-fondo");
const loginForm = document.getElementById("login-form");
const loginInvitado = document.getElementById("login-invitado");
 
function cerrarLogin() {
  loginFondo.hidden = true;
}
 
loginForm.addEventListener("submit", (e) => {
  e.preventDefault(); // evita que la página se recargue al enviar el formulario
  cerrarLogin();
});
 
loginInvitado.addEventListener("click", cerrarLogin);

// ---------- MENÚ DESLIZABLE ----------
const menu = document.getElementById("menu");
const fondo = document.getElementById("fondo");
const btnMenu = document.getElementById("btn-menu");
const btnCerrar = document.getElementById("btn-cerrar");

function abrirMenu() {
  menu.classList.add("abierto");
  menu.setAttribute("aria-hidden", "false");
  btnMenu.setAttribute("aria-expanded", "true");
  fondo.hidden = false;
}

function cerrarMenu() {
  menu.classList.remove("abierto");
  menu.setAttribute("aria-hidden", "true");
  btnMenu.setAttribute("aria-expanded", "false");
  fondo.hidden = true;
}

btnMenu.addEventListener("click", abrirMenu);
btnCerrar.addEventListener("click", cerrarMenu);
fondo.addEventListener("click", cerrarMenu);
document.addEventListener("keydown", (e) => { if (e.key === "Escape") cerrarMenu(); });

// ---------- INGREDIENTES (máximo 5) ----------
const MAX = 5;
const botones = document.querySelectorAll(".ingrediente");
const contador = document.getElementById("contador");

botones.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("elegido");
    const elegidos = document.querySelectorAll(".ingrediente.elegido").length;
    contador.textContent = elegidos;
    botones.forEach((b) => {
      b.disabled = elegidos >= MAX && !b.classList.contains("elegido");
    });
  });
});
