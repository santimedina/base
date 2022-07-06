const read = require('./read.js');
const write = require('./writeJSON.js');

function create  (title,author,genre,year,cost,price) {

    let array= read()
    console.log(array);
    let NewLibro ={
        id: array.length + 1, 
        title: title,
        author: author,
        genre: genre,
        year: year,
        cost: '$' +  cost,
        price: '$' + price,
    };
    array.push(NewLibro); 
console.log(array);


write(array);
}

module.exports = create;
// create('Prueba1', 'Medina Santiago1', 'Comedia', '1997', '200', '300'); 