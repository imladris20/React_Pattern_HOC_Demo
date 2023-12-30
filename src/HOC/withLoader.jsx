import useDataLoader from "../Hook/useDataLoader";

const withLoader = (Element, url) => {
  const withLoaderHOC = (props) => {
    const data = useDataLoader(url);
    if (!data) {
      return <span className="loading loading-bars loading-md"></span>;
    }

    return <Element {...props} data={data} />;
  };
  return withLoaderHOC;
};

export default withLoader;
