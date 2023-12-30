import axios from "axios";
import { useEffect, useState } from "react";

const withLoader = (Element, url) => {
  return (props) => {
    const [data, setData] = useState(null);

    useEffect(() => {
      async function getData() {
        const data = await axios.get(url);
        setData(data.data);
      }

      getData();
    }, []);

    if (!data) {
      return <span className="loading loading-bars loading-md"></span>;
    }

    return <Element {...props} data={data} />;
  };
};

export default withLoader;
