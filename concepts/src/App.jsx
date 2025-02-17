

import "./App.css";
import Count from "./components/Count";
import { Home } from "./components/Home";
import List from "./components/List";
import Prop from "./components/Prop";
import State from "./components/State";
import { ITEMS } from "./data/db";
function App() {
  return (
    <>
      <Home />
      <h1>Vite + React</h1>
      <div className="card">
        <Count />
        <br />
        <Count />
        <br />
        <Count />
        <Prop name="Ankur" />
      </div>
      <ul>
        <List items={ITEMS} />
      </ul>
      <State />
    </>
  );
}

export default App
