export function getHomeTemplate() {
    return `
        <h1>Página Inicial</h1>
        <p>Bem-vindo à nossa Single Page Application. Navegue pelo menu acima.</p>
        <hr style="margin: 20px 0; border-color: #ccc;">
        ${getListaUsuariosTemplate()}
    `;
}

export function getFormTemplate() {
    return `
        <h1>Cadastro de Usuário</h1>
        <form id="form-cadastro">
            <input type="text" id="nome-usuario" placeholder="Digite seu nome">
            <button type="submit">Salvar no LocalStorage</button>
            <p id="mensagem-feedback"></p>
        </form>
    `;
}

// Nova função que utiliza .map() e .join() para listar os usuários salvos
export function getListaUsuariosTemplate() {
    // Busca os usuários no localStorage. Se não tiver nada, retorna um array vazio.
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Estrutura HTML inicial
    let html = `
        <h1>Usuários Cadastrados</h1>
        <p>Abaixo está a lista de usuários processada dinamicamente:</p>
    `;

    // Verifica se existem usuários e faz a iteração (exatamente o que foi explicado na teoria)
    if (usuarios.length > 0) {
        html += `
            <ul style="margin-top: 20px; list-style-type: square; padding-left: 20px;">
                ${usuarios.map(usuario => `<li><strong>${usuario}</strong></li>`).join('')}
            </ul>
        `;
    } else {
        html += `<p style="color: red; margin-top: 10px;">Nenhum usuário cadastrado ainda.</p>`;
    }

    return html;
}