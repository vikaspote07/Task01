import React from "react";
export default function Credentaildetails({ formData, setFormData }) {
  return (
    <>
      <div className="flex   w-full p-2 ">
        <div className=" w-full">
          <h1 className="block text-left w-full text-gray-800 text-2xl font-bold mb-6">
            Credentails Details
          </h1>
          <form action="/" method="post">
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-700 text-left"
                for="firstName"
              >
                Email
              </label>
              <input
                className="w-full px-3 py-3 text-sm leading-tight text-gray-700 border border-gray-200 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="firstName"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData( {...formData ,email: e.target.value} )
                }
              />
            </div>
            <div className="grid gap-2  md:grid-cols-2">
              <div className="mb-4 ">
                <label
                  className="block mb-2 text-sm font-medium text-left text-gray-700"
                  for="password"
                >
                  Password
                </label>
                <input
                  className="w-full px-3 py-3 text-sm leading-tight text-gray-700 border border-gray-200  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-medium text-left text-gray-700 text-left"
                  for="c_password"
                >
                  Confirm Password
                </label>
                <input
                  className="w-full px-3 py-3 text-sm leading-tighttext-gray-700 border border-gray-200 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="c_password"
                  type="password"
                  placeholder="Password"
                  value={formData.password_confirmation}
                  onChange={(e) =>
                    setFormData({ ...formData, password_confirmation: e.target.value })
                  }
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
