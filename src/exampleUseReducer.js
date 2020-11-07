import { useReducer } from 'react';


function ExampleUserReducer(){

    const [count, dispatch] = useReducer((state, actions)=>{
        switch(actions){
            case 'add':
                return state+1
            case 'sub':
                return state-1  
            default:
                return state
        }
    },0)
    const addOne =()=>{
        dispatch('add')
    }
    const subOne =()=>{
        dispatch('sub')
    }
    return(
        <div>
            现在的分数是{ count }

            <div>
                <button onClick={addOne}>+1</button>
                <button onClick={subOne}>-1</button>
                <button onClick={()=>dispatch('add')}>+1</button>
                <button onClick={()=>dispatch('sub')}>-1</button>
            </div>
        </div>
    )
}
export default ExampleUserReducer