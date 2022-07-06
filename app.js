const fs = require('fs');
const read =  require('./CRUD/read.js');
const write = require('./CRUD/writeJSON.js');
const create = require('./CRUD/new.js');
const deleteTask = require('./CRUD/delete.js');
const updateTask = require('./CRUD/edit.js');


let accion = process.argv[2]

let value = [process.argv[3],process.argv[4],process.argv[5],process.argv[6],process.argv[7],process.argv[8]]


switch(accion){
    case "read":
        console.log(read(...value));
        break;

    case "new":
        console.log(create(...value));
        break;

    case "edit":
        console.log(updateTask(...value));
        break;

    case "delete":
        console.log(deleteTask(...value));

    
}