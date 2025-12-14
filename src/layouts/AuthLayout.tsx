import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div>
      <div className="min-h-screen">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
