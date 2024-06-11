import axios from "axios";
import React, { useEffect, useState } from "react";
interface Student {
  id: number;
  student_name: string;
  email: string;
  address: string;
  phone: number;
  status: string;
  created_at: string;
}
export default function Bai3() {
  const [std, setStd] = useState<Student | null>(null);

  useEffect(() => {
    const getStudentById = async () => {
      try {
        const response = await axios.get("http://localhost:8080/student/1");
        console.log(response.data);
        setStd(response.data);
      } catch (err) {
        console.log("không tìm thấy bản ghi");
      }
    };
    getStudentById();
  }, []);
  return (
    <div>
      Bai3
      <ul>
        <li>ID: {std?.id}</li>
        <li>Name: {std?.student_name}</li>
        <li>Email: {std?.email}</li>
        <li>Phone: {std?.phone}</li> 
        <li>Status: {std?.status}</li>
        <li>Address {std?.address}</li>
        <li>Created: {std?.created_at}</li>
      </ul>
    </div>
  );
}
