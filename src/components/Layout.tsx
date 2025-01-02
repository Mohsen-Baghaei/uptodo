import { ReactElement } from "react";
import Header from "./elements/Header";
import Footer from "./elements/Footer";
import { Outlet } from "react-router";
import Sidebar from "./elements/Sidebar";

const Layout = (): ReactElement => {
  return (
    <main className="w-full min-h-screen bg-slate-900 relative">
      <Header />
      <Sidebar />
      <Outlet />
      {/* <Footer /> */}
    </main>
  );
};

export default Layout;
