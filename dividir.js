console.log('loading....');

dividir(2, 2)
    .then((result) => {
        console.log('result:', result);
    })
    .catch((error) => {
        console.log(error);
    })

dividir(2, 0)
    .then((result) => {
        console.log('result:', result);
    })
    .catch((error) => {
        console.log(error);
    })

    
dividir(0, 0)
.then((result) => {
    console.log('result:', result);
})
.catch((error) => {
    console.log(error);
})

function dividir(a, b) {
    return new Promise((resolve, reject) => {
        if (b <= 0) {
            reject('Infome um numero maior que zero')
        }
        resolve(a / b);
    });
}