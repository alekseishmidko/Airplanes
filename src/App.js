import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import PlanePage from "./pages/Plane/PlanePage";
import CreatePage from "./pages/Create/CreatePage";
import OrderPage from "./pages/Order/Order";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path={`/plane/:id`} element={<PlanePage />} />
          <Route path="/create-plane" element={<CreatePage />} />
          <Route path="/order" element={<OrderPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
