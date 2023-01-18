import { useState } from 'react';
import './App.css';
import { CanvasContainer } from '../components/canvas/CanvasContainer';
import { Header } from '../components/Header';
import { checkIsTool } from '../types/TypeCheckFunctions';
import { checkIsWeight } from '../types/TypeCheckFunctions';
import { checkIsColor } from '../types/TypeCheckFunctions';

function App() {

const [tool, setTool] = useState<Tool>( "✏️")
const [weight, setWeight] = useState<LineWeight>("normal")
const [color, setColor] = useState<Color>("black")

const controller: Controller = {
  tool,
  weight,
  color
}

const handleStates: HandleStates = (updateItem) => {

  if(checkIsTool(updateItem)) {
    setTool(updateItem)
  }
  if(checkIsWeight(updateItem)) {
    setWeight(updateItem)
  }
  if(checkIsColor(updateItem)) {
    setColor(updateItem)
  } 
  console.log(controller)
}

  return (
    <>
      <h1>Web Paint Project</h1>
      <Header handleStates={handleStates} controller={controller}/>
      <CanvasContainer controller={controller}/>
    </>
  );
}

export default App;
