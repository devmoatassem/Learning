const fs = require("fs")
const path = require("path")
file_path = path.join(__dirname,'..','data','user.json')
fs.access(file_path, fs.constants.F_OK, (err) => {
    if (err) {
        console.error('File is not accessible or does not exist:', err);
        return;
    }
    console.log('File is accessible.');
});

module.exports = (data) => {
    try {
        // console.log(__dirname)
        // console.log(typeof data)
        fs.writeFileSync(file_path, JSON.stringify(data), "utf-8")
    }
    catch (err) {
        console.log(err)
    }
}