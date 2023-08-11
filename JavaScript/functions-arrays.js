

var alpha=['A','B','C','D','E','F'];
listarr(alpha);

function listarr(a){
    for (var i=0 ; i<a.length;i++){
        console.log(i,a[i])
    }
}

// it works either you declare the function before or after it is invoked

function letterFinder(word,match){
    for (var i = 0; i < word.length; i++){
        if (word[i]==match){
            console.log('Found the', match, 'at', i);
        }
        else{
            console.log('---No match found at', i);
        }
    }
}

letterFinder("test","t");


//  Returning a value from function
function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    return arr;
}

var simpleArr = arrayBuilder('apple', 'pear', 'plum');
console.log(simpleArr); // ['apple','pear','plum']