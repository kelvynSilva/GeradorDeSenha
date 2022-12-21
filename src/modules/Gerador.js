export default class Gerador {

    rand(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    maiusculo() { return String.fromCharCode(this.rand(65, 91)) };
    minusculo() { return String.fromCharCode(this.rand(97, 123)) };
    numero() { return String.fromCharCode(this.rand(48, 57)) };
    simbolos() { return String.fromCharCode(this.rand(33, 48)) };

    gerarSenha(qtd, maiusculo, minusculo, numero, simbolos) {
        const senhaArray = [];
        qtd = Number(qtd);

        for (let i = 0; i < qtd; i++) {
            maiusculo && senhaArray.push(this.maiusculo());
            minusculo && senhaArray.push(this.minusculo());
            numero && senhaArray.push(this.numero());
            simbolos && senhaArray.push(this.simbolos());
        }

        return senhaArray.join('').slice(0, qtd);
    }
}


