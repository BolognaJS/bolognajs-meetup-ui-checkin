import * as React from 'react';

import './App.css';

import RoundButton, { ButtonType } from './components/RoundButton';

class App extends React.Component {
  constructor() {
    super({});

    this.onClick = this.onClick.bind(this);
  }

  public render() {
    return (
      <div className="App">

        <RoundButton text="&#x2713;" onClick={this.onClick} type={ButtonType.Success} />
        <RoundButton text="X" onClick={this.onClick} type={ButtonType.Danger} />
      </div>
    );
  }

  private onClick() {
    return;
  }

}

export default App;
