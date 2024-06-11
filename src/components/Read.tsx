import {  useEffect, useState } from 'react'
import axios from 'axios'
interface User{
    id:number,
    name:string,
    email:string,
}
export default function Read() {
    const [user,setUser]=useState<User[]>([])
    useEffect(()=>{
        axios.get("http://localhost:8080/user")
        .then(response=>{console.log(response.data)
         setUser(response.data)
        })
        .catch(err=>console.log(err))
    },[])
  return (
    <div>Read
        {/* dùng thư viện axios để lấy các thông tin trong bảng users
            +khi lấy dữ liệu: dùng get
            +
        */}
        <p>danh sách</p>
        <ul>
            {user.map((item)=>{
                return <li key={item.id}>{item.name}</li>
            })}    
        </ul>
    </div>
  )
}
