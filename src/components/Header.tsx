
import { Brush } from "./Brush"
import { Colors } from "./Colors"
import { Tools } from "./Tools"

export const Header = (
    {handleStates, controller}: {
        handleStates: HandleStates, controller: Controller}
    ) => {  

    return (
        <div className="header">
            <Tools handleStates={handleStates} controller={controller}/>
            <Brush handleStates={handleStates}/>
            <Colors handleStates={handleStates}/>
        </div>
    )
}