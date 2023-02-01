
export const Brush = ({handleStates}: {handleStates: HandleStates}) => {

    const brushList = ['normal', 'thin', 'thick']
    const brushGrid = brushList.map((item) => {
        return <option key={item}>{item}</option>
    })
    
    return (
        <div className="brush">
            <select onChange = {(event) => handleStates(event.target.value)}>
                {brushGrid}
            </select>
        </div>
    )
}