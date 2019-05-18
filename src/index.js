import React from "react";

const { Provider: Prov, Consumer } = React.createContext(null);

export const connect = Component => () => (
  <Consumer>{value => <Component {...value} />}</Consumer>
);

export class Provider extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.initialState || {};
    this.setState = this.setState.bind(this);
  }

  customSetState(obj) {
    return this.setState(obj);
  }

  render() {
    return (
      <Prov value={{ state: this.state, setState: this.setState }}>
        {this.props.children}
      </Prov>
    );
  }
}
