//Class Based component
import React from "react";
class Profile extends React.Component {
  // We can also render only like class Profile extends Componet then we need to import like import {Component} from "react";
  constructor(props) {
    super(props);
    //create a state
    this.state = {
      count: 0,
    };
    console.log("child - costructor " + this.props.name1);
  }
  componentDidMount() {
    console.log("child - componentDidMount " + this.props.name1);
  }
  render() {
    console.log("child - render " + this.props.name1);
    return (
      <>
        <h1>Hello ji</h1>
        <h2>Name: {this.props.name1}</h2>
        <h3>count : {this.state.count}</h3>
        <button
          onClick={() => {
            this.setState({
              count: 1,
            });
          }}
        >
          Click Here
        </button>
      </>
    );
  }
}
export default Profile;

// Functional components
// const Profile = () => {
//   return <h1>Hello Profile page</h1>;
// };
// export default Profile;
