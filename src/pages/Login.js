import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [value, setValue] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // console.log("base url ", process.env.REACT_APP_BASE_URL);

  const handleInputChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  console.log("acces token", process.env.REACT_APP_TOKEN);

  console.log("auth", process.env.REACT_APP_AUTH_TOKEN);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    // Validate input
    if (!value.email || !value.password) {
      toast.error("Both email and password are required!", {
        position: "top-center",
        duration: 3000,
      });
      return;
    }

    // localStorage.removeItem("authToken");
    // localStorage.removeItem("role");

    //create lofin request

    try {
      const response = await axios.post(
        "https://reactinterviewtask.codetentaclestechnologies.in/api/api/login", // Corrected URL
        { email: value.email, password: value.password }
      );

      // console.log(response);

      if (response && response.data.token) {
        localStorage.setItem("authToken", JSON.stringify(response.data.token));
        localStorage.setItem("role", JSON.stringify(response.data.role));

        navigate("/List");
      }
    } catch (error) {
      toast.error("Login failed! Please try again.", {
        position: "top-center",
        duration: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section
        className="border-red-500 login-form min-h-screen flex items-center justify-center bg-img"
        style={{ backgroundImage: "url('/assets/image/bbblurry.svg')" }}
      >
        <Toaster />

        <div className="container mx-auto">
          <div className="flex justify-center px-6 my-12">
            <div className="w-96 flex">
              <div className="w-full bg-login p-6 rounded-lg">
                <div className="heading-1 pt-10 m-auto">
                  <img
                    src="https://i.pinimg.com/originals/0a/5f/ea/0a5feae400fc816c4ca2aca8bd67a168.jpg"
                    alt="login-img"
                    className="rounded-full m-auto p-1 border"
                    width="100px"
                    height="100px"
                  />
                  <h3 className="pt-8 font-bold text-4xl text-center tracking-wider text-white">
                    Login
                  </h3>
                </div>

                <form className="pt-8 rounded" onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <input
                      className="w-full px-3 py-3 text-sm leading-normal text-gray-50 border-0 bg-[#ffffff1a] rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={value.email}
                      onChange={handleInputChange}
                    />
                  </div>


                  <div className="mb-4 md:mr-2">
                    <input
                      className="w-full px-3 py-3 text-sm leading-normal text-gray-50 border-0 bg-[#ffffff1a] rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="password"
                      type="password"
                      name="password" 
                      placeholder="Password"
                      value={value.password}
                      onChange={handleInputChange}
                    />
                  </div>


                  <div className="mb-6 text-center">
                    <button
                      type="submit"
                      className="w-full px-4 py-3 font-bold tracking-wider text-[#000] rounded-lg bg-white focus:outline-none focus:shadow-outline"
                    >
                      {loading ? "Loading..." : "Login"}
                    </button>
                  </div>
                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
