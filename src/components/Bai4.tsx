import axios from 'axios'
import React, { useEffect } from 'react'

export default function Bai4() {
    useEffect(() => {
        const removeById = () => {
            axios.delete("http://localhost:8080/student/7")
                .then(() => {
                    console.log("Đã xóa!")
                    console.log("http://localhost:8080/student")
                })
                .catch(() => {
                    console.log("không tìm thấy bản ghi cần xóa")
                })
        }
        removeById()
    }, [])
  return (
    <div>Bai4</div>
  )
}
