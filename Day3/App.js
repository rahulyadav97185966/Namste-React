import ReactDOM from "react-dom/client";

// const heading1 = React.createElement("h1", { id: "h1", key: "h1" }, "Hello H1");
// Using JSX
const heading1 = (
  <h1 id="title" key="h1" className="Title">
    Hello World
  </h1>
);

const HeadingComponent = () => {
  return (
    <div>
      {heading1}
      <h2>Heyy this is h2</h2>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
