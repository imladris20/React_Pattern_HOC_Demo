import useDataLoader from "../Hook/useDataLoader";

const withLoader = (Element, url) => {
  return (props) => {
    const data = useDataLoader(url);

    if (!data) {
      return <span className="loading loading-bars loading-md"></span>;
    }

    return <Element {...props} data={data} />;
  };
};

export default withLoader;
