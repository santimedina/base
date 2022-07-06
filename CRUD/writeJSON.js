
const fs = require('fs');

const write = data => {

    fs.writeFileSync('taskData.json', JSON.stringify(data,null,4 ));

}

module.exports = write; 

