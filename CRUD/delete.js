
const fs = require('fs');
const read = require('./read.js');
const write = require('./writeJSON.js');

const deleteTask = id =>{

    const tasks = read('../taskData.json')


    const excludedTasks= tasks.filter(tasks => tasks.id != id);

    write(excludedTasks, '../taskData.json')
    
    
}

module.exports = deleteTask;
