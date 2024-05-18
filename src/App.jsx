import { useEffect, useRef, useState } from "react";

function App() {
  useEffect(() => {
    setTimeout(() => {
      console.log("Hello, world!");
    }, 2000);
    return () => {
      console.log("Goodbye, world!");
    };
  }, []);
  return <div></div>;
}

export default App;
