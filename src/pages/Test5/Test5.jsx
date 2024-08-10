import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Test5 = () => {

  const [result, setResult] = useState("")

  const Fibonacci = (number) => {
    const value = [0,1]

    for (let i = 2 ; i <= number ; i++){
      value[i] = value[i - 1] + value[i - 2]
    }
    return value[number]    
  }

  useEffect(() => {
    const setFibonacci = Fibonacci(12)
    setResult(setFibonacci)
  })

  return (
    <>
    <p>โจทย์ข้อที่ห้า จำนวนฟีโบนัชชี</p>
    <p>ค่าของจำนวนฟีโบนัชชีที่ 12 คือ : {result} </p>
    
    </>
  )
}

export default Test5