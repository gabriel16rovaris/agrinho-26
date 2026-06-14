// Função que calcula o adubo orgânico necessário
function calcularAdubo() {
    // 1. Pegar o valor digitado no input e o elemento de resultado
    let area = document.getElementById('areaHorta').value;
    let resultadoDiv = document.getElementById('resultado');

    // 2. Validação simples
    if (area === "" || area <= 0) {
        resultadoDiv.classList.remove('hidden');
        resultadoDiv.style.color = "#d32f2f"; // Cor vermelha para erro
        resultadoDiv.innerHTML = "⚠️ Por favor, digite uma área válida (maior que 0)!";
        return;
    }

    // 3. Lógica: Média de 2.5kg por m²
    let quantidadeIdeal = (area * 2.5).toFixed(1); // .toFixed(1) limita a uma casa decimal (ex: 12.5)

    // 4. Mostrar o resultado na tela tirando a classe 'hidden'
    resultadoDiv.classList.remove('hidden');
    resultadoDiv.style.color = "var(--verde-escuro)"; // Restaura a cor padrão
    
    resultadoDiv.innerHTML = `Para uma horta de <strong>${area}m²</strong>, você precisa de aproximadamente <strong>${quantidadeIdeal}kg</strong> de adubo orgânico (composto).`;
}

// Suavização do Scroll (Melhorado para garantir boa experiência)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});