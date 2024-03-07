def exibirNumerosInteiros(min, max):
    inicio = min if min <= max else max
    fim = max if min <= max else min

    print(f"Números inteiros entre {inicio} e {fim}:")

    numeros = [str(i) for i in range(inicio, fim + 1)]
    numerosString = ', '.join(numeros)

    print(f"Números: {numerosString}")
    print(f"Total de números: {fim - inicio + 1}")

num1 = int(input('Digite o primeiro número: '))
num2 = int(input('Digite o segundo número: '))

exibirNumerosInteiros(num1, num2)
