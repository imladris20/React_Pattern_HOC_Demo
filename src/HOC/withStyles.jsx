const withStyles = (Component) => {
  return (props) => {
    const style = "p-2 m-4 bg-blue-300";
    return (
      <Component className={style} {...props} test="#22 F2E is the best" />
    );
  };
};

export default withStyles;
