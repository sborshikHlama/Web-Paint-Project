import { useState } from 'react';
import './App.css';
import { CanvasContainer } from '../components/canvas/CanvasContainer';
import { Header } from '../components/Header';
import { strict } from 'assert/strict';
import { checkIsColor } from '../components/Colors';

function App() {

const [controller, setController] = useState<ControllerState>({
    tool: "✏️" as Tool,
    weight: "normal" as LineWeight,
    color: "black" as Color
}) 

function checkIsTool (str: string): str is Tool {
  return ['✏️', '🪣', '❌', '🎨'].includes(str)
}

function checkIsWeight (str: string): str is LineWeight {
  return ['thin' , 'normal' , 'thick'].includes(str)
}

const handleController: HandlerController = (updateItem, controllerKey) => {
    if (controllerKey === 'tool' && checkIsTool(updateItem)) {
      setController({ ...controller, tool: updateItem })
    }

    if (controllerKey === 'weight' && checkIsWeight(updateItem)) {
      setController({ ...controller, weight: updateItem })
    }

    if (controllerKey === 'color' && checkIsColor(updateItem)) {
      setController({ ...controller, color: updateItem })
    }
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
