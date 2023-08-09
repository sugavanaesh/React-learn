// import { useState } from "react"
// const Todo = () => {
//     const[val,setVal] = useState("")
//     const[todo,setTodo] = useState([])
//     const[toggle,setToggle] = useState(false)
//     const[index,setIndex] = useState(-1)

//     function handleSubmit (){
//         setTodo((prevtodo)=>{
//             setVal("")
//             return [...todo,val]
//         })
//     }


//     function handleDelete(item){
//         const newTodo = todo.filter(items=>(items!==item))
//         setTodo(newTodo)
//     }


//     function handleEdit(item,ind){
//       setToggle(true)
//       setVal(item)
//       setIndex(ind)
//     }


//     function handleUpdate(){
//       todo[index] = val 
//       setTodo([...todo])
//       setVal("")
//       setToggle(false)
//     }

//   return (
//     <div>
//       <input type='textbox' name="inp" placeholder='enter task' value={val} onChange={(e)=>setVal(e.target.value)}></input>
//       {toggle?
//       (<button onClick={handleUpdate}>UPDATE</button>):
//       <button type='submit' onClick={handleSubmit}>ADD TASK</button>
//       }
//       {
//         todo.map((item,ind)=>(
//             <>
//             <p>{item} <button onClick={()=>handleEdit(item,ind)}>EDIT</button> <button onClick={()=>{handleDelete(item)}}>DEL</button></p>

//             </>
//         ))
//       }
//     </div>
//   )
// }

// export default Todo
