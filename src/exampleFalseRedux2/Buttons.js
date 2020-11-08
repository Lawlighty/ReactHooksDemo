import { useContext } from 'react'
import { base_color, ModelContext, UPDATE_COLOR } from './ModelContext'

export default function Buttons(){
    const { model_dispatch } = useContext(ModelContext)
    return(
        <div>
            <button onClick={()=>model_dispatch.dispatch({type:UPDATE_COLOR, color:'red'})}>红色</button>
            <button onClick={()=>model_dispatch.dispatch({type:UPDATE_COLOR, color:'green'})}>绿色</button>
            <button onClick={()=>model_dispatch.dispatch({type:UPDATE_COLOR, color:base_color})}>重置</button>
        </div>
    )
}
