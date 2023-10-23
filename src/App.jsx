import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { CitiesProvider } from "./contexts/CityContexts.jsx";

import { lazy, Suspense } from "react";

import CityList from "./components/CityList.jsx";
import CountryList from "./components/CountryList.jsx";
import City from "./components/City.jsx";
import Form from "./components/Form.jsx";
import SpinnerFullPage from "./components/SpinnerFullPage.jsx";

// import Homepage from "./pages/Homepage.jsx";
// import AppLayout from "./pages/AppLayout.jsx";
// import Login from "./pages/Login.jsx";
// import Pricing from "./pages/Pricing.jsx";
// import Product from "./pages/Product.jsx";
// import PageNotFound from "./pages/PageNotFound.jsx";

const Homepage = lazy(() => import("./pages/Homepage"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const Login = lazy(() => import("./pages/Login"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Product = lazy(() => import("./pages/Product"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

function App() {
  alert(
    "Note:- This Application is still under development. please enable desktop:)"
  );
  return (
    <CitiesProvider>
      <BrowserRouter>
        <Suspense fallback={<SpinnerFullPage />}>
          <Routes>
            <Route index element={<Homepage />}></Route>
            <Route path={"pricing"} element={<Pricing />}></Route>
            <Route path={"product"} element={<Product />}></Route>
            <Route path={"login"} element={<Login />}></Route>
            <Route path={"app"} element={<AppLayout />}>
              <Route index element={<Navigate to={"cities"} replace />}></Route>
              <Route path={"cities"} element={<CityList />}></Route>
              <Route path={"cities/:id"} element={<City />}></Route>
              <Route path={"countries"} element={<CountryList />}></Route>
              <Route path={"form"} element={<Form />}></Route>
            </Route>
            <Route path={"*"} element={<PageNotFound />}></Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </CitiesProvider>
  );
}

export default App;
