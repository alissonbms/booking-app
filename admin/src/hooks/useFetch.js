import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsFetching(true);
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsFetching(false);
      }
    };

    fetchData();
  }, []);

  const reFetch = async (newUrl) => {
    setIsFetching(true);
    try {
      const response = await axios.get(newUrl ? newUrl : url);
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsFetching(false);
    }
  };

  const postData = async (url, username, email, password) => {
    setIsFetching(true);
    try {
      const response = await axios({
        method: "post",
        url: url,
        data: {
          username: username,
          email: email,
          password: password,
        },
      });
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsFetching(false);
    }
  };

  return { data, isFetching, reFetch, postData };
};

export default useFetch;
