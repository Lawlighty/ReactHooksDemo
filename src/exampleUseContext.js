import { useState, useEffect, createContext, useContext } from 'react'
const countContext = createContext();

//子组件
function SonCom(){
    const count = useContext(countContext);
    const addOne =()=>{
        count = count++
    }
    const subOne =()=>{
        count = count--
    }

    return (
        <div>
            <h2>从父组件获取的count: {count}</h2>
            {/* <div>
                <button onClick={addOne}>+1</button>
                <button onClick={subOne}>-1</button>
            </div> */}

        </div>

    
    )
}

//父组件
function ExampleUseContext(){
    const [ count, setCount ] = useState(0);
    const addCount= (e,x)=>{
        setCount(count+x)
    };
    useEffect(()=>{
        console.log('当前的count',count);
        return ()=>{
            // console.log('========>解绑') 
        }
    },[count])

    

    const [name, setName] = useState('lawlighty');
    const [age, setAge] = useState('18');

    return (
        <div>
            <h1>/****useContext 的父子组件传值****/</h1>
        <p>你点击了 { count }次 (使用react hooks)</p>
        <button onClick={e=>addCount(e,1)}>点击</button>
        <countContext.Provider value={count}>
            <SonCom></SonCom>
        </countContext.Provider>
    </div>
    )
}
export default ExampleUseContext