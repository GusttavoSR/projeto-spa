import { navegarPara } from './modules/router.js';
import { validarNome } from './modules/validation.js';
import { salvarUsuario } from './modules/storage.js';

// Ao carregar a página, abre a Home por padrão
document.addEventListener('DOMContentLoaded', () => {
    navegarPara('home');
});

// Eventos de clique nos botões de navegação
document.getElementById('nav-home').addEventListener('click', () => {
    navegarPara('home');
});

document.getElementById('nav-form').addEventListener('click', () => {
    navegarPara('form');
    configurarEventosDoFormulario(); // Precisamos reativar o evento do form sempre que a tela é desenhada
});

// Função para lidar com o envio do formulário
function configurarEventosDoFormulario() {
    const form = document.getElementById('form-cadastro');
    
    if (form) {
        form.addEventListener('submit', (evento) => {
            evento.preventDefault(); 

            const nomeInput = document.getElementById('nome-usuario').value;
            
            // Chama a validação
            const resultado = validarNome(nomeInput);

            // Integração com SweetAlert2 para notificações dinâmicas
            if (resultado.valido) {
                Swal.fire({
                    title: 'Tudo Certo!',
                    text: resultado.mensagem,
                    icon: 'success',
                    confirmButtonColor: '#3085d6'
                });
                
                salvarUsuario(nomeInput); 
                document.getElementById('nome-usuario').value = ''; 
            } else {
                Swal.fire({
                    title: 'Atenção!',
                    text: resultado.mensagem,
                    icon: 'error',
                    confirmButtonColor: '#d33'
                });
            }
        });
    }
}