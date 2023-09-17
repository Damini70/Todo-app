import './App.css';
import {useState} from "react";
import {useSelector,useDispatch} from "react-redux";
import { toggleTheme } from './action';


function App() {
  const [visible,setVisible]=useState(false);
  const [status,setStatus]=useState("");


  const style=useSelector((state)=>state.theme);
const dispatch=useDispatch()

  function option(){
  setVisible(!visible);
  }
  function handleChange(e){
   setStatus(e.target.value);
   console.log(status);
  }
  return (
    <div className="m-4">
      <div class="bg-orange-50 flex font-bold p-8 justify-around">
        <h1 class="text-center text-3xl">Task Manager</h1>
 <button class="bg-cyan-500 hover:bg-cyan-600 p-2 rounded-full" onClick={dispatch(toggleTheme())}>Theme Switcher</button>
</div>
<div className={`${style}`}>
<div class="text-center m-4 p-4 justify-evenly">
<form><input type="text" class="form-input px-4 py-3 rounded-full mb-3 " placeholder='Enter your Task' required/><br/>
<input type="textarea" class="form-input px-4 py-3 rounded-full mb-3" placeholder='Enter your Description' required/><br/>
<button class="bg-cyan-500 hover:bg-cyan-600 p-3 rounded-full m-3" >Add</button></form>
<button class="bg-cyan-500 hover:bg-cyan-600 p-2 rounded-full mb-3" onClick={option}>View</button>
<div>
<div class={` ${visible ? 'hidden' : 'block flex justify-center m-2 col-start-1 m-3'}`}>
  
  <label class="text-lg" ><input type="radio" className="mr-2 text-blue-500 focus:ring-blue-300" id="all" name="status" value="All" onChange={handleChange}/>All</label><br/>
  
  <label class="text-lg"><input type="radio" className="mr-2 text-blue-500 focus:ring-blue-300" id="completed" name="status" value="Completed" onChange={handleChange}/>Completed</label><br/>
 
  <label class="text-lg"> <input  type="radio"  className="mr-2 text-blue-500 focus:ring-blue-300" id="pending" name="status" value="Pending" onChange={handleChange}/>Pending</label></div>
</div>
<div className="chat-notification">

  {status==="All"?<div class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6"><div class="text-center space-y-2 sm:text-left">
    <div class="space-y-0.5">
      <p class="text-lg text-black font-semibold">
        Task
      </p>
      <p class="text-slate-500 font-medium">
        Description
      </p>
    </div>
    <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Edit</button>
    <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Deletes</button>
  </div></div>:<></>}

  
</div>

</div>
 
</div>  
    </div>
  );
}

export default App;
