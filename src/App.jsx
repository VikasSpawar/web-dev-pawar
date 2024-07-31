import "./App.css";
import Navbar from "./components/Navbar";
import PointerBubble from "./components/PointerBubble";
import Portfolio from "./components/Portfolio";



function App() {

  return (
    <div className="bg-light-primary dark:bg-dark-primary  transition-all">
  
      <PointerBubble/>
      <Navbar/>
      <Portfolio />
    </div>
  );
}

export default App;
