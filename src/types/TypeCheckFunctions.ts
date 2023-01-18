
export function checkIsTool (str: string): str is Tool {
    return ['✏️', '🪣', '❌', '🎨'].includes(str)
  }
  
export function checkIsWeight (str: string): str is LineWeight {
        return ['thin' , 'normal' , 'thick'].includes(str)
  }

export function checkIsColorWord (str: string): str is ColorWord {
    return ['red', 'blue', 'green', 'yellow','pink', 'black', 'white', 'brown', 'purple', 'gray', 'orange']
        .includes(str)
} 

export function checkIsColorHex (str: string): str is ColorHex {
    const reg = /^#((\w|\d){6})/
    return reg.test(str)
}
  
export function checkIsColor (str: string): str is Color {
    return checkIsColorWord(str) || checkIsColorHex(str)
  }