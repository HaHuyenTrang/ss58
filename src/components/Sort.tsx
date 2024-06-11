import axios from 'axios'
import React, { useEffect } from 'react'

export default function Sort() {
    useEffect(()=>{
        axios.get("http://localhost:8080/student?_sort=id&_order=desc")
        .then(res=>{
            console.log("giảm",res.data)
            
        })
        .catch(err=>console.log("lỗi")
        )
    })
  return (
    <div>Sort
        {/* sắp xếp theo điều kiện
            +tăng dần: asc
            +giảm dần: desc
        */}
    </div>
  )
}
