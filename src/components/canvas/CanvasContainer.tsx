import React, { useEffect, useState } from "react"
import { useDraw } from "./useDraw"

interface CanvasContainerPorps {
    weight: LineWeight
    color: Color
    tool: Tool
    handleStates: HandleStates
}

export const CanvasContainer= ({weight, color, tool, handleStates}: CanvasContainerPorps) => {

    useEffect(() => {

        //  Function that clears page
        function clearCanvas() {
            const canvas = canvasRef?.current
        
            if(tool === '🗑️' ) {
                canvas
                    ?.getContext('2d')
                    ?.clearRect(0, 0, canvas.width, canvas.height)
                    handleStates('✏️')   
            }
        }

        function eraser() {
            const canvas = canvasRef?.current
            const context = canvas?.getContext('2d')

            if(tool === '🧽') {
                context!.globalCompositeOperation = 'destination-out'
            } else {
                context!.globalCompositeOperation = 'source-over'
            }
        }
    
        clearCanvas()
        eraser()
    }, [tool])

    //Funtion that draws line 
    const drawLine = ({prevPoint, currentPoint, ctx}: Draw) => {
        const { x: currX, y: currY} = currentPoint

        // Line width configuration
        let lineWidth: number = 2

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

    // function saveImage(e: React.MouseEvent<HTMLElement>) {
    //     // let link = e.currentTarget 
    //     // link?.setAttribute('download', 'canvas.png')
    //     // let image = canvasRef.current?.toDataURL('image/png') ??  ' '
    //     // link.setAttribute('href', image)
    //     setImage(canvasRef.current?.toDataURL('image/png') ??  ' ')
    // }


    const saveImage = async () => {
        const dataUrl = canvasRef.current?.toDataURL().split(',')[1];
        console.log(dataUrl)
        let data = { image: dataUrl };
        const response = await fetch('http://localhost:5000/save-image', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            body: JSON.stringify(data)
            });
            console.log(response);
    };    
    return (
        <div className="canvas">
        <canvas
            onMouseDown={onMouseDown}
            ref={canvasRef}
            width={750}
            height={750} 
            />
            <button id="save-button" onClick={saveImage}>📥</button>
            {/* <a id = 'download_image_link' href='download_link' onClick={saveImage}>Download</a> */}
        </div>
    )
}

