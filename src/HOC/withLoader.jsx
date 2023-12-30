import useDataLoader from "../Hook/useDataLoader";

const withLoader = (Element, url) => {
  const withLoaderHOC = (props) => {
    const data = useDataLoader(url);

    //  以下這個條件句，就是HOC幫助你減少重複寫在每個要fetch api的component的內容
    if (!data) {
      return <span className="loading loading-bars loading-md"></span>;
    }
    //

    return <Element {...props} data={data} />;
  };
  return withLoaderHOC;
};

export default withLoader;
