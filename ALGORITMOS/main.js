// Espera o HTML ser totalmente carregado para executar o script
document.addEventListener('DOMContentLoaded', () => {

    const primoInput = document.getElementById('primo-input');
    const primoBtn = document.getElementById('primo-btn');
    const resultP = document.getElementById('primo-result');

    // Função para executar a verificação
    const verificarPrimo = () => {
        const numero = parseInt(primoInput.value);

        if (isNaN(numero)) {
            resultP.textContent = "Por favor, insira um número válido.";
            return;
        }

        // Chama a função ehPrimo do seu arquivo primo.js
        const resultado = primo(numero);

        if (resultado) {
            resultP.textContent = `O número ${numero} é primo.`;
        } else {
            resultP.textContent = `O número ${numero} não é primo.`;
        }
    };

    // Adiciona o evento de clique ao botão
    primoBtn.addEventListener('click', verificarPrimo);

    // Adiciona um evento para a tecla "Enter" no campo de input
    primoInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            verificarPrimo();
        }
    });

});
