import * as React from 'react';
import axios, { AxiosRequestConfig } from 'axios';

import Attendee from 'src/models/Attendee';
import StyledAttendeesPanel from 'src/components/AttendeesPanel';

interface IAppProps {}
interface IAppState {
  attendees: Attendee[]
}

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {
      attendees: []
    }

    this.loadAttendees();
  }

  public render() {
    return (
      <div className="App">
        <StyledAttendeesPanel members={this.state.attendees} />
      </div>
    );
  }

  private loadAttendees() {
    const config: AxiosRequestConfig = {
      headers: {'Access-Control-Allow-Origin': '*'}
    };

    axios.get('https://bolognajs-meetup.now.sh/attendee/251881606', config)
        .then((response) => {
          if(response.status === 200) {
            this.setState({
              attendees: response.data
            })
          }
        })
    return;
  }

}

export default App;
