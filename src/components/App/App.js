import "./App.css";
import Intro from "../Intro/Intro";

import Series from "../containers/series/Series";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">TV Series List</h1>
        <Intro message="Here you can find all of your most loved series" />
        <Series />
      </header>
    </div>
  );
}

export default App;
