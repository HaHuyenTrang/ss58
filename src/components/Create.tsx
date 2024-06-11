import axios from 'axios'
import React, { useEffect } from 'react'

export default function Create() {
    useEffect(()=>{
        let newUser={
            name:"Trang",
            email:"trang@gmail.com"
        }
        axios.post("http://localhost:8080/user",newUser)
    },[])
  return (
    <div>Create
        {/* tiến hành thêm dữ liệu: dùng POST */}
    </div>
  )
}
