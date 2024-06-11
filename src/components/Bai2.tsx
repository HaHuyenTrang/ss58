import axios from 'axios'
import React, { useEffect, useState } from 'react'
interface Student{
    id:number,
    student_name:string,
    email:string,
    address:string,
    phone:number,
    status:string,
    created_at:string,
}
export default function Bai2() {
    const[std,setStd]=useState<Student[]>([])
   
    useEffect(() => {
        const getAllStudent = async () => {
            try {
                const response = await axios.get("http://localhost:8080/student")
                console.log(response.data)
                setStd(response.data)
            } catch (err) {
                console.log(err)
            }
        }
        getAllStudent()
    }, [])
  return (
    <div>Bai2
        <ul>
            {std.map((item)=>{
                return <li key={item.id}>{item.student_name}</li>
            })}    
        </ul>
    </div>
  )
}
