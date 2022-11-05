import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import { Routes, Route, Navigate } from "react-router-dom";
import Detail from "./components/Detail";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="about" element={<About />} />
        <Route path="detail" element={<Detail/>}/>
        <Route path="*" element={<Navigate to="/" replace/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
