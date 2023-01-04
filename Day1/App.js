// we can pass three elements to create elemeent tag, object, data
// const heading = React.createElement('h1', {}, "Namste Sagar");
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

// How to Create a multiple Elements like div->h1->h2 like this
//Let's Create
const heading1 = React.createElement("h1", { id: "h1" }, "Hello H1");
const heading2 = React.createElement("h2", { id: "h2" }, "Hello H2");

const container = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]); // we are going to use an array
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
