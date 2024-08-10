
import React from "react";

const Test4 = () => {

    const list1 = ["alice", "bob", "trudy", "jack"];
    const list2 = ["janet", "alice", "james", "jack"];
    
    const nameduplicate = list1.filter(name => list2.includes(name));
    
  return (
    <>
      <p>โจทย์ข้อที่สี่
        ชื่อซ้ำกันจากสองรายชื่อ ให้รายชื่อมาสองรายการ เป็น อาเรย์สองตัว
        หาชื่อที่ซ้ำกันออกมา
      </p>
    <p>ค่าของ Array ชุดที่ 1 : {list1.join(',')}</p>
    <p>ค่าของ Array ชุดที่ 2 : {list2.join(',')}</p>
    <p>คำตอบ : {nameduplicate.join(',')}</p>
    </>
  );
};

export default Test4;
