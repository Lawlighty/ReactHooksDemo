import { createContext, useReducer } from 'react';

export const ModelContext = createContext({});

export const UPDATE_COLOR = 'UPDATE_COLOR'
export const base_color = 'blue'

const model_state = {
    color : base_color
}

const reducer = (state, action)=>{
    switch(action.type){
        //修改颜色
        case UPDATE_COLOR:
            return { color:action.color}
        default:
            return {}
    }
}

export const ModelContextCom = (props)=>{
    const [modelState, dispatch] = useReducer(reducer, model_state)

    return(
        <ModelContext.Provider value={{modelState, dispatch}}>
            { props.children }
        </ModelContext.Provider>
    )
}
