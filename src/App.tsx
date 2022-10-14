import { useState } from "react";
import UserDetails from "src/views/UserDetails/UserDetails";

function App() {
  const [count, setCount] = useState(0);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
  }

  return (
    <div className="App">
      <UserDetails />
    </div>
  );
}

export default App;
