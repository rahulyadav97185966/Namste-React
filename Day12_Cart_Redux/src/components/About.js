import { Component } from "react";
import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
// import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent - constructor");
  }
  async componentDidMount() {
    console.log("Parent - componentDidMount");
    const data = await fetch("https://api.github.com/users/rahulyadav97185966");
  }
  render() {
    console.log("Parent - render");
    return (
      <div>
        <h1>About Us Page</h1>
        {/* <UserContext.Consumer>
          {(value) => console.log(value)}
        </UserContext.Consumer> */}
        <Profile name1={"first child"} />
        <Profile name1={"second child"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About Us Page</h1>
//       <Outlet />
//     </div>
//   );
// };
export default About;
