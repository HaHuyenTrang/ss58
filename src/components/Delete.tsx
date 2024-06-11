import axios from 'axios'
import React, { useEffect } from 'react'

export default function Delete() {
    useEffect(()=>{
        axios.delete("http://localhost:8080/user/4")
    })
  return (
    <div>Delete
        {/* dùng thư viện axios để xóa user: dùng delete */}
    </div>
  )
}
