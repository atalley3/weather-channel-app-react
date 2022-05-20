import "./App.css";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="Asheville" />
      <Footer />
    </div>
  );
}

export default App;
