function addTwoNums(a,b){
    try{
        
        if (typeof(a)!="number" || typeof(b)!="number"){
            throw new ReferenceError('Values are not numbers');
        }
        else{
            console.log(a+b);
        }
    }
    catch(err){
        console.log("Error: ",err);
    }
    
}

addTwoNums(9,8);
