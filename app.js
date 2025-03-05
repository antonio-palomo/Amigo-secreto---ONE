//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() { // função para adicionar um amigo a lista
    const amigos_input = document.getElementById("amigo");
    const nome = amigos_input.value.trim();
    
    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }
    
    if (amigos.includes(nome)) {
        alert("Esse nome já foi adicionado.");
        return;
    }
    
    amigos.push(nome);
    amigos_input.value = "";
    atualizarLista();
}

function atualizarLista() { // função para atualixzar os valores na lista
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        li.style.padding = "10px";
        li.style.margin = "5px";
        li.style.border = "1px solid #000";
        li.style.borderRadius = "5px";
        li.style.backgroundColor = "#FFF";
        li.style.textAlign = "center";
        li.style.fontFamily = "Inter, sans-serif";
        lista.appendChild(li);
    });
}

function sortearAmigo() { // função para sortear o amigo
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear.");
        return;
    }
    
    const sorteadoIndex = Math.floor(Math.random() * amigos.length);
    const sorteado = amigos[sorteadoIndex];
    amigos.splice(sorteadoIndex, 1); // retira usuário da lista
    atualizarLista();
    
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li style="padding: 10px; margin-top: 10px; font-size: 20px; color: green; font-weight: bold;">Foi sorteado: <strong>${sorteado}</strong> 🎉</li>`;
}

function limparLista() { // função para limpar os usuários da lista
    amigos = [];
    atualizarLista();
    document.getElementById("resultado").innerHTML = "";
}
