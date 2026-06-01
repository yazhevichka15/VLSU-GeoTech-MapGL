import { Routes, Route } from "react-router-dom";

import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/VLSU-GeoTech-MapGL">
          <Route index element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
