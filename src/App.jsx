import Carousal from "./components/Carousal.jsx";
import Navbar from "./components/Navbar.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Carousal />
      </div>
    </>
  );
}

export default App;
