const read = require('./read.js');
const write = require('./writeJSON.js');
const fs = require('fs');

const updateTask = (id, title,author,genre,year,cost,price) => {

    const tasks = read('../taskData.json')

    const updateTask = tasks.map(tasks =>{  
        if(tasks.id == id){
            tasks.title = title;
            tasks.author = author;
            tasks.genre = genre;
            tasks.year = year;
            tasks.cost = cost;
            tasks.price = price;

        }        

        return tasks
      } );

    write(updateTask, '../taskData.json');

}


//updateTask(1, 'Prueba1', 'Santiago Medina12 ', 'genero no modificado', 'probando7', 'edit prueba2', 'precio modificado')

module.exports = updateTask;