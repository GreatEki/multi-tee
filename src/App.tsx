import { useState } from "react";
import { Input } from "src/components";

function App() {
  const [count, setCount] = useState(0);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
  }

  return (
    <div className="App">
      <form>
        <Input type="text" onChange={handleChange} />
      </form>
    </div>
  );
}

export default App;
