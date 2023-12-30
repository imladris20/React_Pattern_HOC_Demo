const withStyles = (Component) => {
  return (props) => {
    return (
      <Component
        className="m-4 bg-blue-300 p-2"
        test="#22 F2E is the best"
        {...props}
      />
    );
  };
};

export default withStyles;
