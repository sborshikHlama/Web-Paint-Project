import { useEffect } from "react"
import { useDraw } from "./useDraw"

export const CanvasContainer= ({weight, color, tool, handleStates}: {
    weight: LineWeight, color: Color, tool: Tool, handleStates: HandleStates}) => {

    useEffect(() => {

        //  Function that clears page
        function canvasCleaner() {
            const canvas = canvasRef.current
            if(!canvas) return
    
            const ctx = canvas.getContext('2d')
            if(!ctx) return
    
            if(tool == '🗑️' ) {
                ctx.clearRect(0, 0, canvas.width, canvas.height)
            }
            handleStates('✏️')   
        }
    
        canvasCleaner()
    }, [tool])

    //Funtion that draws line 
    const drawLine = ({prevPoint, currentPoint, ctx}: Draw) => {
        const { x: currX, y: currY} = currentPoint

        // Line width configuration
        let lineWidth = 2

        switch(weight) {
            case "thin":
                lineWidth = 3
                break
            case "normal":
                lineWidth = 5
                break
            case "thick":
                lineWidth = 10
                break
        }

        ctx.lineWidth = lineWidth

        // Color configuration
        const lineColor = color

        // Drawing process
        let startPoint = prevPoint ?? currentPoint
        ctx.beginPath()
        ctx.strokeStyle = lineColor
        ctx.moveTo(startPoint.x, startPoint.y)
        ctx.lineTo(currX, currY)
        ctx.stroke()
        ctx.fillStyle = lineColor
        ctx.beginPath()
        ctx.arc(startPoint.x, startPoint.y, 2, 0, 2 * Math.PI)
        ctx.fill()
    }

    const {canvasRef, onMouseDown} = useDraw(drawLine)
    
    return (
        <div className="canvas">
        <canvas
            onMouseDown={onMouseDown}
            ref={canvasRef}
            width={750}
            height={750} 
            />
        </div>
    )
}

