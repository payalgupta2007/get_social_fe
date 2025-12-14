import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="min-h-screen">
      <div className="fixed top-0 left-0 h-screen w-64 bg-white hidden md:block">
        <Sidebar />
      </div>
      <div className="md:ml-64 p-4 bg-slate-200 rounded-3xl mt-2 min-h-screen overflow-y-auto">
        <Outlet /> {/* Pages load here */}
      </div>
    </div>
  );
}
