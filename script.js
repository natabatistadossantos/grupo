
function gerarSenhaAleatoria() {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
    let senha = '';
    for (let i = 0; i < 12; i++) {
        senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return senha;
}


document.getElementById('gerar-senha')?.addEventListener('click', () => {
    const senha = gerarSenhaAleatoria();
    document.getElementById('senha-gerada').textContent = `Sua senha: ${senha}`;
});


document.getElementById('iniciar-teste')?.addEventListener('click', () => {
    window.open('https://www.speedtest.net/', '_blank');
});
