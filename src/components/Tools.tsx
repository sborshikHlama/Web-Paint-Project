import { useState } from 'react'
import { ChromePicker } from  'react-color'

export const Tools = ({handleStates, controller}:
     {handleStates: HandleStates, controller: Controller}) => {

    const [isPickerShown, setisPickerShown] = useState(false)
    
    const renderPicker = () => isPickerShown && (
                <ChromePicker color={controller.color} onChange={(color) => {
                    handleStates(color.hex)
            }}/>
            )


    return (
        <div className="items">
            <button onClick={() => {handleStates('✏️'); handleStates('black')}}>✏️</button>
            <button onClick={() => {handleStates('❌'); handleStates('white')}}>❌</button>
            <button onClick={() => {handleStates('🎨'); setisPickerShown(!isPickerShown)}}>🎨</button>
            <div className='color-box'>
                {renderPicker()}
            </div>
        </div>
    )
}