const withStyles = (Component) => {
  return (props) => {
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
