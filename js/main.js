/* ============================================================
   TRIBUTO JURÍDICO — JavaScript Principal
   Edite este arquivo para personalizar interações e links
   ============================================================ */

/* ---- CONFIGURAÇÕES EDITÁVEIS ----------------------------- */
const CONFIG = {
  whatsappNumero: "5569999603207",
  whatsappMensagem: "Olá! Estou com dívidas e gostaria de uma consulta gratuita com o Dr. Pedro Henrique Pamplona Rodrigues.",
  telefoneExibicao: "(69) 99960-3207",
  nomeAdvogado: "Dr. Pedro Henrique Pamplona Rodrigues",
  oab: "OAB/RO 9624",
};

/* ---- LINK WHATSAPP --------------------------------------- */
function gerarLinkWpp() {
  const msg = encodeURIComponent(CONFIG.whatsappMensagem);
  return `https://wa.me/${CONFIG.whatsappNumero}?text=${msg}`;
}

/* Atualiza todos os links de WhatsApp da página */
function atualizarLinksWpp() {
  const link = gerarLinkWpp();
  document.querySelectorAll(".link-wpp").forEach((el) => {
    el.href = link;
  });
}

/* ---- FAQ ACORDEÃO --------------------------------------- */
function initFaq() {
  document.querySelectorAll(".faq-item").forEach((item) => {
    item.addEventListener("click", () => {
      const aberto = item.classList.contains("aberto");
      document.querySelectorAll(".faq-item").forEach((i) => i.classList.remove("aberto"));
      if (!aberto) item.classList.add("aberto");
    });
  });
}

/* ---- ANIMAÇÃO AO ROLAR ---------------------------------- */
function initAnimacaoScroll() {
  const observador = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".animar").forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observador.observe(el);
  });
}

/* ---- HEADER SCROLL SOMBRA ------------------------------- */
function initHeaderScroll() {
  const header = document.getElementById("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.style.boxShadow = "0 6px 30px rgba(0,0,0,0.95)";
    } else {
      header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.8)";
    }
  });
}

/* ---- INIT GERAL ----------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  atualizarLinksWpp();
  initFaq();
  initAnimacaoScroll();
  initHeaderScroll();
});
