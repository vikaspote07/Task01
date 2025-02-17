import React, { useState } from "react";
import Layout from "../../component/Layout";
import { Link } from "react-router-dom";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import { duration } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function Addproduct() {
  const navigate = useNavigate();
  const [loading,setLoading] = useState(false)
  const [addProduct, setAddProduct] = useState({
    productName: "",
    productImg: "",
    productDescription: "",
    productPrice: "",
  });

  const handleInputChange = (e) => {
    const { name, type, value, files } = e.target;

    setAddProduct((prevState) => ({
      ...prevState,
      [name]: type === "file" ? files[0] : value,
    }));

    console.log(addProduct);
  };
  

  const onsubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const token = JSON.parse(localStorage.getItem("authToken"));

      if (!token) {
        toast.error("Authentication required. Please log in.", {
          duration: 3000,
        });
        return;
      }

      // Check if all required fields are filled
      if (
        !addProduct.productName ||
        !addProduct.productDescription ||
        !addProduct.productPrice ||
        !addProduct.productImg
      ) {
        toast.error("All fields are required!", { duration: 3000 });
        return;
      }

      // Check if productImg is a valid file
      if (!(addProduct.productImg instanceof File)) {
        toast.error("Please upload a valid image file.", { duration: 3000 });
        return;
      }

      const formData = new FormData();
      formData.append("name", addProduct.productName);
      formData.append("description", addProduct.productDescription);
      formData.append("price", addProduct.productPrice);
      formData.append("image", addProduct.productImg);

      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/add-product`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Axios doesn't use response.ok, check response.status instead
      if (response.status >= 200 && response.status < 300) {
        toast.success("Product added successfully!", { duration: 3000 });
        navigate("/product");
      } else {
        toast.error("Failed to add product. Please try again.", {
          duration: 3000,
        });
      }
    } catch (error) {
      // Handling API errors
      if (error.response) {
        toast.error(error.response.data.message || "Something went wrong!", {
          duration: 3000,
        });
      } else if (error.request) {
        toast.error("No response from server. Please check your network.", {
          duration: 3000,
        });
      } else {
        toast.error("An error occurred. Please try again.", { duration: 3000 });
      }
    }finally{
      setLoading(false);
    }
  };

  return (
    <>
      <Layout>
        <div className="bg-white p-4 mb-2 rounded-lg  dark:border-gray-700 mt-14">
          <div>
            <h3 class="!text-defaulttextcolor dark:!text-defaulttextcolor/70 dark:text-white text-left dark:hover:text-white text-[1.125rem] font-semibold">
              Add Product
            </h3>
          </div>
        </div>
        <div className="bg-white">
          <div className="p-4 rounded-lg dark:border-gray-700 ">
            <div className="">
              <div className="w-full ">
                <form action="/" method="post">
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-medium text-gray-700 text-left"
                      for="firstName"
                    >
                      Product Name
                    </label>
                    <input
                      className="w-full px-3 py-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="firstName"
                      type="text"
                      name="productName"
                      value={addProduct.productName}
                      onChange={handleInputChange}
                      placeholder="Product Name"
                    />
                  </div>
                  <Toaster />
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-medium text-gray-700 text-left"
                      for="firstName"
                    >
                      Product Image
                    </label>
                    <div className="flex items-center justify-center w-full">
                      <label
                        for="dropzone-file"
                        className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                      >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <svg
                            className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 16"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                            />
                          </svg>
                          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">
                              Click to upload
                            </span>{" "}
                            or drag and drop
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            SVG, PNG, JPG or GIF (MAX. 800x400px)
                          </p>
                        </div>
                        <input
                          id="dropzone-file"
                          type="file"
                          className="hidden"
                          name="productImg"
                          onChange={handleInputChange}
                        />
                      </label>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-medium text-gray-700 text-left"
                      for="firstName"
                    >
                      Description
                    </label>
                    <textarea
                      placeholder="Description"
                      className="w-full px-3 py-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      name="productDescription"
                      value={addProduct.productDescription}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-medium text-gray-700 text-left"
                      for="firstName"
                    >
                      Price
                    </label>
                    <input
                      className="w-full px-3 py-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="price"
                      type="text"
                      placeholder="Price"
                      name="productPrice"
                      value={addProduct.productPrice}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex justify-between">
                    <Link
                      to="/Product"
                      type="button"
                      className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    >
                      Back
                    </Link>
                    {loading?"loading...":""}
                    <button
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                      onClick={onsubmit}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
