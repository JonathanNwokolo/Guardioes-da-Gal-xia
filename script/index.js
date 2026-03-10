const members = [
  { name: "Peter Quill", id: "peter" },
  { name: "Gamora Titan", id: "gamora" },
  { name: "Drax o Destruidor", id: "drax" },
  { name: "Mantis", id: "mantis" },
  { name: "Rocket Raccoon", id: "rocket" },
  { name: "I am Groot", id: "groot" },
];

let currentIndex = 0;

function updateMember(index) {
  const member = members[index];
  const memberImage = document.getElementById("member__image");
  const memberName = document.getElementById("member__name");

  // Adicionar classe de animação
  memberImage.classList.add("changing");
  memberName.classList.add("animating");

  // Aguardar animação de saída
  setTimeout(() => {
    // Atualizar imagem
    memberImage.src = `./assets/members/${member.id === "peter" ? "peter-quill" : member.id}.png`;
    memberImage.alt = member.name;

    // Remover todas as classes de cor
    memberName.className = "";
    memberName.classList.add(member.id === "peter" ? "peter" : member.id);

    // Atualizar nome com animação
    changeName(member.name);

    // Atualizar cards ativos
    updateActiveCard(index);

    // Remover classes de animação para entrar
    setTimeout(() => {
      memberImage.classList.remove("changing");
      memberName.classList.remove("animating");
    }, 50);
  }, 300);
}

function updateActiveCard(index) {
  const cards = document.querySelectorAll(".member__card");
  cards.forEach((card, i) => {
    card.classList.toggle("active", i === index);
  });
}

function createCards() {
  const cardsContainer = document.getElementById("cards");

  members.forEach((member, index) => {
    const card = document.createElement("div");
    card.className = "member__card";
    if (index === 0) card.classList.add("active");

    const img = document.createElement("img");
    img.src = `./assets/members/card-${member.id === "peter" ? "peter-quill" : member.id}.png`;
    img.alt = member.name;

    card.appendChild(img);
    card.addEventListener("click", () => {
      currentIndex = index;
      updateMember(currentIndex);
    });

    cardsContainer.appendChild(card);
  });
}

// Controle do sidebar
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const menuToggle = document.getElementById("menuToggle");
  const memberName = document.getElementById("member__name");

  sidebar.classList.toggle("closed");
  menuToggle.classList.toggle("hidden");

  // Ajustar espaçamento do nome baseado no estado da sidebar
  if (sidebar.classList.contains("closed")) {
    memberName.style.right = "40px";
  } else {
    memberName.style.right = window.innerWidth > 768 ? "450px" : "20px";
  }
}

// Inicializar quando o DOM estiver pronto
document.addEventListener("DOMContentLoaded", () => {
  createCards();

  const menuToggle = document.getElementById("menuToggle");
  const closeSidebar = document.getElementById("closeSidebar");
  const memberName = document.getElementById("member__name");

  // Definir espaçamento inicial
  memberName.style.right = window.innerWidth > 768 ? "450px" : "20px";

  menuToggle.addEventListener("click", toggleSidebar);
  closeSidebar.addEventListener("click", toggleSidebar);

  // Suporte a teclado
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const sidebar = document.getElementById("sidebar");
      if (!sidebar.classList.contains("closed")) {
        toggleSidebar();
      }
    }
  });

  // Ajustar espaçamento do nome ao redimensionar
  window.addEventListener("resize", () => {
    const sidebar = document.getElementById("sidebar");
    const memberName = document.getElementById("member__name");

    if (!sidebar.classList.contains("closed")) {
      memberName.style.right = window.innerWidth > 768 ? "450px" : "20px";
    }
  });
});
