import { useContext } from 'react'
import { ModelContext } from './ModelContext'


export default function ShowTitle(){
    const { modelState } = useContext(ModelContext)
    return(
        <div>
            <div style={{color:modelState.color}}>当前的选中颜色 { modelState.color }</div>
        </div>
    )
}