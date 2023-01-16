type Draw = {
    ctx: CanvasRenderingContext2D
    currentPoint: Point
    prevPoint: Point | null
}

type Point = { x: number, y: number }

type Tool = '✏️'| '🪣'| '❌'| '🎨'
type LineWeight = 'thin' | 'normal' | 'thick'
const reg = /^#((\w|\d){6})/
type Color = 'red'| 'blue'| 'green'| 'yellow'|'pink'| 'black'| 'white'| 'brown'| 'purple'| 'gray'| 'orange' | reg

type ContollerKeyProps = 'tool' | 'weight' | 'color'

type ControllerState = {
  tool: Tool
  weight: LineWeight
  color: Color
}

type HandlerController = (updateItem: Tool | LineWeight | Color, controllerKey: ContollerKeyProps) => void

type PageCleaner = (value: boolean) => void
