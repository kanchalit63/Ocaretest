import React from "react";
import { useState } from "react";

const Test2 = () => {


  const [value, setValue] = useState("");

  const [result, setResult] = useState("")

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  const FizzBuzz = () => {
    if (value % 3 === 0 && value % 5 === 0) {
      setResult("Fizzbuzz")
    } else if (value % 3 === 0) {
      setResult("Fizz")
    } else if (value % 5 === 0) {
      setResult("Buzz")
    } else{
      setResult("ไม่ตรงกับเงื่อนไขทั้งหมด")
    }
  };

  return (
    <>
      <p>โจทย์ข้อสอง ฟิซบัซ (Fizz Buzz)</p>
      <p>กรอกเลข 1-100</p>
      <div className="mb-2">
        <input
          type="number"
          placeholder="1-100"
          className="border border-black"
          value={value}
          onChange={handleInputChange}
        />
      </div>
      <button className="bg-blue-300 rounded p-2" onClick={FizzBuzz}>กดเพื่อเช็คค่า Fizz Buzz</button>
      <p>คำตอบคือ {result}</p>
    </>
  );
};

export default Test2;
