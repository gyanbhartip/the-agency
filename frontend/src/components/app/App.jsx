import "../../styles/App.css";
import Navbar from "../navbar/Navbar";
import Home from "../home/Home";
import Footer from "../footer/Footer";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
