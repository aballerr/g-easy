import React, { createContext } from "react";

const { Provider: Prov, Consumer } = createContext();

export const connect = Component => () => (
  <Consumer>{value => <Component {...value} />}</Consumer>
);

export class Provider extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.initialState || {};
    this.setState = this.setState.bind(this);
  }

  render() {
    return (
      <Prov value={{ state: this.state, setState: this.setState }}>
        {this.props.children}
      </Prov>
    );
  }
}
