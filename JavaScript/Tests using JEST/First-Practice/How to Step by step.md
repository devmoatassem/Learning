## Step by Step Notes on how to run test using JEST for JavaScript

1. First create a new folder where your project files will be located.
2. Write your function in simple `js` file.
3. Then at the end of your function `js` file enter the following code to export your function as a module so that it can accessed by other files in the project:
```javascript
module.exports = functionName;
```
4. Now check for the `node`, `npm` and `jest` versions by running the commands below respectively in your project directory.
```terminal
node --version
npm --version
jest --version
```
5. We'll initiate npm by running command below,
it will create `package.json` file in my project folder.
```terminal
npm init -y
```
6. Now we'll install the JEST locally (for this project only).
```terminal
npm install --save-dev jest
```
7. Running command above will add a folder `node_modules` in the project directory also `jest` in `package.json`
8. Now specify test in `package.json` by replacing 
```json
"test": "echo \"Error: no test specified\" && exit 1"
```
- with the following 
```json
"test": "jest"
```
9. Now run the command below to run the `jest` command in the folder.
```terminal
npm run test
```
10. Now create Test File for `JavaScript` and name it like that:
```
filename.test.js
```

11. Now run the test using the command below:
```terminal
npm run test
```