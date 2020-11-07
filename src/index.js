import React from 'react';
import ReactDOM from 'react-dom';
import Example from './example'
import Example2 from './example2'
import ExampleUseContext from './exampleUseContext'
import ExampleUserReducer from './exampleUseReducer'
import ExampleFalseRedux from './exampleFalseRedux/ExampleMix'
import ExampleFalseRedux2 from './exampleFalseRedux2/exampleFalseRedux2'

ReactDOM.render(
  <React.StrictMode>
    <Example></Example>
    <Example2></Example2>
    <ExampleUseContext></ExampleUseContext>
    <ExampleUserReducer></ExampleUserReducer>
    {/* <ExampleFalseRedux></ExampleFalseRedux> */}
    <ExampleFalseRedux2></ExampleFalseRedux2>
  </React.StrictMode>,
  document.getElementById('root')
);

