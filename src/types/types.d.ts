type Draw = {
    ctx: CanvasRenderingContext2D
    currentPoint: Point
    prevPoint: Point | null
}

type Point = { x: number, y: number }

type Tool = '✏️'| '🪣'| '❌'| '🎨'
type LineWeight = 'thin' | 'normal' | 'thick'

type ContollerKeyProps = 'tool' | 'weight' | 'color'

type ControllerState = {
  tool: Tool
  weight: LineWeight
  color: string
}

type HandlerController = (updateItem: Tool | LineWeight | string, controllerKey: ContollerKeyProps) => void

type PageCleaner = (value: boolean) => void
