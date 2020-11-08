import { createContext, useReducer } from 'react';

export const ModelContext = createContext({});

export const UPDATE_COLOR = 'UPDATE_COLOR'
export const base_color = 'blue'


export const UPDATE_LOGIN_LOGIN = 'UPDATE_LOGIN_LOGIN'
export const UPDATE_LOGIN_REGISTER = 'UPDATE_LOGIN_REGISTER'


//颜色
const color_state = {
    color : base_color
}

const color_reducer = (state, action)=>{
    switch(action.type){
        //修改颜色
        case UPDATE_COLOR:
            return { 
                ...state,
                color:action.color
            }
        default:
            return state
    }
}


//login
const login_state ={
    username:'',
    islogin:false,
    det:'注册'
}
const login_reducer = (state, action)=>{
    switch(action.type){
        case UPDATE_LOGIN_LOGIN:
            return{
                ...state,
                islogin:true,
                det:'登录'
            }
        case UPDATE_LOGIN_REGISTER:
            return{
                ...state,
                islogin:false,
                det:'注册'

            }
        default:
            return state
    }
}



export const ModelContextCom = (props)=>{
    const [modelState, dispatch] = useReducer(color_reducer, color_state);
    const [loginState, login_dispatch] = useReducer(login_reducer,login_state )

    const model_state = {
        modelState: modelState,
        login_state: loginState
    }
    const model_dispatch = {
        dispatch:dispatch,
        login_dispatch : login_dispatch
    }

    return(
        <ModelContext.Provider value={{model_state, model_dispatch}}>
            { props.children }
        </ModelContext.Provider>
    )
}
