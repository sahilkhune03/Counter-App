import "./App.css";
import {useState} from "react";

function App() {
  const [count, setcount] = useState(0);
  function decrement() {
    setcount(count-1);
  }
  function increment() {
    setcount(count + 1);
  }
  function reset() {
    setcount(0);
  }
  return (
<div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10">
<div className="text-[#0398d4] w-100"> Increment && Decrement</div>
<div className="bg-white  flex justify-center gap-12 py-3 rounded-sm text-[25px]">
<div>
  <button onClick={decrement} className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl"> - </button>
</div>
<div className="font-bold text-5xl gap-12">
{count}
</div>
<div>
<button onClick={increment} className="border-l-2 text-center w-20  border-[#bfbfbf] text-5xl">  + </button>
</div>
</div>
<button onClick={reset} className=" bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg"> Reset</button>
</div>
  );
}

export default App;
