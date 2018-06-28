import * as React from 'react'
import axios, { AxiosRequestConfig } from 'axios'

import Attendee from 'src/models/Attendee'
import AttendeesPanel from 'src/components/AttendeesPanel'
import Search from 'src/components/Search'

interface IAppProps {}
interface IAppState {
  attendees: Attendee[],
  attendeeFilter: string | null
}

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {
      attendees: [],
      attendeeFilter: null
    }

    this.loadAttendees();
  }

  public render() {
    return (
      <div className="app">
        <Search onChange={this.onFilter} threshold={2} />
        <AttendeesPanel members={this.state.attendees} onCardClick={this.onCardClick} filter={this.state.attendeeFilter} />
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

  private onFilter = (attendeeFilter: string | null) => {
    this.setState({attendeeFilter})
  }

  private onCardClick = (attendee: Attendee) => {
    this.setState( (state: IAppState) => {
      const attendees = state.attendees
                             .filter( a => a.id !== attendee.id )
                             .concat( ({...attendee, checkin: !attendee.checkin}) )
                             .sort( this.compareAttendees )

      return {...state, attendees}
      }
      
    )
  }

  private compareAttendees(a: Attendee, b: Attendee): number {
    if(a.name.toLowerCase() > b.name.toLowerCase()) { return 1 }
    if(a.name.toLowerCase() < b.name.toLowerCase()) { return -1 }
    return 0
  }
}

export default App;
