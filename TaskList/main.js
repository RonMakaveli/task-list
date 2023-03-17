const listaTarefas = Array.from(document.querySelectorAll(".lista-tarefas"));

// Adiciona um ouvinte de eventos de clique a cada lista de tarefas
listaTarefas.forEach((lista) => {
  lista.addEventListener("click", (event) => {
    const elemento = event.target;
    if (elemento.tagName === "LI") {
      elemento.classList.toggle("concluido");
      const itensConcluidos = Array.from(lista.querySelectorAll(".concluido")).map((item) => item.innerText);
      localStorage.setItem("itensConcluidos", JSON.stringify(itensConcluidos));
    }
  });
});

// Obtém a lista de itens concluídos armazenada na localStorage e marca-os como concluídos
const itensConcluidos = JSON.parse(localStorage.getItem("itensConcluidos") || "[]");
itensConcluidos.forEach((item) => {
  const elemento = listaTarefas.flatMap((lista) => Array.from(lista.querySelectorAll('li'))).find((li) => li.innerText === item);
  if (elemento) {
    elemento.classList.add("concluido");
  }
});