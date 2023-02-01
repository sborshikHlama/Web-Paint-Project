import { useEffect, useState } from 'react';
import './App.css';
import { CanvasContainer } from '../components/canvas/CanvasContainer';
import { Header } from '../components/Header';
import { checkIsTool } from '../types/TypeCheckFunctions';
import { checkIsWeight } from '../types/TypeCheckFunctions';
import { checkIsColor } from '../types/TypeCheckFunctions';


function App() {

//States for controlling App
const [tool, setTool] = useState<Tool>( "✏️")
const [weight, setWeight] = useState<LineWeight>("normal")
const [color, setColor] = useState<Color>("black")

// This object is only for tracking states and conosle.log them
const controller: Controller = {
  tool,
  weight,
  color
}

useEffect(() => console.log(controller), [controller])

//Function that controlls states
const handleStates: HandleStates = (updateItem) => {

  if(checkIsTool(updateItem)) setTool(updateItem)

  if(checkIsWeight(updateItem)) setWeight(updateItem)  

  if(checkIsColor(updateItem)) setColor(updateItem)
}

  return (
    <>
      <h1>Web Paint Project</h1>
      <Header handleStates={handleStates} color={color}/>
      <CanvasContainer weight={weight} color={color} tool={tool} handleStates={handleStates}/>
    </>
  );
}

export default App;
