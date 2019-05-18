# g-easy is a simple global state manager



To Install <br/>
`npm i --save g-easy`

At your top level, set up a provider to access your state anywhere in the tree <br/>


`import { Provider } from 'g-easy'`

```
import React, { Component } from 'react';
import { Provider } from 'g-easy';

class App extends Component {

  const initialState = {};

  render() {
    return (
      <Provider initialState={initialState}>
        <MyApp />
      </Provider>
    );
  }
}

export default App;
````


Use connect to connect your component and access your state anywhere in the tree.. <br />
`import { connect } from 'g-easy' ` <br />
`export default connect(MyApp);` <br />
<br />
 It will be accessibly as: <br />
`this.props.state` <br/>
```
import React, { Component } from 'react';
import { connect } from 'g-easy';

class MyApp extends Component {
  render() {
    return <>{JSON.stringify(this.props.state)}</>;
  }
}

export default connect(MyApp);
```

To Change state, simply do: <br /> `this.props.setState`
```

import React, { Component } from 'react';
import { connect } from 'g-easy';

class MyApp extends Component {
  handleChange = () => this.props.setState({ newState: 'my new state' });

  render() {
    return (
      <>
        <button handleChange={this.handleChange}>Change State</button>
        {JSON.stringify(this.props.state)}
      </>
    );
  }
}

export default connect(MyApp);
```