import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const useAuthApi = (url) => {
  const [values, setValues] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const token = JSON.parse(localStorage.getItem("authToken"));

        if (!token) {
          navigate("/login");
          return;
        }

        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}${url}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response);
        setValues(response.data);
      } catch (error) {
        if (error.response?.status === 401) {
          localStorage.removeItem("authToken");
          navigate("/login");
        }
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, navigate]);

  return { values, loading, error };
};
