import './App.css'
import { AddTodo } from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <>
      <div className='p-32' >
        <AddTodo/>
        <Todos/>
      </div>
    </>
  )
}

export default App;
