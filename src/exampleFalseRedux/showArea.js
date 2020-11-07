import { useContext } from 'react'
import { ColorContext} from './colors'

function ShowArea(){

    const {color} = useContext(ColorContext)
    return(
        <div>
            <h1>使用userContext 和 useReducer 模拟Redux</h1>
            <div style={{color:color}}>
                字体颜色为{ color }
            </div>

        </div>

        
    )
}   
export default ShowArea