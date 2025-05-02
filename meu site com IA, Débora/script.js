// Lista das habilidades técnicas
const habilidades = [
    "Informática Básica",
    "Hardware (Componentes PC)",
    "Lógica de Programação",
    "JavaScript",
    "Python",
    "HTML & CSS",
    "Sistemas Operacionais (Windows, Linux)"
  ];
  
  // Função para adicionar as habilidades na página via JavaScript
  function carregarHabilidades() {
    const lista = document.getElementById("lista-habilidades");
  
    habilidades.forEach(hab => {
      const item = document.createElement("li");
      item.textContent = hab;
      lista.appendChild(item);
    });
  }
  
  // Roda quando a página termina de carregar
  window.onload = carregarHabilidades;