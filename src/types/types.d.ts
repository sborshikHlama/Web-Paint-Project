type Draw = {
    ctx: CanvasRenderingContext2D
    currentPoint: Point
    prevPoint: Point | null
}

type Point = { x: number, y: number }

type Tool = '✏️'| '🪣'| '❌'| '🎨'
type LineWeight = 'thin' | 'normal' | 'thick'
type ColorWord = 'red'| 'blue'| 'green'| 'yellow'|'pink'| 'black'| 'white'| 'brown'| 'purple'| 'gray'| 'orange'

type ColorHex = string

type Color = ColorWord | ColorHex

type ControllerState = {
  tool: Tool
  weight: LineWeight
  color: Color
}

type HandlerController = (updateItem: Tool | LineWeight | Color, controllerKey: keyof ControllerState) => void

type PageCleaner = (value: boolean) => void
