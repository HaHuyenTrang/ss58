import axios from 'axios'
import React, { useEffect } from 'react'

export default function Find() {
    // useEffect(()=>{
    //     let value:string="a"
    //     axios.get(`http://localhost:8080/student?student_name_like=${value}`)
    //     .then(res=>{
    //         console.log("tìm kiếm",res);
            
    //     })
    //     .catch(err=>console.log("không tìm thấy"))
    // })
      /* các chức năng:
            +tìm kiếm user, sản phẩm:
                tìm kiếm user có chữ o
        */
    useEffect(()=>{
        let valueQuery:string="h"
        axios.get(`http://localhost:8080/student?student_name_like=^${valueQuery}`)
        .then(res=>{
            console.log("search",res);
 
        })
        .catch(error=>console.log("không tìm thấyyyyyy")
        )
    })
  return (
    <div>Find
      
    </div>
  )
}
