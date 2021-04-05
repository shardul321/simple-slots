import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const arr = ["🍒", "🍋", "🍊", "🍉"];
  const [x, setX] = useState("🍒");
  const [y, setY] = useState("🍉");
  const [z, setZ] = useState("🍋");
  const [score, setScore] = useState("");
  const [win, setWin] = useState("");
  const [credit, setCredit] = useState(10);

  const handleClick = () => {
    if (credit > 0) {
      setX(arr[Math.floor(Math.random() * arr.length)]);
      setY(arr[Math.floor(Math.random() * arr.length)]);
      setZ(arr[Math.floor(Math.random() * arr.length)]);
      setCredit(credit - 1);
      setWin("");
      setScore("");
    } else {
      setWin("lose");
    }
  };
  const restart = () => {
    setCredit(10);
    setWin("");
  };
  useEffect(() => {
    if (x === y && x === z && x !== "") {
      setWin("won");
    }
  }, [handleClick]);

  useEffect(() => {
    if (x === "🍉" && y === "🍉" && z === "🍉") {
      setScore(40);
      setCredit(credit + 40);
    } else if (x === "🍒" && y === "🍒" && z === "🍒") {
      setScore(10);
      setCredit(credit + 10);
    } else if (x === "🍋" && y === "🍋" && z === "🍋") {
      setScore(20);
      setCredit(credit + 20);
    } else if (x === "🍊" && y === "🍊" && z === "🍊") {
      setScore(30);
      setCredit(credit + 30);
    }
  }, [win]);

  return (
    <div className="App">
      <h4>Credit : {credit}</h4>
      <table>
        <tbody>
          <tr>
            <td>{x}</td>
            <td>{y}</td>
            <td>{z}</td>
          </tr>
        </tbody>
      </table>
      <div>
        <button onClick={handleClick}>Start</button>
      </div>

      <h1>{win}</h1>
      <div>
        <button onClick={restart}>Restart</button>
      </div>
      <h2>Score : {score}</h2>
      <div>
        <button className="caseout">Cash Out</button>
      </div>
    </div>
  );
};

export default App;
