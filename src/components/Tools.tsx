import { useState } from 'react'
import { ChromePicker } from  'react-color'

export const Tools = ({handleController, controller}:
     {handleController: HandlerController, controller: ControllerState}) => {

    const [isPickerShown, setisPickerShown] = useState(false)
    
    const renderPicker = () => isPickerShown && (
                <ChromePicker color={controller.color} onChange={(color) => {
                    handleController(color.hex, "color")
            }}/>
            )


    return (
        <div className="items">
            <button onClick={() => {handleController('✏️', 'tool'); handleController('black', 'color')}}>✏️</button>
            <button onClick={() => {handleController('❌', 'tool'); handleController('white', 'color')}}>❌</button>
            <button onClick={() => {handleController('🎨', 'tool'); setisPickerShown(!isPickerShown)}}>🎨</button>
            <div className='color-box'>
                {renderPicker()}
            </div>
        </div>
    )
}