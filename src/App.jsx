import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>My balance $921.48</div>

      <div>Spending - Last 7 days</div>

      <div>mon</div>
      <div>tue</div>
      <div>wed</div>
      <div>thu</div>
      <div>fri</div>
      <div>sat</div>
      <div>sun</div>

      <div>Total this month</div>
      <div>$478.33</div>

      <div>+2.4%</div>
      <div>from last month</div>
    </div>
  );
}

export default App;
