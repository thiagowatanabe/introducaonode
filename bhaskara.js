console.log('loading....');
// calculo_bhaskara(1,12,-13);

calculo_bhaskara(2, -16, -18)
.then((result)=>{
    console.log('x1: ', result[0]);
    console.log('x2: ', result[1]);
});

function calculo_bhaskara(a, b, c) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            var quadrado_b = b * b;
            var delta = quadrado_b - (4 * a * c);

            var raizdelta = Math.sqrt(delta);

            var x1 = (-b + raizdelta) / (2 * a);
            var x2 = (-b - raizdelta) / (2 * a);
            resolve([x1, x2]);
        }, 10 * 100);
    })
}
