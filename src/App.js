import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
// import TasksList from "./components/TasksList";
import TaskForm from "./components/TaskForm";
import Home from "./pages/users/home";
import Products from "./pages/users/products";
import CHeader from "./components/CHeader";
import CFooter from "./components/CFooter";

function App() {
  return (
    <div className="h-screen">
      <BrowserRouter>
        <CHeader/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />

          {/* example */}
          <Route path="/create-task" element={<TaskForm />} />
          <Route path="/edit-task/:id" element={<TaskForm />} />
        </Routes>
        <CFooter/>
      </BrowserRouter>
    </div>
  );
}

export default App;
