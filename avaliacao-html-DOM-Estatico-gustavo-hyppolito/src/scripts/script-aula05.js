const foto = document.getElementById("foto-perfil");
const nomeUsuario = document.querySelector("#nome-usuario");
const bio = document.querySelector(".biografia");
const skills = document.querySelectorAll(".skill");
const status = document.getElementById("badge-status");
const container = document.getElementById("container-perfil");

nomeUsuario.textContent = "Gustavo Hyppolito Rodrigues";


bio.textContent = "Estudante de programação focado em JavaScript e projetos web.";


foto.src = "C:\\Users\\49044943855\\Documents\\GitHub\\Avaliacoes-html-css\\avaliacao-html-DOM-Estatico-gustavo-hyppolito\\src\\images\\mordecay.jpg";


skills[0].textContent = "HTML";
skills[1].textContent = "CSS";
skills[2].textContent = "JavaScript Avançado";


status.textContent = "Status: Ativo";
status.classList.add("online");


container.style.backgroundColor = "#d0f0ff";


console.log("Total de skills:", skills.length);