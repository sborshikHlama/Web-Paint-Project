
import { useState } from 'react';
import './App.css';
import { CanvasContainer } from '../components/canvas/CanvasContainer';
import { Header } from '../components/Header';

function App() {

const [controller, setController] = useState({
    tool: "✏️" as Tool,
    weight: "normal" as LineWeight,
    color: "black" as string
}) 

const handleController: HandlerController = (updateItem, controllerKey) => {
    const newController: any = {...controller}
    newController[controllerKey as keyof typeof newController] = updateItem.toLocaleLowerCase()
    setController(newController)
    console.log(newController)
}

  return (
    <>
      <h1>Web Paint Project</h1>
      <Header handleController={handleController} controller={controller}/>
      <CanvasContainer controller={controller}/>
    </>
  );
}

export default App;
