import './App.css'
import Card from './components/Card'

function App() {

  const objData = {
    name: 'Faisal Alam',
    age: 30,
    interest: 'React js'
  }

  const arrData = [1,2,3,4,5]

  return (
    <>
      <h1 className="text-4xl font-bold underline bg-green-400 p-4 rounded-xl mb-4">
        Hello Tailwind CSS!
      </h1>

      
      <Card myTitle="Test props - 1" myObj={objData} myArr={arrData} />
      <Card myTitle="Test props - 2" myObj={objData} myArr={arrData}  customBtnText="View Details"/>

      
    </>
  )
}

export default App
