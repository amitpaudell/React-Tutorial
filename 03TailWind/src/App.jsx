import Card from "./components/Card";
import "./App.css";

function App() {
  const foodItem = ["CatFood", "Meat", "Milk"];
  return (
    <>
      <h1 className="bg-gray-800 text-zinc-200 p-4 rounded-xl mb-4">TailWind CSS</h1>
      <div className="Cards p-12 flex justify-between">
        <Card catName="Hero" foodChoice={foodItem[1]} />
        <br />
        <Card catName="Tiger" foodChoice={foodItem[2]} />
      </div>
    </>
  );
}

export default App;
