function DessertsList(props) {
    const lowCalories = props.data.filter(desert =>{
        return desert.calories<500
    }).sort((a,b) =>{
        return a.calories - b.calories
    })
    console.log(lowCalories)
    const List = lowCalories.map(desert => {
        return ( <li>{`${desert.name} - ${desert.calories} cal`}</li> )
    })
    return (
        <ul>
            {List}
        </ul>
    )
  }
  
  export default DessertsList;
  