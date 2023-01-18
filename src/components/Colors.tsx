function checkIsColorWord (str: string): str is ColorWord {
    return ['red', 'blue', 'green', 'yellow','pink', 'black', 'white', 'brown', 'purple', 'gray', 'orange']
        .includes(str)
} 

const reg = /^#((\w|\d){6})/

function checkIsColorHex (str: string): str is ColorHex {
    return reg.test(str)
}

export function checkIsColor (str: string): str is Color {
    return checkIsColorWord(str) || checkIsColorHex(str)
}

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