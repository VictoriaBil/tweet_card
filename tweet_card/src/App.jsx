import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Loader } from "./utils/loader/loader";

const Layout = lazy(() => import("./components/Layout/Layout"));
const Home = lazy(() => import("./pages/Home/Home"));
const TweetsPage = lazy(() => import("./pages/TweetsPage/TweetsPage"));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="tweets" element={<TweetsPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
