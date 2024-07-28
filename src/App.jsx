import Carousal from "./components/Carousal.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Carousal />
        <Footer />
      </div>
    </>
  );
}

export default App;
