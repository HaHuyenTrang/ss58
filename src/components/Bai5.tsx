import axios from 'axios'
import React, { useEffect } from 'react'

export default function Bai5() {
    useEffect(()=>{
        let newStudent={
            id:10,
            student_name: "Hòa",
            email:"hoa@gmai.com" ,
            address: "Lạng Sơn",
            phone: 206477 ,
            status: "handsome" ,
            created_at: "11/6/24" ,
        }
        axios.post("http://localhost:8080/student",newStudent)
        console.log("Thêm thành công, http://localhost:8080/student/10", newStudent);
        
    })
  return (
    <div>Bai5

    </div>
  )
}
