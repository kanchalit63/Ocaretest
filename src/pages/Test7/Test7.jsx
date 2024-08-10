import React from "react";

const Test7 = () => {
  const text =
    "This sentence has five words. Here are five more words. Five-word sentences are fine. But several together become monotonous.";

  const checkLower = text.toLowerCase().match(/\w+/g);

  const wordCount = {};


  for (let i = 0 ; i < checkLower.length; i++){
    const word = checkLower[i]
    if(wordCount[word]){
        wordCount[word] += 1
    }else{
        wordCount[word] = 1
    }
  }

  
  let mostWord = ''
  let maxCount = 0

  for (const word in wordCount){
    if(wordCount[word] > maxCount){
        maxCount = wordCount[word]
        mostWord = word
    }
  }

  return (
    <>
      <p>โจทย์ข้อที่เจ็ด คำที่ปรากฎบ่อยที่สุดในบทความ</p>
      <p>ประโยคทั้งหมด {text}</p>

      <p>
        คำที่พบบ่อยสุดคือ {mostWord} จำนวนที่พบ {maxCount} ครั้ง
      </p>
    </>
  );
};

export default Test7;
