import { ModelContextCom } from './ModelContext'
import Buttons from './Buttons'
import ShowTitle from './ShowTitle'

export default function ExampleFalseRedux2(){
    return(
        <div>
            <ModelContextCom>
                <ShowTitle></ShowTitle>
                <Buttons></Buttons>
            </ModelContextCom>
        </div>
        
    )
}