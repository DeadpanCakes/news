import "./App.css";
import Header from "./components/Header/Header";
import Article from "./components/Article/Article";
import Sidebar from "./components/Sidebar/Sidebar";
import Recommended from "./components/Recommended/Recommended";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Article />
      <Sidebar />
      <Recommended />
      <Footer />
    </div>
  );
}

export default App;
