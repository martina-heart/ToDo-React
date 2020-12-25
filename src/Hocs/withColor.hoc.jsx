// import React, { useState } from "react";

// const withColor = (WrappedComponent) => {
//   return function (props) {
//     const [color, setColor] = useState();
//     return <WrappedComponent color={color} {...props} />;
//   };
// };

// export default withColor;

/*import React from "react";

function withColor(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        color: "red",
      };
    }

    render() {
      return <WrappedComponent color={this.state.color} {...this.props} />;
    }
  };
}

export default withColor;
*/
