import { useEffect, useState } from "react";
import "./App.css";
import Intro from "../Intro/index";

function App() {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const series = ["Vikings", "Gama of Thrones"];

    setTimeout(() => {
      setSeries(series);
    }, 2000);
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">TV Series List</h1>
        <Intro message="Here you can find all of your most loved series" />
        The length of series array - {series.length}
      </header>
    </div>
  );
}

export default App;
