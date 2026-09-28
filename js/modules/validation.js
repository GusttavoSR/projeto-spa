export function validarNome(nome) {
    // 1. Checa se é vazio
    if (!nome || nome.trim() === "") {
        return { valido: false, mensagem: "O nome não pode estar vazio." };
    }
    // 2. Checa o tamanho mínimo
    if (nome.trim().length < 3) {
        return { valido: false, mensagem: "O nome deve ter pelo menos 3 letras." };
    }
    
    // 3. NOVA REGRA: Checa se o usuário já existe no banco de dados
    const usuariosSalvos = JSON.parse(localStorage.getItem('usuarios')) || [];
    if (usuariosSalvos.includes(nome.trim())) {
        return { valido: false, mensagem: "Este usuário já está cadastrado no sistema!" };
    }

    return { valido: true, mensagem: "Usuário cadastrado com sucesso!" };
}