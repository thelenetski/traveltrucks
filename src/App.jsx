import { lazy, Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/Loader/Loader.jsx";
import Navigation from './components/Navigation/Navigation.jsx'

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage.jsx"));
// const CatalogItemPage = lazy(() => import("./pages/CatalogItemPage/CatalogItemPage.jsx"));

function App() {

  return (
    <>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          {/* <Route path="/catalog/:id" element={<CatalogItemPage />} /> */}
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
