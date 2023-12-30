const withStyles = (Component) => {
  return (props) => {
    const style = {
      padding: "8px",
      margin: "16px",
      backgroundColo: "lightblue",
    };
    return <Component style={style} test="#22 F2E is the best" {...props} />;
  };
};

export default withStyles;
