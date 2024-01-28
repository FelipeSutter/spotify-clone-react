import "./reset.css";
import "./App.css";
import "./vars.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {
  return (
    <>
      {/* <Header /> */}
      <Sidebar />
      <Main />
      <Footer />
    </>
  );
}

export default App;
