import * as React from 'react';
import axios, { AxiosRequestConfig } from 'axios';

import AttendeeCard from 'src/components/AttendeeCard';
import RoundButton, { ButtonType } from './components/RoundButton';

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
      <RoundButton onClick={this.loadAttendees} text="X" type={ButtonType.Danger} />
      <RoundButton onClick={this.loadAttendees} text="Y" type={ButtonType.Success} />
        <div className="attendees">
            {
              this.state.attendees.map( attendee =>
                <AttendeeCard 
                  key={attendee.id} 
                  name={attendee.name} 
                  avatar={attendee.photo} 
                  checkedIn={attendee.checkin} />
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

    axios.get('https://bolognajs-meetup.now.sh/attendee/251881606', config)
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
