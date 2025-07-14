// ========== MENU MOBILE ==========
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      navLinks.classList.toggle("show");
    });

    document.addEventListener("click", (e) => {
      if (navLinks.classList.contains("show") && !navLinks.contains(e.target)) {
        navLinks.classList.remove("show");
      }
    });

    navLinks.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  }
});

// ========== MODAL DE VÍDEO ==========
document.addEventListener("DOMContentLoaded", () => {
  const abrirVideoBtn = document.getElementById("abrir-video");
  const fecharVideoBtn = document.getElementById("fechar-video");
  const modalVideo = document.getElementById("modal-video");

  if (abrirVideoBtn && fecharVideoBtn && modalVideo) {
    abrirVideoBtn.addEventListener("click", function (e) {
      e.preventDefault();
      modalVideo.style.display = "flex";
    });

    fecharVideoBtn.addEventListener("click", function () {
      modalVideo.style.display = "none";
      const iframe = modalVideo.querySelector("iframe");
      iframe.src = iframe.src;
    });

    window.addEventListener("click", function (e) {
      if (e.target === modalVideo) {
        modalVideo.style.display = "none";
        const iframe = modalVideo.querySelector("iframe");
        iframe.src = iframe.src;
      }
    });
  }
});

// ========== ANIMAÇÃO FADE-IN ==========
document.addEventListener("DOMContentLoaded", () => {
  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("visible");
        observador.unobserve(entrada.target);
      }
    });
  });

  document.querySelectorAll(".fade-in").forEach((el) => {
    observador.observe(el);
  });
});

// ========== CARROSSEL AÇÕES ==========
document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("carousel");
  const btnEsquerda = document.getElementById("btn-esquerda");
  const btnDireita = document.getElementById("btn-direita");

  if (carousel && btnEsquerda && btnDireita) {
    const scrollAmount = 320;
    const autoplayDelay = 3000;
    let autoScroll;

    function scrollRight() {
      const atEnd =
        carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 5;
      if (atEnd) {
        carousel.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }

    function startAutoplay() {
      autoScroll = setInterval(scrollRight, autoplayDelay);
    }

    function stopAutoplay() {
      clearInterval(autoScroll);
    }

    startAutoplay();

    carousel.addEventListener("mouseenter", stopAutoplay);
    carousel.addEventListener("mouseleave", startAutoplay);

    btnEsquerda.addEventListener("click", () => {
      stopAutoplay();
      carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    btnDireita.addEventListener("click", () => {
      stopAutoplay();
      carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  }
});

// ========== CARROSSEL DOS MEMBROS DO TIME ==========
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".time-cards");
  const btnEsquerda = document.querySelector(".seta-time.esquerda");
  const btnDireita = document.querySelector(".seta-time.direita");

  if (container && btnEsquerda && btnDireita) {
    btnEsquerda.addEventListener("click", () => {
      container.scrollBy({ left: -300, behavior: "smooth" });
    });

    btnDireita.addEventListener("click", () => {
      container.scrollBy({ left: 300, behavior: "smooth" });
    });
  }
});

// ========== CÓPIA DA CHAVE PIX ==========
document.addEventListener("DOMContentLoaded", () => {
  const btnCopiar = document.getElementById("copiar-pix");
  const chavePix = document.getElementById("chave-pix");
  const feedback = document.getElementById("feedback-copiar");

  if (btnCopiar && chavePix && feedback) {
    btnCopiar.addEventListener("click", () => {
      navigator.clipboard.writeText(chavePix.textContent).then(() => {
        feedback.style.display = "inline";
        setTimeout(() => {
          feedback.style.display = "none";
        }, 2000);
      });
    });
  }

  // ========== ANIMAÇÃO SUAVE PARA A SECTION .doacao ==========
  const secDoacao = document.querySelector(".doacao");
  if (secDoacao) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          secDoacao.classList.add("aparecer");
        }
      });
    }, {
      threshold: 0.3
    });

    observer.observe(secDoacao);
  }
});
