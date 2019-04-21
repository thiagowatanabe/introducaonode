console.log('loading....');
somar(2, 2).then((soma) => {
    console.log('soma: ', soma);
    dividir(soma, 2)
        .then((dividir) => {
            console.log('dividir: ', dividir);
            console.log('done....');
        })
        .catch((error) => {
            console.log(error);
        })
});

function somar(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b);
        }, 10 * 1000);
    });
}

function dividir(a, b) {
    return new Promise((resolve, reject) => {
        let resultado = a / b;
        if (resultado <= 2) {
            reject('resultado incorreto')
        }
        else {
            resolve(resultado);
        }

    });
}