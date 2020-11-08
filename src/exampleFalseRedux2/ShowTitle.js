import { useContext } from 'react'
import { ModelContext } from './ModelContext'


export default function ShowTitle(){
    const { model_state, model_dispatch } = useContext(ModelContext)
    return(
        <div style={{color:model_state.modelState.color}}>
            <div >当前的选中颜色 { model_state.modelState.color }</div>
            <div>
                当前位置: {model_state.login_state.det+'   '} 是否登录: {model_state.login_state.islogin}
                {
                    model_state.login_state.islogin?
                    (
                        <div>
                            已登录
                            <button onClick={()=>{model_dispatch.login_dispatch({type:'UPDATE_LOGIN_REGISTER'})}}>去注册</button>
                        </div>
                        
                    ):
                    (
                        <div>
                            未登录
                            <button onClick={()=>{model_dispatch.login_dispatch({type:'UPDATE_LOGIN_LOGIN'})}}>去登录</button>
                        </div>
                    )
                    

                }
            </div>
        </div>
    )
}