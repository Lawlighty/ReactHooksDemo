//颜色共享对象
import { createContext, useReducer } from 'react';
export const ColorContext = createContext({})

export const UPDATE_COLOR = 'UPDATE_COLOR';
export const default_color = 'blue'
const reducer = (state, action)=>{
    switch(action.type){
        case UPDATE_COLOR:
            return action.color
        default: 
            return state
    }
}

export const Color = (props) =>{

    //修改
    const [color, dispatch] = useReducer(reducer, default_color)
    return(
        <ColorContext.Provider value={{color, dispatch}}>
            {props.children}
        </ColorContext.Provider>
    )
}