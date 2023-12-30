const withStyles = (Component) => {
  return (props) => {
    //  HOC 幫助你不用在每個 component 都寫一次一樣的style
    const style = {
      padding: "16px",
      margin: "16px",
      backgroundColor: "lightblue",
      fontSize: "20px",
      borderRadius: "8px",
    };
    return <Component style={style} text="#22 F2E is the best" {...props} />;
  };
};

export default withStyles;
