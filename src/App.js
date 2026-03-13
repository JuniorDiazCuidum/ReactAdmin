import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Orders from "./pages/orders/Orders";
import Delivery from "./pages/delivery/Delivery";
import Stats from "./pages/stats/Stats";
import Products from "./pages/products/Products";
import Notifications from "./pages/notifications/Notifications";
import SystemHealth from "./pages/systemhealth/SystemHealth";
import Logs from "./pages/logs/Logs";
import Settings from "./pages/settings/Settings";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModecontext";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="products">
              <Route index element={<Products />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
            <Route path="orders">
              <Route index element={<Orders />} />
            </Route>
            <Route path="delivery">
              <Route index element={<Delivery />} />
            </Route>
            <Route path="stats">
              <Route index element={<Stats />} />
            </Route>
            <Route path="notifications">
              <Route index element={<Notifications />} />
            </Route>
            <Route path="system-health">
              <Route index element={<SystemHealth />} />
            </Route>
            <Route path="logs">
              <Route index element={<Logs />} />
            </Route>
            <Route path="settings">
              <Route index element={<Settings />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
