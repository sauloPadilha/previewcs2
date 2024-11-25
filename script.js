// Controle de Modal
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden', 'false');
  } else {
    console.error(`Modal com ID "${id}" não encontrado.`);
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
  } else {
    console.error(`Modal com ID "${id}" não encontrado.`);
  }
}

// Scroll para o topo
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Alternar tabelas de preços
function switchTable(tableId) {
  const tables = document.querySelectorAll('.pricing-table');
  const buttons = document.querySelectorAll('.btn-toggle');

  if (tables.length === 0 || buttons.length === 0) {
    console.error("Tabelas ou botões de troca não encontrados.");
    return;
  }

  tables.forEach(table => table.classList.remove('active'));
  buttons.forEach(button => button.classList.remove('active'));

  const activeTable = document.getElementById(tableId);
  const activeButton = document.querySelector(`button[data-table="${tableId}"]`);

  if (activeTable) {
    activeTable.classList.add('active');
  } else {
    console.error(`Tabela com ID "${tableId}" não encontrada.`);
  }

  if (activeButton) {
    activeButton.classList.add('active');
  } else {
    console.error(`Botão associado à tabela "${tableId}" não encontrado.`);
  }
}

// Navegação entre páginas
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link');
  const pages = document.querySelectorAll('.page');
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-links');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      const targetPage = e.target.getAttribute('data-page');

      pages.forEach(page => {
        page.id === targetPage
          ? page.classList.add('active')
          : page.classList.remove('active');
      });

      navLinks.forEach(nav => nav.classList.remove('active'));
      link.classList.add('active');

      if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Controle do menu responsivo
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('active');
    });
  } else {
    console.error("Menu toggle ou links de navegação não encontrados.");
  }
});

// Scroll suave ao topo
const scrollToTopBtn = document.querySelector('.btn-float');
if (scrollToTopBtn) {
  scrollToTopBtn.addEventListener('click', scrollToTop);
}

// Copiar chave PIX
function copyPixKey() {
  const pixKey = document.getElementById("pix-key");
  if (pixKey) {
    navigator.clipboard.writeText(pixKey.innerText).then(() => {
      alert("Chave PIX copiada para a área de transferência!");
    }).catch(() => {
      alert("Erro ao copiar a chave PIX.");
    });
  } else {
    console.error("Elemento com ID 'pix-key' não encontrado.");
  }
}

// Alternar menu
function toggleMenu() {
  const menu = document.getElementById('menu'); // ID do menu
  const button = document.querySelector('.menu-toggle'); // Botão clicado

  if (menu && button) {
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', !isExpanded);

    if (!isExpanded) {
      // Obter posição do botão
      const buttonRect = button.getBoundingClientRect();

      // Posicionar o menu dinamicamente
      menu.style.top = `${buttonRect.bottom + window.scrollY}px`;
      menu.style.left = `${buttonRect.left}px`;

      menu.classList.add('active');
      menu.setAttribute('aria-hidden', 'false');
    } else {
      menu.classList.remove('active');
      menu.setAttribute('aria-hidden', 'true');
    }
  } else {
    console.error("Menu ou botão de alternância não encontrado.");
  }
}