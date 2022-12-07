import TopNavbar from "./components/TopNavbar";
import Homepage from "./components/Homepage";
import './App.css';

function App() {
  return (
    <div className="App">
      <TopNavbar />
      <Homepage />
      <div className="content"></div>
    </div>
  );
}

export default App;
