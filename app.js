/**
 * ====================================================================
 * BELATTO LANCHES - APPLICATION CORE JS
 * ====================================================================
 * - Gerenciamento de Modais (Belatto Loja, Belatto Delivery, Decisão)
 * - Renderização Dinâmica de Cardápio com Filtros de Categoria e Numeração
 * - Accordion Interativo de FAQ
 * - Sistema Unificado de Tracking de Eventos (GA4 / GTM / Meta Pixel)
 * - Navegação Mobile e Efeitos de Scroll
 * ====================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  initTracking();
  renderProducts();
  renderFaq();
  initModals();
  initNavigation();
  initScrollEffects();
});

/* ====================================================================
   01. SISTEMA UNIFICADO DE TRACKING E ANALYTICS
   ==================================================================== */
const BELATTO_TRACKING = {
  track(eventName, eventParams = {}) {
    // 1. Google Analytics 4 e Google Tag Manager
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      timestamp: new Date().toISOString(),
      ...eventParams
    });

    // 2. Meta Pixel
    if (typeof window.fbq === "function") {
      window.fbq("trackCustom", eventName, eventParams);
    }

    // 3. Log de desenvolvimento
    console.log(`[BELATTO_TRACKING] Event: ${eventName}`, eventParams);
  }
};

function initTracking() {
  // Dispara page_view inicial
  BELATTO_TRACKING.track("page_view", {
    page_title: document.title,
    page_location: window.location.href
  });

  // Listener global para elementos com data-track
  document.addEventListener("click", (e) => {
    const trackTarget = e.target.closest("[data-track]");
    if (trackTarget) {
      const eventName = trackTarget.getAttribute("data-track");
      BELATTO_TRACKING.track(eventName, {
        button_text: trackTarget.innerText ? trackTarget.innerText.trim() : "",
        element_id: trackTarget.id || "unspecified"
      });
    }
  });
}

/* ====================================================================
   02. RENDERIZAÇÃO DO CARDÁPIO DE PRODUTOS REAIS
   ==================================================================== */
function renderProducts() {
  const container = document.getElementById("products-grid-container");
  if (!container || !window.BELATTO_CONFIG || !window.BELATTO_CONFIG.products) return;

  const products = window.BELATTO_CONFIG.products;

  function buildGrid(items) {
    container.innerHTML = items.map(prod => `
      <article class="product-card" data-category="${prod.categoryKey}">
        <div class="product-media">
          <img src="${prod.image}" alt="${prod.name}" loading="lazy">
          ${prod.number ? `<span class="product-number-badge">${prod.number}</span>` : ""}
          ${prod.badge ? `<span class="badge-pill badge-red product-badge-float">${prod.badge}</span>` : ""}
        </div>
        <div class="product-body">
          <span class="product-category-tag">${prod.category}</span>
          <h3 class="product-name">${prod.name}</h3>
          <p class="product-desc">${prod.description}</p>
          <div class="product-footer">
            <button type="button" class="btn-card-order" data-action="order-product" data-product-id="${prod.id}" data-track="click_pedir_produto_${prod.id}">
              <span>Pedir Agora</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      </article>
    `).join("");
  }

  // Render inicial com todos os itens
  buildGrid(products);

  // Filtros de Categoria
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filterValue = btn.getAttribute("data-filter");
      BELATTO_TRACKING.track("click_filtro_cardapio", { filter: filterValue });

      if (filterValue === "all") {
        buildGrid(products);
      } else {
        const filtered = products.filter(p => p.categoryKey === filterValue);
        buildGrid(filtered);
      }
    });
  });

  // Ao clicar em "Pedir Agora" em um card de produto, abre o modal de escolha da unidade
  container.addEventListener("click", (e) => {
    const orderBtn = e.target.closest("[data-action='order-product']");
    if (orderBtn) {
      const prodId = orderBtn.getAttribute("data-product-id");
      BELATTO_TRACKING.track("click_cardapio_item_order", { product_id: prodId });
      openModal("modal-decision");
    }
  });
}

/* ====================================================================
   03. RENDERIZAÇÃO DO FAQ E ACCORDIONS
   ==================================================================== */
function renderFaq() {
  const container = document.getElementById("faq-list-container");
  if (!container || !window.BELATTO_CONFIG || !window.BELATTO_CONFIG.faq) return;

  const faqs = window.BELATTO_CONFIG.faq;

  container.innerHTML = faqs.map((item, idx) => `
    <div class="faq-item ${idx === 0 ? 'active' : ''}">
      <button type="button" class="faq-question" aria-expanded="${idx === 0 ? 'true' : 'false'}">
        <span>${item.question}</span>
        <span class="faq-toggle-icon">+</span>
      </button>
      <div class="faq-answer">
        <p>${item.answer}</p>
      </div>
    </div>
  `).join("");

  const items = container.querySelectorAll(".faq-item");
  items.forEach(item => {
    const btn = item.querySelector(".faq-question");
    btn.addEventListener("click", () => {
      const isOpen = item.classList.contains("active");

      // Fecha todos os outros
      items.forEach(i => {
        i.classList.remove("active");
        i.querySelector(".faq-question").setAttribute("aria-expanded", "false");
      });

      // Abre o clicado se não estava aberto
      if (!isOpen) {
        item.classList.add("active");
        btn.setAttribute("aria-expanded", "true");
        BELATTO_TRACKING.track("click_faq_item", {
          question: btn.innerText.trim()
        });
      }
    });
  });
}

/* ====================================================================
   04. GERENCIAMENTO DE MODAIS
   ==================================================================== */
function initModals() {
  // Abertura via data-action
  document.addEventListener("click", (e) => {
    const actionEl = e.target.closest("[data-action]");
    if (!actionEl) return;

    const action = actionEl.getAttribute("data-action");

    if (action === "open-loja-modal") {
      BELATTO_TRACKING.track("click_belatto_loja", { origin: actionEl.id || "card_or_button" });
      closeAllModals();
      openModal("modal-loja");
    } 
    else if (action === "open-delivery-modal") {
      BELATTO_TRACKING.track("click_belatto_delivery", { origin: actionEl.id || "card_or_button" });
      closeAllModals();
      openModal("modal-delivery");
    } 
    else if (action === "open-decision-modal") {
      BELATTO_TRACKING.track("click_abrir_decisao_unidade");
      closeAllModals();
      openModal("modal-decision");
    }
    else if (action === "switch-to-loja") {
      closeAllModals();
      BELATTO_TRACKING.track("click_decisao_escolheu_loja");
      setTimeout(() => openModal("modal-loja"), 150);
    }
    else if (action === "switch-to-delivery") {
      closeAllModals();
      BELATTO_TRACKING.track("click_decisao_escolheu_delivery");
      setTimeout(() => openModal("modal-delivery"), 150);
    }
    else if (action === "close-modal") {
      closeAllModals();
    }
  });

  // Fechar ao clicar no backdrop (overlay)
  const overlays = document.querySelectorAll(".modal-overlay");
  overlays.forEach(overlay => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        closeAllModals();
      }
    });
  });

  // Fechar com a tecla Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeAllModals();
    }
  });
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  }
}

function closeAllModals() {
  const openModals = document.querySelectorAll(".modal-overlay.open");
  openModals.forEach(m => m.classList.remove("open"));
  document.body.style.overflow = "";
}

/* ====================================================================
   05. NAVEGAÇÃO E MENU MOBILE
   ==================================================================== */
function initNavigation() {
  const menuToggle = document.getElementById("menu-toggle-btn");
  const mobileDrawer = document.getElementById("mobile-nav-drawer");

  if (menuToggle && mobileDrawer) {
    menuToggle.addEventListener("click", () => {
      const isOpen = mobileDrawer.classList.contains("open");
      if (isOpen) {
        mobileDrawer.classList.remove("open");
        menuToggle.classList.remove("active");
      } else {
        mobileDrawer.classList.add("open");
        menuToggle.classList.add("active");
        BELATTO_TRACKING.track("click_menu_mobile_open");
      }
    });

    // Fecha o drawer mobile ao clicar em um link
    const mobileLinks = mobileDrawer.querySelectorAll(".mobile-link");
    mobileLinks.forEach(link => {
      link.addEventListener("click", () => {
        mobileDrawer.classList.remove("open");
        menuToggle.classList.remove("active");
      });
    });
  }
}

/* ====================================================================
   06. EFEITOS DE SCROLL E INTERAÇÃO
   ==================================================================== */
function initScrollEffects() {
  const header = document.getElementById("site-header");
  
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }, { passive: true });
}

/* ====================================================================
   07. FEEDBACK TOAST NOTIFICATION
   ==================================================================== */
function showToast(msg, duration = 3000) {
  const toast = document.getElementById("toast-notice");
  const toastText = document.getElementById("toast-text");
  if (!toast || !toastText) return;

  toastText.innerText = msg;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, duration);
}

// Exporta globalmente
window.showToast = showToast;
window.BELATTO_TRACKING = BELATTO_TRACKING;
