const listaClientes = async () =>{
    let resposta = await fetch('http://localhost:3000/profile')
    return resposta.json();
}

const criaCliente = async (nome, email) => {
    let resposta = await fetch('http://localhost:3000/profile', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    });
    return resposta.body;
}

const removeCliente = async (id) =>{
    return await fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE'
    })
}

const detalhaCliente = async (id) => {
    let resposta = await fetch(`http://localhost:3000/profile/${id}`)
    return resposta.json();

}

const atualizaCliente = async (id, nome, email) => {
    let resposta = await fetch(`http://localhost:3000/profile/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            nome : nome,
            email: email
        })
    });
    return resposta.json()
}

export const clienteService = {
    listaClientes,
    criaCliente,
    removeCliente,
    detalhaCliente,
    atualizaCliente
}