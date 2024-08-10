import React from "react";
import { useState } from "react";

const Test3 = () => {

  
  const value1 = "กนก"
  const value2 = "ยายห"

  const [resultvalue1, setResualtValue1] = useState("");
  const [resultvalue2, setResualtValue2] = useState("");

  const PalindromeFucntion = (word) => {
    const reverse = word.split("").reverse().join("");
    return word === reverse;
  };

  const checkPalindromeValue1 = () => {
    const result = PalindromeFucntion(value1);
    setResualtValue1(
      result ? `${value1} เป็น Palindrome` : `${value2} ไม่เป็น palindrome`
    );
  };

  const checkPalindromeValue2 = () => {
    const result = PalindromeFucntion(value2);
    setResualtValue2(
      result ? `${value2} เป็น Palindrome` : `${value2} ไม่เป็น palindrome`
    );
  };

  return (
    <>
      <p>โจทย์ข้อสาม พาลินโดรม (Palindrome) </p>
      <div>
        <p>ค่าในตัวแปรที่ 1 : {value1}</p>
        <p>ค่าในตัวแปรที่ 2 : {value2}</p>
      </div>
      <p>คำตอบ</p>

      <p>{resultvalue1}</p>
      <p>{resultvalue2}</p>

      <div className="flex gap-5">
        <button onClick={checkPalindromeValue1}>เช็คคำตอบตัวแปร 1</button>
        <button onClick={checkPalindromeValue2}>เช็คคำตอบตัวแปร 2</button>
      </div>
    </>
  );
};

export default Test3;
