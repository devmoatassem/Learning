import './App.css'
import { useContext } from 'react';
import FormMani from './components/FormMani';
import Switch from './components/Switch';
import ThemeContext from './context/ThemeContext';





const desserts = [
  {
    name: "Chocolate Cake",
    calories: 400,
    createdAt: "2022-09-01",
  },
  {
    name: "Ice Cream",
    calories: 200,
    createdAt: "2022-01-02",
  },
  {
    name: "Tiramisu",
    calories: 300,
    createdAt: "2021-10-03",
  },
  {
    name: "Cheesecake",
    calories: 600,
    createdAt: "2022-01-04",
  },
];


function App() {
  const {theme, setTheme} = useContext(ThemeContext)

  return (
    <div id='root'
    style={{backgroundColor :theme? "black":"white", color:theme?"white":"black"}}>
      <Switch/>
    <FormMani/>
   
    </div>
  )
}

export default App
