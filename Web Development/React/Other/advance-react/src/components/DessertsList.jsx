function DessertsList(props) {
    console.log(props.data)
    const sortedList = props.data.map(desert => {
        return ( <li>{`${desert.name} - ${desert.calories} cal`}</li> )
    })
    return (
        <ul>
            {sortedList}
        </ul>
    )
  }
  
  export default DessertsList;
  