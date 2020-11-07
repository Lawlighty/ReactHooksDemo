import { useState, useEffect } from 'react'
import { BrowserRouter as Router , Route, Link } from 'react-router-dom'


function Index(){
    useEffect(()=>{
        console.log('点击进入了首页')
        return ()=>{
            console.log('离开首页') 
        }
    },[])

    return(
        <h2>这是一个首页的页面</h2>
    )
}

function List(){
    useEffect(()=>{
        console.log('点击进入了列表页')
        return ()=>{
            console.log('离开列表页') 
        }
    },[])
    return(
        <h2>这是一个列表的页面</h2>
    )
}

function Example2(){
    const [ count, setCount ] = useState(0);
    const addCount= (e,x)=>{
        setCount(count+x)
    };
    useEffect(()=>{
        console.log('当前的count',count);
        return ()=>{
            console.log('========>解绑') 
        }
    },[count])

    

    const [name, setName] = useState('lawlighty');
    const [age, setAge] = useState('18');

    return (
        <div>
        <p>你点击了 { count }次 (使用react hooks)</p>
        <button onClick={e=>addCount(e,1)}>点击</button>
        <div>
            { name }今年: { age }
        </div>

        <Router>
            <ul>
                <li>
                    <Link to='/'>首页</Link>
                </li>
                <li>
                    <Link to='/list'>列表页</Link>
                </li>
            </ul>
            <Route path="/" exact component={Index}></Route>
            <Route path="/list" exact component={List}></Route>
        </Router>
    </div>
    )
}
export default Example2