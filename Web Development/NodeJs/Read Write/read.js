const fs = require('fs');

// Path to the text file
const filePath = '../Read Write/file.txt'; // Replace this with the actual file path

try {
    // Reading the file synchronously
    const data = fs.readFileSync(filePath, 'utf-8');
    console.log('File content:', data);
} catch (err) {
    console.error('Error reading file:', err);
}


// Reading the file asynchronously
fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File content:', data);
});
