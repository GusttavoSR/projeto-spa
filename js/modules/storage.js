export function salvarUsuario(nome) {
    // Pega os usuários antigos, ou cria um array vazio se não existir
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    usuarios.push(nome);
    // Salva o array atualizado no localStorage
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}