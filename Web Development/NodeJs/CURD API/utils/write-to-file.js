const fs = require("fs")
const path = require("path")

path1 = 'E:/Learning/Web Development/NodeJs/CURD API/data/user.json'
path2 = path.join(__dirname,'..','data','user.json')
console.log(path1,'\n',path2)
fs.access(path2, fs.constants.F_OK, (err) => {
    if (err) {
        console.error('File is not accessible or does not exist:', err);
        return;
    }
    console.log('File is accessible.');
});

module.exports = (data) => {
    try {
        console.log(__dirname)
        console.log(typeof data)
        fs.writeFileSync(path2, JSON.stringify(data), "utf-8")
    }
    catch (err) {
        console.log(err)
    }
}