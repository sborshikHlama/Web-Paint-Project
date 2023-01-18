
export const Brush = ({handleController}: {handleController: HandlerController}) => {

    const brushList = ['normal', 'thin', 'thick']
    const brushGrid = brushList.map((item) => {
        return (
            <option key={item}>{item}</option>
        )
    })
    
    return (
        <div className="brush">
            <select onChange = {(event) => handleController(event.target.value, 'weight')}>
                {brushGrid}
            </select>
        </div>
    )
}