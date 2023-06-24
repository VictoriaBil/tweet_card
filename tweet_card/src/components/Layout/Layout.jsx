import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";

const Layout = () => {
  return (
    <div>
      <header>
        <AppBar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
