export const Colors = ({handleController}: {handleController: HandlerController}) => {

const colorList = ['red', 'blue', 'green', 'yellow', 'pink', 'black', 'white', 'brown', 'purple', 'gray', 'orange']
const colorGrid = colorList.map((color) => {
        return (
            <div onClick={() => handleController(color, 'color')} key={color}  className="color" style={{backgroundColor:`${color}`}}></div>
        )
    })

    return (
        <div className="color-grid">
            {colorGrid}
        </div>
    )
}