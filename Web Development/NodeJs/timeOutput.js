const add = () => 6 + 2;

const multiply = () => 6 * 2;   

const timeCheck = () => {
    console.time("add");
    add();
    console.timeEnd("add");

    console.time("multi");
    multiply();
    console.timeEnd("multi")
}

timeCheck();
