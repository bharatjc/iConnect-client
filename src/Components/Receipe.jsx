import axios from 'axios'
import React, { useEffect } from 'react'

function Receipe() {
  useEffect(()=>{
axios.get(`https://i-connect-server.vercel.app/`).then((res)=>{
  console.log(res.data)
})
  },[])
  return (
    <div>
      
    </div>
  )
}

export default Receipe
