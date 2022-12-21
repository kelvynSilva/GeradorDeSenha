import Gerador from "./gerador";

const senhaGerada = document.querySelector('.senha-gerada');
const qtdCaracteres = document.querySelector('.qtd-caracteres');
const chkMaiusculas = document.querySelector('.maiuscula');
const chkMinusculas = document.querySelector('.minuscula');
const chkNumeros = document.querySelector('.numero');
const chkSimbolos = document.querySelector('.simbolo');
const gerarSenha = document.querySelector('.gerar-senha');

export default () => {
    gerarSenha.addEventListener('click', () => {
        senhaGerada.innerHTML = gerar();
    })
}

function gerar() {
    const senha = new Gerador();
    if (qtdCaracteres.value === '' || qtdCaracteres.value > 20) return 'Caracter incorreta';
    return senha.gerarSenha(
        qtdCaracteres.value,
        chkMaiusculas.checked,
        chkMinusculas.checked,
        chkNumeros.checked,
        chkSimbolos.checked
    ) || 'Nada selecionado.';
}
