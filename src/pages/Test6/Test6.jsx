import React, { useState } from "react";

const Test6 = () => {
  const [inputnumber, setInputNumber] = useState("");
  const [result ,setResult] = useState("")

  const numberarr = [1, 5, 13, 2, 7, 6];

  const sumarrFunction = (arr, sum) => {
    const n = arr.length;
    sum = Number(sum); 

    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        if (arr[i] + arr[j] === sum) return true;
      }
    }
    return false;
  };

  const handleInputChange = (event) => {
    setInputNumber(event.target.value);
  };

  const handleButtonClick = () => {
    const result = sumarrFunction(numberarr, inputnumber);
    setResult(result ? "คู่ที่มีผลรวมเท่ากับ " + inputnumber + " พบแล้ว" : "ไม่มีคู่ใดที่มีผลรวมเท่ากับ " + inputnumber);
  };

  return (
    <>
      <p>โจทย์ข้อที่หก ผลบวกของตัวเลขสองตัวในอาเรย์</p>
      <div>
        <p>กรอกค่าที่จะบวก</p>
        <input
          type="number"
          className="border border-black"
          placeholder="กรอกค่าที่ต้องการจะบวก"
          value={inputnumber}
          onChange={handleInputChange}
        />
        <p>คำตอบคือ : {result}</p>
      </div>
      <button className="bg-blue-300 p-2 rounded" onClick={handleButtonClick}>กดเพื่อคำนวณ</button>
    </>
  );
};

export default Test6;
