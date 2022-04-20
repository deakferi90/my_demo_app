import React from "react";

const updatedComponent = (OriginalComponent) => {
  class newComponent extends React.Component {
      render() {
          return (<OriginalComponent counter={0} name='Feri'/>)
      }
  }
  return newComponent;
};

export default updatedComponent;
