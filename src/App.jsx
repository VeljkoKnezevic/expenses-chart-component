import "./App.scss";
import Logo from "../images/logo.svg";
import Header from "./components/Header";
import Graph from "./components/Graph";
import days from "../data.json";

function App() {
  const handleClick = (e) => {
    const popup = e.target.parentElement.children[0];
    const bar = e.target;

    popup.classList.toggle("graph__day__popup--active");
    bar.classList.toggle("graph__day__bar--active");
  };

  const colorIndex = () => {
    const max = Math.max.apply(
      null,
      days.map((day) => day.amount)
    );

    const findIndex = days.findIndex((day) => day.amount === max);

    return findIndex;
  };

  return (
    <main className="App">
      <Header Logo={Logo} />
      <Graph handleClick={handleClick} colorIndex={colorIndex} days={days} />
    </main>
  );
}

export default App;
