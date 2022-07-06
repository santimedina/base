const fs = require('fs');

read = () => {

  return JSON.parse(fs.readFileSync('taskData.json', 'utf-8'))


}

module.exports = read