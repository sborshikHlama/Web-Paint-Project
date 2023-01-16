
import { Brush } from "./Brush"
import { Colors } from "./Colors"
import { Tools } from "./Tools"

export const Header = (
    {handleController, controller}: {
        handleController: HandlerController, controller: ControllerState}
    ) => {  

    return (
        <div className="header">
            <Tools handleController={handleController} controller={controller}/>
            <Brush handleController={handleController}/>
            <Colors handleController={handleController}/>
        </div>
    )
}