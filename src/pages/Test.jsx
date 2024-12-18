import React from 'react'

function Test() {
  return (
    <button onClick={()=>{
        fetch(`http://127.0.0.1:3007/api/reguser`,{
            method:'POST',
            headers:{
             'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body:`username='yy'&password='3223232'`
            }).then(response=>{
             console.log('响应',response)
           })  
    }}> 
        按钮
    </button>
  )
}

export default Test