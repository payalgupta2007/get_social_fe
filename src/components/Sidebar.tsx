import Profile from "../assets/profile_img.jpeg";
import { IoHome } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { LuVideotape } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="w-full flex flex-col items-center">
      <div
        className="text-3xl font-bold mt-5"
        style={{
          fontFamily: "Italianno",
          fontWeight: 800,
          fontSize: 40,
        }}
      >
        Get Social
      </div>
      <div>
        <img
          src={Profile}
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover mt-10"
        />
      </div>
      <div className="items-center mt-2 font-serif">Ritesh Deshmukh</div>
      <div className="flex mt-3">
        <div className="flex flex-col mr-5 items-center">
          <div>20</div>
          <div className="font-thin text-sm">Posts</div>
        </div>
        <div className="flex flex-col mr-5 items-center">
          <div>100</div>
          <div className="font-thin text-sm">Followers</div>
        </div>
        <div className="flex flex-col items-center">
          <div>150</div>
          <div className="font-thin text-sm">Following</div>
        </div>
      </div>
      <div
        className={`flex mt-3 hover:bg-slate-200 w-full p-4 active:bg-slate-200 ${
          pathname === "/feed" ? "bg-slate-200" : ""
        }`}
        onClick={() => navigate("/feed")}
      >
        <div className="mr-5 ml-3">
          <IoHome className="mt-1 text-lg" />
        </div>
        <div className="justify-center font-bold align-center">Feed</div>
      </div>
      <div
        className={`flex mt-3 hover:bg-slate-200 w-full p-4 active:bg-slate-200 ${
          pathname === "/explore" ? "bg-slate-200" : ""
        }`}
        onClick={() => navigate("/explore")}
      >
        <div className="mr-5 ml-3">
          <FaSearch className="mt-1 text-lg" />
        </div>
        <div className="justify-center font-bold align-center">Explore</div>
      </div>
      <div
        className={`flex mt-3 hover:bg-slate-200 w-full p-4 active:bg-slate-200 ${
          pathname === "/reels" ? "bg-slate-200" : ""
        }`}
        onClick={() => navigate("/feed")}
      >
        <div className="mr-5 ml-3">
          <LuVideotape className="mt-1 text-lg" />
        </div>
        <div className="justify-center font-bold align-center">Reels</div>
      </div>
      <div
        className={`flex mt-3 hover:bg-slate-200 w-full p-4 active:bg-slate-200 ${
          pathname === "/profile" ? "bg-slate-200" : ""
        }`}
        onClick={() => navigate("/profile")}
      >
        <div className="mr-5 ml-3">
          <FaUserAlt className="mt-1 text-lg" />
        </div>
        <div className="justify-center font-bold align-center">Profile</div>
      </div>
      <div className="flex mt-3 hover:bg-slate-200 w-full p-4 active:bg-slate-200">
        <div className="mr-5 ml-3">
          <IoSettingsOutline className="mt-1 text-lg" />
        </div>
        <div className="justify-center font-bold align-center">Settings</div>
      </div>

      <div className="flex mt-3 hover:bg-slate-200 w-full p-4 active:bg-slate-200">
        <div className="mr-5 ml-3">
          <MdLogout className="mt-1 text-lg" />
        </div>
        <div className="justify-center font-bold align-center">Logout</div>
      </div>
    </div>
  );
}
