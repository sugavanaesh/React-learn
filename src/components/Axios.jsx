import React from "react";
import { useState } from "react";
import axios from "axios";


const Axios = () => {

    const[req, setReqData] = useState("")
    const[res, setResData] = useState("")

    function getReq(){
        axios.get("http://127.0.0.1:5000/"+req).then(resp=>{
            setResData(resp.data)
        })
   }

   function post(){
    axios.post("http://127.0.0.1:5000/",req).then(resp=>{
        setResData(resp.data)
    })
   }

  return (
    <div>
      <input type="textbox" name="data-inp" placeholder="typehere" onChange={(e)=>{setReqData(e.target.value)}}></input>
      <button onClick={post}>CLICK!!</button>
      the response is {res}
    </div>
  )
}

export default Axios
