const _ = require('lodash')

var games = [
    { nome:'Mortal Kombat',  ano:1990 },
    { nome:'Top Gear', ano:1992 },
    { nome:'Street Fighter', ano:1991 }
]

// var resultado = _.filter(games,(game) => {
//     return game.nome == 'Top Gear' 
// })

// console.log(resultado);

// let resultadoOrdenado = _.orderBy(games, ['nome'], ['asc']);
// console.log(resultadoOrdenado);

// let resultadoOrdenadoDesc = _.orderBy(games, ['ano'], ['desc']);
// console.log(resultadoOrdenadoDesc);

var novaLista = _.remove(games, function(game) {
    return game.nome != 'Top Gear';
});
   
console.log('novaLista');
console.log(novaLista);

//console.log(games);
//console.log('Lista Inversa');
//let listainversa = _.reverse(games);
//console.log(listainversa);