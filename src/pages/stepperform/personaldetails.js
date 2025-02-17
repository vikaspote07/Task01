import React from "react";
export default function Personaldetails({ formData, setFormData }) {
  return (
    <>
      <div className="flex   w-full p-2 ">
        <div className=" w-full">
          <h1 className="block text-left w-full text-gray-500 text-2xl font-bold mb-6">
            Personal Details
          </h1>
          <form action="/" method="post">
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-700 text-left"
                for="profile"
              >
                Profile Image
              </label>
              <div className="mt-1 flex flex-col items-start">
                <span className="inline-block w-20 h-20 rounded-full overflow-hidden bg-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1531316282956-d38457be0993?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
                    alt="profilepic"
                    className="w-100 h-100 m-auto rounded-full shadow"
                  />
                </span>
                <div className="flex  items-center justify-center bg-grey-lighter">
                  <label className="w-50 flex flex-col items-center px-4 py-2 mt-5 bg-blue-300 text-gray-700 rounded-lg shadow-lg tracking-wide  border border-blue cursor-pointer hover:bg-blue hover:text-white">
                    <span className=" text-base leading-normal">
                      Upload Image
                    </span>
                    <input
                      type="file"
                      className="hidden"
                      onChange={(e) =>
                        setFormData({ ...formData, photo: e.target.files[0] })
                      }
                    />
                  </label>
                </div>
              </div>
            </div>

            <div className=" grid gap-x-7 md:grid-cols-2">
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-medium text-gray-700 text-left"
                  for="firstName"
                >
                  Name
                </label>
                <input
                  className="w-full px-3 py-3 text-sm leading-tight text-gray-700 border border-gray-200 rounded appearance-none focus:outline-none focus:shadow-outline"
                  id="firstName"
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                  }}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-medium text-gray-700 text-left"
                  htmlFor="gender"
                >
                  Gender
                </label>
                <div className="flex space-x-7">
                  <div className="flex items-center">
                    <input
                      id="male-radio"
                      type="radio"
                      name="gender"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-200 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      value="male"
                      checked={formData.gender === "male"} 
                      onChange={(e) =>
                        setFormData({ ...formData, gender: e.target.value })
                      }
                    />
                    <label
                      htmlFor="male-radio"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Male
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="female-radio"
                      type="radio"
                      name="gender"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-200 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      value="female"
                      checked={formData.gender === "female"} 
                      onChange={(e) =>
                        setFormData({ ...formData, gender: e.target.value })
                      }
                    />
                    <label
                      htmlFor="female-radio"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Female
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="other-radio"
                      type="radio"
                      name="gender"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-200 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      value="other"
                      checked={formData.gender === "other"} 
                      onChange={(e) =>
                        setFormData({ ...formData, gender: e.target.value })
                      }
                    />
                    <label
                      htmlFor="other-radio"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Other
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className=" grid gap-x-7 md:grid-cols-2">
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-medium text-gray-700 text-left"
                  for="firstName"
                >
                  Phone Numbers
                </label>
                <input
                  className="w-full px-3 py-3 text-sm leading-tight text-gray-700 border border-gray-200 rounded appearance-none focus:outline-none focus:shadow-outline"
                  id="number"
                  type="text"
                  placeholder="Phone Number"
                  value={formData.phoneNumber}
                  onChange={(e) => {
                    setFormData({ ...formData, phoneNumber: e.target.value });
                  }}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
