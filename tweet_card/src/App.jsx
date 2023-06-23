import { Route, Routes } from "react-router-dom";
import TweetsPage from "./components/TweetsPage";
// import MainLayout from "./components/MainLayout/MainLayout";
// import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="">
          {/* <Route index element={<Home />} /> */}
          <Route path="tweets" element={<TweetsPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
