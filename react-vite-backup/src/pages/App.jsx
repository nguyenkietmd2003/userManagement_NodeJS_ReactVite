import { Outlet } from "react-router-dom";
import Header from "../components/layout/header";

function App() {
  return (
    <>
      <h1 className="bg-slate-500 text-center">Vite + Reacts</h1>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
