import { Tabs } from "antd";

import Test1 from "./pages/Test1/test1";
import Test2 from "./pages/Test2/test2";
import Test3 from "./pages/Test3/Test3";
import Test4 from "./pages/Test4/Test4";
import Test5 from "./pages/Test5/Test5";
import Test6 from "./pages/Test6/Test6";
import Test7 from "./pages/Test7/Test7";

function App() {
  const items = [
    {
      key: "1",
      label: "โจทย์ข้อที่ 1",
      children: <Test1 />,
    },
    {
      key: "2",
      label: "โจทย์ข้อที่ 2",
      children: <Test2 />,
    },
    {
      key: "3",
      label: "โจทย์ข้อที่ 3",
      children: <Test3 />,
    },
    {
      key: "4",
      label: "โจทย์ข้อที่ 4",
      children: <Test4 />,
    },
    {
      key: "5",
      label: "โจทย์ข้อที่ 5",
      children: <Test5 />,
    },
    {
      key: "6",
      label: "โจทย์ข้อที่ 6",
      children: <Test6 />,
    },
    {
      key: "7",
      label: "โจทย์ข้อที่ 7",
      children: <Test7 />,
    },
  ];

  return (
    <>
    
      <Tabs className="flex h-[100vh] pt-32  items-center " defaultActiveKey="1" items={items}  />
    </>
  );
}

export default App;
