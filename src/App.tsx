import * as React from 'react';

import Attendee from 'src/components/Attendee';

import './App.css';


class App extends React.Component {

  public render() {
    return (
      <div className="App">
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-3 col-xl-2">
            <Attendee name="pippo" avatar="https://secure.meetupstatic.com/photos/member/c/c/7/4/highres_269272340.jpeg" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
