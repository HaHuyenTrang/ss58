import axios from 'axios'
import React, { useEffect } from 'react'

export default function Update() {
    useEffect(()=>{
        axios.patch("http://localhost:8080/user/6",{name:"huyền trang"})
    })
  return (
    <div>Update
        {/* update: dùng put, patch
            put: cập nhật tất cả
            patch: cập nhật 1 or 2 thuộc tính
        */}
    </div>
  )
}
