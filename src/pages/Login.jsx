import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { useContext, useState } from "react";
import axios from "axios";
import { URL } from "../url";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        URL + "/api/auth/login",
        { email, password },
        { withCredentials: true }
      );
      // console.log(res.data)
      setUser(res.data);
      navigate("/");
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };
  return (
    <>
       <div className="flex items-center justify-between px-6 md:px-[200px] py-4 bg-blue-600 text-white text-sm">
        <h1 className="text-lg md:text-xl font-bold">
          <Link to="/"> Writer's Realm</Link>
        </h1>
        <h3>
          <Link to="/register">Register</Link>
        </h3>
      </div>
     
      <div className="w-full flex justify-center items-center h-[80vh] ">
        <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
          <h1 className="text-xl font-bold text-left">
            Log in to your account
          </h1>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-blue-600 rounded outline-0 shadow-md hover:shadow-lg active:shadow-lg"
            type="text"
            placeholder="Enter your email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-blue-600 rounded outline-0 shadow-md hover:shadow-lg active:shadow-lg"
            type="password"
            placeholder="Enter your password"
          />
          <button
            onClick={handleLogin}
            className="w-full px-4 py-4 text-lg font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-800 hover:text-white transition duration-150 ease-in-out "
          > 
            Log in
          </button>
          {error && (
            <h3 className="text-red-500 text-sm ">Something went wrong</h3>
          )}
          <div className="flex justify-center items-center space-x-3">
            <p>New here?</p>
            <p className="text-blue-600 hover:text-blue-700 transition duration-150 ease-in-out">
              <Link to="/register">Register</Link>
            </p>
          </div>
        </div>
        </div>
     
      <Footer />
    </>
  );
};

export default Login;
