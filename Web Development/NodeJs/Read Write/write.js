const fs = require('fs');

// Path to the file where you want to write
const filePath = '../Read Write/b/file.txt'; // Replace this with the actual file path

// Data to write into the file
const contentToWrite = 'This is the content that will be written to the file.';

// Writing to the file asynchronously
fs.writeFile(filePath, contentToWrite, 'utf-8', (err) => {
    if (err) {
        console.error('Error writing to file:', err);
        return;
    }
    console.log('Data has been written to the file.');
});



 // Writing to the file synchronously

try {
   
    fs.writeFileSync(filePath, contentToWrite, 'utf-8');
    console.log('Data has been written to the file.');
} catch (err) {
    console.error('Error writing to file:', err);
}
