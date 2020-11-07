import { useContext } from 'react'
import { UPDATE_COLOR, ColorContext, default_color } from './colors'

function Buttons(){

    const { dispatch } = useContext(ColorContext)
    return(
        <div>
            <button onClick={()=>{dispatch({type:UPDATE_COLOR, color:'red'})}}>红色</button>
            <button onClick={()=>{dispatch({type:UPDATE_COLOR, color:'green'})}}>绿色</button>
            <button onClick={()=>{dispatch({type:UPDATE_COLOR, color:default_color})}}>重置</button>
        </div>
    )
}
export default Buttons