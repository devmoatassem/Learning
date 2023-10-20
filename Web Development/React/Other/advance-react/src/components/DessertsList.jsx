import { useState } from "react"



function DessertsList(props) {
    const lowCalories = props.data.filter(desert =>{
        return desert.calories<500
    }).sort((a,b) =>{
        return a.calories - b.calories
    })
    console.log(lowCalories)
    const List = lowCalories.map(desert => {
        return ( <li>{desert.name} - {desert.calories} cal</li> )
    })

    const [flist,setFlist] = useState(List)

    const revserOrder =()=>{
        setFlist([...flist].reverse());
    }
    // Spread Syntax ...: The ... before flist is used to spread the elements of the flist array into the new array. It essentially takes each element of the flist array and adds them to the new array.

    // So, when you use [...flist], you're creating a new array that has the same elements as the flist array, and it's not just a reference to the same array. This is useful when you want to work with a copy of an array, leaving the original array unchanged. Here's an example:
    return (
        <>
        <ul>
            {flist}
        </ul>
        <button onClick={revserOrder}>Reverse Order</button>
        </>
        

    )
  }
  
  export default DessertsList;
  