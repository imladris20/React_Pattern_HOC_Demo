import axios from "axios";
import { useEffect, useState } from "react";

const useDataLoader = (url) => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(url);
        setData(res.data);
      } catch (error) {
        console.error("Error while fetching Data: ", error);
      }
    };

    if (url === "https://dog.ceo/api/breed/shiba/images/random/6") {
      setTimeout(fetchData, 8500);
    } else if (url === "https://digi-api.com/api/v1/digimon?name=agumon") {
      setTimeout(fetchData, 5000);
    } else {
      fetchData();
    }
  }, [url]);
  return data;
};

export default useDataLoader;
