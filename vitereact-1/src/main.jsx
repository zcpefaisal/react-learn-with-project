import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function myFunction() {
    return (
        <h1>Same page function call</h1>
    )
}

const mySecondElement = (
    <a href="http://github.com" target="_blank">Click Me 2</a>
)


// const myReactElement = {   // my style and react pre-define element are not match that why it should not work
//     type: 'a',
//     property: {
//         href: 'http://github.com',
//         target: '_blank'
//     },
//     child: 'Click Me 1'
// }

const myThirdElementUseFormReact = React.createElement(
    'a', 
    {href:"github.com", target:"_blank"}, 
    'Click Me 3'
)

const myForthElementUseFormReact = React.createElement(
    'p', 
    {}, 
    'Read Me 4'
)
const myVar = "Faisal Alam"      // worked
// const myVar = 2 + 3              // worked
// const myVar = if(true) 'faisal'  // not worked
const myFifthElementUseFormReact = React.createElement(
    'p', 
    {}, 
    'Read Me 4 ',
    myVar   // evaluate expration (final outcome), its would not work of any direct logic operation
)


ReactDOM.createRoot(document.getElementById('root')).render(
    // <App />

    // myFunction()     // worked
    // mySecondElement  // worked

    // myReactElement   // not worked :: should not work because object key, structure or name not match

    // myThirdElementUseFormReact   // worked
    // myForthElementUseFormReact   // worked
    myFifthElementUseFormReact      // worked
    

)
