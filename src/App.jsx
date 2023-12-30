function withStyles(Component) {
  return (props) => {
    const style = {
      padding: "0.2rem",
      margin: "1rem",
      backgroundColor: "lightblue",
    };
    return <Component style={style} {...props} />;
  };
}

const Button = () => {
  return <button>Click me!</button>;
};
const Text = () => <p>Hello World!</p>;

const StyledButton = withStyles(Button);
const StyledText = withStyles(Text);

function App() {
  return (
    <>
      <h1 className="my-3 cursor-pointer font-mono text-2xl text-gray-500">
        React-Pattern-HOC, Demo
      </h1>
      <StyledButton />
      <StyledText />
    </>
  );
}

export default App;
