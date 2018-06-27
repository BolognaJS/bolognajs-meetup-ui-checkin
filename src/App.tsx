import * as React from 'react';
import axios, { AxiosRequestConfig } from 'axios';

import AttendeeCard from 'src/components/AttendeeCard';

type Attendee = {
  id: number,
  name: string,
  photo: string,
  checkin: boolean
}

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
        <div className="attendees">
            {
              this.state.attendees.map( attendee =>
                <AttendeeCard key={attendee.id} name={attendee.name} avatar={attendee.photo} />
              )
            }
        </div>
      </div>
    );
  }

  private loadAttendees() {
    const config: AxiosRequestConfig = {
      headers: {'Access-Control-Allow-Origin': '*'}
    };

    axios.get('https://bolognajs-meetup.now.sh/attendee/247514260', config)
        .then((response) => {
          if(response.status === 200) {
            this.setState({
              attendees: response.data
            })
          }

          // tslint:disable-next-line:no-console
          console.log(response);
        })
    return;
  }

}

export default App;
