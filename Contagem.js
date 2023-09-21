function exibirNumerosInteiros(min, max) {

    const inicio = min <= max ? min : max;
    const fim = min <= max ? max : min;

    let numerosString = '';

    for (let i = inicio; i <= fim; i++) {
        if (numerosString !== '') {
            numerosString += ', ';
        }
        numerosString += i;
    }

    console.log(`Números inteiros entre ${inicio} e ${fim}: ${numerosString}`);
}

const num1 = parseInt(prompt('Digite o primeiro número:'));
const num2 = parseInt(prompt('Digite o segundo número:'));

exibirNumerosInteiros(num1, num2);
