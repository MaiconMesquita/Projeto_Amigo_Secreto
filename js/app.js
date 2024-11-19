let listaAmigos = [];
let amigosIncluidos = document.getElementById('lista-amigos');

function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo').value;

    if (nomeAmigo == '') {
        alert('Não foi digitado nada no campo "Nome do amigo".')
    } else if (listaAmigos.includes(nomeAmigo)) {
        alert('Esse nome já está incluído na lista para o sorteio. Favor informar um diferente.')
    } else {
        listaAmigos.push(nomeAmigo);

        amigosIncluidos.textContent = listaAmigos.join(' - ');
        
        document.getElementById('nome-amigo').value = '';
    }
}

function sortear() {
    let caixa = [...listaAmigos];

    if (caixa.length < 4) {
        alert('A quantidade de amigos inserida não é suficiente para realizar um sorteio. Mínimo são 3 amigos.')
    } else {
        document.getElementById('lista-sorteio').innerHTML = '';
        if (caixa.length === 0) {
            alert('Não existem amigos incluídos na lista para realizar o sorteio')
        } else {
            embaralhar(caixa);
        }
    
        let sorteio = document.getElementById('lista-sorteio');
    
        for (let i = 0; i < caixa.length; i++) {
            if (i == caixa.length - 1) {
                sorteio.innerHTML = sorteio.innerHTML + caixa[i] + ' --> ' + caixa[0] + '<br>'
            } else {
                sorteio.innerHTML = sorteio.innerHTML + caixa[i] + ' --> ' + caixa[i + 1] + '<br>'
            }
        }
    }
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    listaAmigos = [];
    amigosIncluidos.textContent = listaAmigos;
    document.getElementById('lista-sorteio').innerHTML = '';
}