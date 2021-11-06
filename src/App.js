import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Routes, Navigate } from "react-router-dom";
import ListPage from "./pages/ListPage";
import DetailsPage from "./pages/DetailsPage";
import NewRecordPage from "./pages/NewRecordPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/ListPage"></Navigate>} />
        <Route path="/ListPage" element={<ListPage />} />
        <Route path="/DetailsPage" element={<DetailsPage />} />
        <Route path="/NewRecordPage" element={<NewRecordPage />} />
      </Routes>
    </div>
  );
}

export default App;
