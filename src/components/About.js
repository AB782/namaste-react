import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }
  componentDidMount() {
    // console.log("Parent Component Did Mount");
  }
  render() {
    // console.log("Parent Render");
    return (
      <div>
        <h1>About</h1>
        <h2>This is Namaste React Web Series</h2>
        <UserClass name={"First "} location={"Panchkula(class)"} />
        {/* <UserClass name={"Second "} location={"US"} /> */}
      </div>
    );
  }
}

/*-

Parent Constructor
Parent Render
    - First Child Constructor
    - First Child Render
    - Second Child Constructor
    - Second Child Render

    <DOM manipulation happens for both>

    - First Child ComponentDidMount
    - Second Child ComponentDidMount

*/

export default About;
