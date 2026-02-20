import { useState } from 'react'
import './App.css'

function App() {
  let [toDolist, setToDo] = useState([]);

  let saveTodo = (event) => {

    let toDoName = event.target.toDoName.value;

    if (!toDolist.includes(toDoName)) {
      let newToDoList = [...toDolist, toDoName];
      setToDo(newToDoList);
    } else {
      alert("Task already exists");
    }

    event.preventDefault();
  }

  return (
    <>

      <div className="min-h-screen bg-slate-900  text-white ">
        <h1 className="text-4xl font-bold text-red-800 flex items-center justify-center h-24">
          My To-Do
        </h1>

        <div className=" flex items-center justify-center ">


          <div className='bg-slate-800 flex items-center justify-center '>

            <form onSubmit={saveTodo} className="w-2xl  flex items-center justify-center m-14">

              <input name='toDoName' type="text" placeholder='Enter The Task' class=" bg-slate-700 text-gray-200 rounded-lg  ring shadow-xl ring-gray-900/5 border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 placeholder:text-body" required />



              <button type='submit' className='bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded ml-2'>Save</button>

            </form>
          </div>

        </div>

        {/* list part */}

        <div className='flex items-center justify-center mt-4'>
          <div className='bg-slate-800 flex items-center justify-center w-2xl'>
            <ul className="max-w-md divide-y divide-default m-5">

              <li className="pb-3 sm:pb-4">
                {toDolist.map((todo, index) => (
                  <div key={index} className="text-lg">{index+1} {todo}</div>
                ))} </li>
            </ul>
          </div>
        </div>



      </div>

    </>
  )
}

export default App
