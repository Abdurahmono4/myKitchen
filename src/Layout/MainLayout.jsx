import { Outlet } from "react-router-dom";
// components
import Navbar from "../components/Navbar";
import ThemeContainer from "../components/ThemeContainer";

function MainLayout() {
  return (
    <>
      <Navbar />
      <main className="mb-10">
        <ThemeContainer />
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
