import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url, withCookie) => {
  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsFetching(true);
      try {
        const response = withCookie
          ? await axios.get(url, {
              withCredentials: true,
            })
          : await axios.get(url);
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
      const response = withCookie
        ? await axios.get(newUrl ? newUrl : url, {
            withCredentials: true,
          })
        : await axios.get(newUrl ? newUrl : url);

      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsFetching(false);
    }
  };

  return { data, isFetching, reFetch };
};

export default useFetch;
