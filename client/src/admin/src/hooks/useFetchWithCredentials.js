import { useState, useEffect } from "react";

const useFetchWithCredentials = (url) => {
  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsFetching(true);
      try {
        const response = await fetch(url, {
          method: "GET",
          credentials: "include",
          headers: {
            "Access-Control-Allow-Credentials": true,
          },
        });

        const result = await response.json();
        setData(result);
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
      const response = await fetch(newUrl ? newUrl : url, {
        method: "GET",
        credentials: "include",
        headers: {
          "Access-Control-Allow-Credentials": true,
        },
      });

      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error);
    } finally {
      setIsFetching(false);
    }
  };

  return { data, isFetching, reFetch };
};

export default useFetchWithCredentials;
