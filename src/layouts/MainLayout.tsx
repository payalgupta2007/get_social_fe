import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-4 bg-slate-200 rounded-3xl mt-2">
        <Outlet /> {/* Pages load here */}
      </div>
    </div>
  );
}
