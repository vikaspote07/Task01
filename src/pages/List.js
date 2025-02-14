import React, { useState } from "react";
import Table from "../component/VTable";
import Layout from "../component/Layout";
import { Link } from "react-router-dom";
import { Trash2 } from "lucide-react";
import { useAuthApi } from "../hook/useAuth";
import Spinner from "../component/Spinner";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
export default function List() {
  const [loadings, setLoading] = useState(false);
  // const url = `${process.env.REACT_APP_BASE_URL}`;

  // console.log("url", url);
  const { values, loading, error } = useAuthApi("/user-list");

  // console.log("data", values?.data);

  //delete user
  const handleDeleteUser = async (id) => {

    const token = JSON.parse(localStorage.getItem("authToken"));
    setLoading(true);
    try {

          const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/user-delete`, // Remove ID from the URL
        { user_id: id }, // Send user ID in the body instead
        { headers: { Authorization: `Bearer ${token}` } }

      );

      // console.log("User deleted successfully", response.data);
      toast.success("User deleted successfully", { duration: 3000 });

    } catch (error) {
      
      toast.error("Oops! This action is not supported by the server", { duration: 3000 });
      console.error(
        "Error deleting user:",
        error?.response?.data || error.message
      );
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    {
      title: "#",
      dataIndex: "srno",
      key: "srno",
    },
    {
      title: " Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone No",
      dataIndex: "phoneno",
      key: "phoneno",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },

    {
      title: "Action",
      render: (item) => (
        <>
          <div className="flex gap-1 text-center justify-center">
            <Link to="#">
              <Trash2
                color="#ff0000"
                size={16}
                onClick={() => handleDeleteUser(item.id)}
              />
            </Link>
          </div>
        </>
      ),
      key: "action",
      width: 90,
    },
  ];
  const data = [
    {
      srno: 1,
      name: "Neha",
      email: "abc@gmail.com",
      phoneno: "9898767656",
      gender: "Female",
    },
    {
      srno: 2,
      name: "Ira",
      email: "abc@gmail.com",
      phoneno: "9898767656",
      gender: "Female",
    },
  ];

  return (
    <>
      <Layout>
        <div className="bg-white p-4 mb-2 rounded-lg  dark:border-gray-700 mt-14">
          <div>
            <h3 class="!text-defaulttextcolor dark:!text-defaulttextcolor/70 dark:text-white text-left dark:hover:text-white text-[1.125rem] font-semibold">
              List
            </h3>
          </div>
        </div>

        <Toaster />

        <div className="bg-white">
          <div className="p-4 rounded-lg dark:border-gray-700 ">
            <div className="flex justify-end mb-3 p-2">
              <Link
                to="/Stepperform"
                className="rounded-lg px-4 py-2 bg-green-700 text-green-100 hover:bg-green-800 duration-300"
              >
                Add
              </Link>
            </div>
            {/* loading spiine */}

            {(loading || loadings) && <Spinner />}

            <Table
              cols={columns}
              loading={loading}
              data={data}
              values={values?.data || []}
            />
          </div>
        </div>
      </Layout>
    </>
  );
}
