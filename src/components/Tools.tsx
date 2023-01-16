import { useState } from 'react'
import { ChromePicker } from  'react-color'

export const Tools = ({handleController, controller}:
     {handleController: HandlerController, controller: ControllerState}) => {

    const [chromePicker, setChromePicker] = useState(1)
    
    const colorBox = () => {
        if (chromePicker % 2 === 0) {
            return (
                <ChromePicker color={controller.color} onChange={(color) => {
                    handleController(color.hex, "color")
            }}/>
            )
        } return
    }

    return (
        <div className="items">
            <button onClick={() => {handleController('✏️', 'tool'); handleController('black', 'color')}}>✏️</button>
            <button onClick={() => {handleController('❌', 'tool'); handleController('white', 'color')}}>❌</button>
            <button onClick={() => {handleController('🎨', 'tool'); setChromePicker(chromePicker+1)}}>🎨</button>
            <div className='color-box'>
                {colorBox()}
            </div>
        </div>
    )
}