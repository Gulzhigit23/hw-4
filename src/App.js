import "./App.css";
import Data from "./components/Data";

import "./components/Data.css"



const items = [
  {
    title: "Pen",
    id: 1,
    color: "blue",
    date: new Date(2020, 7, 5),
  },
  {
    title: "Apple",
    id: 2,
    color: "green",
    date: new Date(2018, 7, 5),
  },
  {
    title: "table",
    id: 3,
    color: "yellow",
    date: new Date(1998, 7, 5),
  },
];

function App() {
  return (
    <div className="App">
      {items.map((el) => {
        return (
          <div key={el.id} className="data">
            <h2>{el.title} </h2>
            <p>{el.color} </p>
            <Data date={el.date} />
          </div>
        );
      })}
     
    </div>
  );
}

export default App;
