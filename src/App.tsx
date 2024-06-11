import React from 'react'
import Read from './components/Read'
import Create from './components/Create'
import Delete from './components/Delete'
import Update from './components/Update'
import Bai1 from './components/Bai1'
import Bai2 from './components/Bai2'
import Bai3 from './components/Bai3'
import Bai4 from './components/Bai4'
import Bai5 from './components/Bai5'
import Find from './components/Find'
import Bai6 from './components/Bai6'
import Sort from './components/Sort'

export default function App() {
  return (
    <div>App
      {/* <Read></Read> */}
      {/* <Create></Create> */}
      {/* <Delete></Delete>
      <Update></Update> */}
      {/* axios: là 1 thư viện client giúp tương tác với server (jsson-server)
            create
            read
            delete
            update */}
      <Bai1></Bai1>
      <Bai2></Bai2>
      <Bai3></Bai3>
      <Bai4></Bai4>
      <Bai5></Bai5>
      <Bai6></Bai6>
      <Find></Find>
      <Sort></Sort>
    </div>
  )
}
