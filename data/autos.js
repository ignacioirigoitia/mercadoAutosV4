const fs = require('fs');
const path = require('path');
const autos_db = path.join('data','autos.json');

module.exports = {
    getAutos : () => {
        return JSON.parse(fs.readFileSync(autos_db,'utf-8'));
    },
    setAutos : (data) => {
        fs.writeFileSync(autos_db,JSON.stringify(data,null,2),'utf-8');
    }
}
