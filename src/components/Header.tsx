
import { CpuInfo } from "os"
import { Brush } from "./Brush"
import { Colors } from "./Colors"
import { Tools } from "./Tools"

export const Header = (
    {handleStates, color}: {
        handleStates: HandleStates, color: Color}
    ) => {  

    return (
        <div className="header">
            <Tools handleStates={handleStates}/>
            <Brush handleStates={handleStates}/>
            <Colors handleStates={handleStates} color={color}/>
        </div>
    )
}