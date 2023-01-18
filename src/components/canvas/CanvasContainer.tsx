import { useDraw } from "./useDraw"

export const CanvasContainer= ({controller}: {controller: Controller}) => {
    const drawLine = ({prevPoint, currentPoint, ctx}: Draw) => {
        const { x: currX, y: currY} = currentPoint

        // Line configuration
        let lineWidth = 2

        switch(controller.weight) {
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
        const lineColor = controller.color

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

    const {canvasRef, onMouseDown, clear} = useDraw(drawLine)


    return (
        <div className="canvas">
            <button className="clear-button" onClick={clear}>🗑️</button>
            <canvas
            onMouseDown={onMouseDown}
            ref={canvasRef}
            width={750}
            height={750} 
            />
        </div>
    )
}

