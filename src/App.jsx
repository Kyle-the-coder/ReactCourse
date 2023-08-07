import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import MyName from "./Name.jsx";
import ListItem from "./ListItem.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="large" id="largeDiv">
        <ListItem isComplete="true">Frozen Pizza</ListItem>
      </div>
    </>
  );
}

export default App;
