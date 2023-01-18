export function checkIsColorWord (str: string): str is ColorWord {
    return ['red', 'blue', 'green', 'yellow','pink', 'black', 'white', 'brown', 'purple', 'gray', 'orange']
        .includes(str)
} 

const reg = /^#((\w|\d){6})/

export function checkIsColorHex (str: string): str is ColorHex {
    return reg.test(str)
}

export const Colors = ({handleStates}: {handleStates: HandleStates}) => {

const colorList = ['red', 'blue', 'green', 'yellow', 'pink', 'black', 'white', 'brown', 'purple', 'gray', 'orange']
const colorGrid = colorList.map((color) => {
        return (
            <div onClick={() => handleStates(color)} key={color}  className="color" style={{backgroundColor:`${color}`}}></div>
        )
    })

    return (
        <div className="color-grid">
            {colorGrid}
        </div>
    )
}