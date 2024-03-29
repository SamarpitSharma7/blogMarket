import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { useContext, useState } from "react";
import Menu from "./Menu";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const [prompt, setPrompt] = useState("");
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  const path = useLocation().pathname;

  // console.log(prompt)

  const showMenu = () => {
    setMenu(!menu);
  };

  const { user } = useContext(UserContext);

  return (
    <div className="flex items-center justify-between px-6 md:px-[200px] py-4 bg-blue-900 text-white text-sm">
      <h1 className="text-lg md:text-xl font-bold">
        <Link to="/"> Writer's Realm</Link>
      </h1>
      {path === "/" && (
        <div className="flex justify-center items-center space-x-0">
          <p
            onClick={() =>
              navigate(prompt ? "?search=" + prompt : navigate("/"))
            }
            className="cursor-pointer"
          >
            <BsSearch size={20} className="mx-2" />
          </p>
          <input
            onChange={(e) => setPrompt(e.target.value)}
            className="border-gray  rounded px-3 text-black py-2 w- "
            placeholder="Search a post"
            type="text"
          />
        </div>
      )}
      <div className="hidden md:flex items-center justify-center space-x-2 md:space-x-4">
        {user ? (
          <Link to="/write">
            <button className="px-4 py-2 border-2 rounded-xl bg-black text-white border-white">
              Write
            </button>
          </Link>
        ) : (
          <h3>
            <Link to="/login">Login</Link>
          </h3>
        )}
        {user ? (
          <div onClick={showMenu}>
            <p className="cursor-pointer">
              <FaBars size={25} />
            </p>
            {menu && <Menu />}
          </div>
        ) : (
          <h3>
            <Link to="/register">Register</Link>
          </h3>
        )}
      </div>
      <div onClick={showMenu} className="md:hidden text-lg ">
        <div className="cursor-pointer relative ">
          <FaBars />
        </div>
        {menu && <Menu />}
      </div>
    </div>
  );
};

export default Navbar;
