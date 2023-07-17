import { useEffect, useState } from "react";
// Khi bắt đầu click:
// 1. Kiểm tra xem dependencies có thay đổi không ??
// 2. Chạy cleanup function
// 3. Re-render component và thực hiện thay đổi cây DOM thật
const VeryHeavyCode = () => {
  const [count, setCount] = useState(0);
  // Khi VeryHeavyCode mount, thì sẽ chạy vào callback đầu tiên
  useEffect(() => {
    console.log(count);
  }, [count]); // deps

  const handleIncreaseCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={handleIncreaseCount}>Click to +1</button>
      <h1>{count}</h1>
    </div>
  );
};

export default VeryHeavyCode;
