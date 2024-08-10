import React from 'react'
import { useState } from 'react'

const Test1 = () => {

    const value = [6, 1, -50, 200, 7, 9, -13, 20]

    const maxValue = Math.max(...value)
  return (
    
    <>
    <p>โจทย์ข้อแรก ค่ามากสุดในอาเรย์ </p>
    <div>ค่าใน Array {value.join(' , ')}</div>
    <div>ค่ามากที่สุดใน Array = {maxValue}</div>
    </>
  )
}

export default Test1