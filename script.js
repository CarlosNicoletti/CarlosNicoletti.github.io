// =========================================================
// 1. TEMA CLARO / ESCURO
// Guarda a escolha no navegador (localStorage) para lembrar
// na próxima visita.
// =========================================================
const temaBotao = document.getElementById("temaBotao");

function aplicarTema(tema) {
  document.body.classList.toggle("tema-claro", tema === "claro");
  temaBotao.textContent = tema === "claro" ? "☀️" : "🌙";
}

let temaSalvo = "escuro";
try {
  temaSalvo = localStorage.getItem("tema") || "escuro";
} catch (erro) {
  // Se o navegador bloquear o localStorage, segue com o tema padrão.
}
aplicarTema(temaSalvo);

temaBotao.addEventListener("click", () => {
  const novoTema = document.body.classList.contains("tema-claro") ? "escuro" : "claro";
  aplicarTema(novoTema);
  try {
    localStorage.setItem("tema", novoTema);
  } catch (erro) {}
});

// =========================================================
// 2. MENU DO CELULAR
// Abre/fecha o menu ao clicar no botão "hambúrguer".
// =========================================================
const menuBotao = document.getElementById("menuBotao");
const menu = document.getElementById("menu");

menuBotao.addEventListener("click", () => {
  const aberto = menu.classList.toggle("aberto");
  menuBotao.setAttribute("aria-expanded", aberto);
});

// Fecha o menu quando um link é clicado
menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("aberto");
    menuBotao.setAttribute("aria-expanded", false);
  });
});

// =========================================================
// 4. ANIMAÇÃO AO ROLAR
// Mostra cada seção suavemente quando ela entra na tela.
// =========================================================
const secoes = document.querySelectorAll(".secao");

const observador = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("visivel");
        observador.unobserve(entrada.target);
      }
    });
  },
  { threshold: 0.15 }
);

secoes.forEach((secao) => observador.observe(secao));

// =========================================================
// 5. ANO AUTOMÁTICO NO RODAPÉ
// =========================================================
document.getElementById("ano").textContent = new Date().getFullYear();
