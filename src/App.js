import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Search from "./components/Search";
import { Routes, Route } from "react-router-dom";
import CardDetails from "./components/CardDetails";
import Cart from "./components/Cart";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer autoClose={3000} />
      <Routes>
        <Route path="/" element={<Search />} />
        {/* <Route path="/card-details" element={<CardDetails />} /> */}
        <Route path="/cart/:id" element={<CardDetails />} />
      </Routes>
    </>
  );
}

export default App;
