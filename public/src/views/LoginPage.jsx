import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Toastify from "toastify-js";

export default function LoginPage({ url }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const addedData = { email, password };
      console.log(addedData);
      
      const { data } = await axios.post(`${url}/login`, addedData);

      localStorage.setItem("access_token", data.access_token);

      navigate("/");
      Toastify({
        text: "Success Login",
        duration: 2000,
        newWindow: true,
        close: true,
        gravity: "bottom",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "#00B29F",
          color: "#17202A",
          boxShadow: "0 5px 10px black",
          fontWeight: "bold",
        },
      }).showToast();
    } catch (error) {
      console.log(error);

      Toastify({
        text: error.response.data.error,
        duration: 2000,
        newWindow: true,
        close: true,
        gravity: "bottom",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "#EF4C54",
          color: "#17202A",
          boxShadow: "0 5px 10px black",
          fontWeight: "bold",
        },
      }).showToast();
    }
  }

  function emailOnChange(event) {
    setEmail(event.target.value);
  }

  function passwordOnChange(event) {
    setPassword(event.target.value);
  }

  return (
    <>
      <div className="container h-screen mx-auto">
        <div className="grid grid-cols-10 h-screen place-items-center">
          <div className="col-start-2 col-span-8 sm:col-start-2 sm:col-span-8 place-items-center">
            <h2 className="text-4xl tracking-widest text-white text-opacity-70 text-center uppercase mb-14">
              <p>
                <span className="text-white text-opacity-100 text-6xl font-bold">
                  Hacktiv Legends
                </span>
              </p>
            </h2>
            <div className="grid grid-cols-10">
              <div className="col-start-2 col-span-8">
                <h2 className="text-white text-opacity-80 text-2xl text-center mb-7">
                  Login Now
                </h2>
                <div className="card px-10 py-5 sm:px-20 sm:py-10 rounded-md">
                  <form className="mt-6 mb-6 space-y-6" onSubmit={handleLogin}>
                    <div className="mb-5">
                      <label for="email-address" className="sr-only">
                        Email address
                      </label>
                      <input
                        id="email-address"
                        name="email"
                        type="email"
                        className="block w-full px-3 py-2 border rounded-sm text-purple-900 focus:outline-none focus:ring focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-lg tracking-wider"
                        placeholder="Email address"
                        onChange={emailOnChange}
                      />
                    </div>
                    <div>
                      <label for="password" className="sr-only">
                        Password
                      </label>
                      <input
                        id="password"
                        name="password"
                        type="password"
                        className="block w-full px-3 py-2 border rounded-sm text-purple-900 focus:outline-none focus:ring focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-lg tracking-wider"
                        placeholder="Password"
                        onChange={passwordOnChange}
                      />
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="w-full justify-center py-2 px-4 border border-transparent rounded-sm text-purple-900 bg-white bg-opacity-90 hover:bg-white hover:bg-opacity-80 focus:outline-none focus:ring focus:border-purple-500 focus:ring-purple-500 text-lg tracking-wider flex font-bold"
                      >
                        Log In
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
