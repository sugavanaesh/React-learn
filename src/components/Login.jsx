import React, { useState } from 'react'

const Login = () => {

    const [val,setVal] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        const pass = e.target.pwd.value

        if(val==="ram" && pass==="1234567890"){
            console.log(val)
            console.log(pass)
        }
    }



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='textbox' name='uname' placeholder='Username' value={val} onChange={(e)=>{setVal(e.target.value)}}></input>
        <br></br>
        <input type='password' name='pwd'></input>
        <br></br>
        <button type='submit'>LOGIN</button>
      </form>
    </div>
  )
}

export default Login
