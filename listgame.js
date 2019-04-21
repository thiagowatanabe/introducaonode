const _ = require('lodash')

var games = [
    { nome: 'Mortal Kombat', ano: 1990 },
    { nome: 'Top Gear', ano: 1992 },
    { nome: 'Street Fighter', ano: 1991 }
]

console.log('loading..');
getGameByName('Top Gear')
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

function getGameByName(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            var resultado = _.filter(games, (game) => {
                return game.nome == name
            })

            if (resultado.length > 0) {
                resolve(resultado);
            }
            else {
                reject('Game not found');
            }

        }, 10 * 1000);
    });
}