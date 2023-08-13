let m=new Map()

// A map can feel very similar to an object in JS.
// However, it doesn't have inheritance. No prototypes! This makes it useful as a data storage.

m.set(1,"Moatassem")
m.set(2,"Billah")

console.log(m)

// to get a specific value we need to use the get method
console.log(m.get(2));