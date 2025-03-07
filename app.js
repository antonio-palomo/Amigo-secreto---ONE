//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() { // função para adicionar um amigo a lista
    const amigos_input = document.getElementById("amigo");
    const nome = amigos_input.value.trim();
    
    if (nome === "") {
        alert("Por favor, insira um nome válido. O nome deve conter ao menos um caractere ou número para ser aceito");
        return;
    }
    
    if (amigos.includes(nome)) {
        alert("hmm... Parece que esse nome já foi adicionado tente colocar um outro ou adicionar o sobrenome da pessoa que quer sortear.");
        return;
    }
    
    amigos.push(nome);
    amigos_input.value = "";
    atualizarLista();
}

function atualizarLista() { // função para atualizar os valores na lista
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        li.style.padding = "10px";
        li.style.margin = "5px";
        li.style.textAlign = "center";
        li.style.fontFamily = "Inter, sans-serif";
        li.style.fontSize = "18px";
        li.style.fontWeight = "bold";
        
        lista.appendChild(li);
    });
}
  
function sortearAmigo() { // função para sortear o amigo
    if (amigos.length === 0) {
        alert("Por favor adicione pelo menos o nome de um amigo antes de sortear.");
        return;
    }
    
    const sorteadoIndex = Math.floor(Math.random() * amigos.length);
    const sorteado = amigos[sorteadoIndex];
    amigos.splice(sorteadoIndex, 1); // retira usuário da lista
    atualizarLista();
    
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li style="padding: 10px; margin-top: 10px; font-size: 22px; color:rgba(67, 16, 251, 0.88); font-weight: bold; list-style-type: none;">Parabéns!! Seu(Sua) amigo(a) secreto(a) é: <strong>${sorteado}</strong> </li>`;
}

function limparLista() { // função para limpar os usuários da lista
    amigos = [];
    atualizarLista();
    document.getElementById("resultado").innerHTML = "";
}
