function exibirNumerosInteiros(min, max) {

    const inicio = min <= max ? min : max;
    const fim = min <= max ? max : min;

    console.log(`Números inteiros entre ${inicio} e ${fim}:`);

    let numerosString = '';

    for (let i = inicio; i <= fim; i++) {
        if (numerosString !== '') {
            numerosString += ', ';
        }
        numerosString += i;
    }

    console.log(`Números: ${numerosString}`);
    console.log(`Total de números: ${fim - inicio + 1}`);
}

const num1 = parseInt(prompt('Digite o primeiro número:'));
const num2 = parseInt(prompt('Digite o segundo número:'));

exibirNumerosInteiros(num1, num2);
