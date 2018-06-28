import * as React from 'react'
import axios, { AxiosRequestConfig } from 'axios'

import Attendee from 'src/models/Attendee'
import MeetupEvent from 'src/models/MeetupEvent'

import AttendeesPanel from 'src/components/AttendeesPanel'
import EventCard from 'src/components/EventCard'
import Search from 'src/components/Search'

interface IAppProps {}
interface IAppState {
  attendees: Attendee[],
  attendeesFilter: string | null
  events: MeetupEvent[],
  eventsFilter: string | null
}

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {
      attendees: [],
      attendeesFilter: null,
      events: [],
      eventsFilter: null
    }

    this.loadEvents();
    this.loadAttendees();
  }

  public render() {
    return (
      <div className="app">
        <div className="events_page">
          <Search onChange={this.onFilter} threshold={2} />

          {
            this.state.events.map( event =>
              <EventCard key={event.id} event={event} />
            )
          }

        </div>
        <div className="event_attendees_page">
          <Search onChange={this.onFilter} threshold={2} />
          <AttendeesPanel members={this.state.attendees} onCardClick={this.onCardClick} filter={this.state.attendeesFilter} />
        </div>
      </div>
    );
  }

  private loadEvents() {
    const config: AxiosRequestConfig = {
      headers: {'Access-Control-Allow-Origin': '*'}
    };

    axios.get('https://bolognajs-meetup.now.sh/events', config)
        .then((response) => {
          if(response.status === 200) {
            this.setState({
              events: response.data
            })
          }
        })
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
  }

  private onFilter = (attendeesFilter: string | null) => {
    this.setState({attendeesFilter})
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
