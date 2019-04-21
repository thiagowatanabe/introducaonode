var soma = somar(2, 2);
console.log('soma: ', soma);

var dividir = dividir(soma, 2);
console.log('dividir: ', dividir);

function somar(a, b) {
    return a + b;
}

function dividir(a, b) {
    return a / b;
}