// Seleciona os elementos do HTML
const btn = document.querySelector("#btn-gerar");
const frase = document.querySelector("#frase");
const autor = document.querySelector("#autor");

// Cria a função que consome a API
function gerarFrase() {
  const loading = document.querySelector("#loading");

  // Esconde frase/autor, mostra loading
  frase.style.display = "none";
  autor.style.display = "none";
  loading.style.display = "block";

  setTimeout(() => {
    fetch("https://api.quotable.io/random")
      .then(response => response.json())
      .then(data => {
        frase.textContent = `"${data.content}"`;
        autor.textContent = `— ${data.author}`;

        frase.style.display = "block";
        autor.style.display = "block";
        loading.style.display = "none";
      })
      .catch(error => {
        frase.textContent = "Erro ao carregar frase.";
        autor.textContent = "";
        frase.style.display = "block";
        autor.style.display = "none";
        loading.style.display = "none";
        console.error("Erro na API:", error);
      });
  }, 300);
}




// Evento: quando clicar no botão, chama a função
btn.addEventListener("click", gerarFrase);

// Chama uma frase logo que a página carregar
gerarFrase();

const toggle = document.querySelector("#toggle-tema");
const body = document.body;

toggle.addEventListener("click", () => {
    body.classList.toggle("claro");

    if (body.classList.contains("claro")) {
        toggle.textContent = "🌙 Modo Escuro";
    } else {
        toggle.textContent = "☀️ Modo Claro";
    }
});
