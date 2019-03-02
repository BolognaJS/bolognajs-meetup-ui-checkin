import * as React from 'react'
import { Component } from 'react'
import { match, RouteComponentProps  } from 'react-router-dom'
import axios, { AxiosRequestConfig } from 'axios'

import Attendee from 'src/models/Attendee'

import AppContainer from 'src/components/AppContainer'
import AttendeesPanel from 'src/components/AttendeesPanel'
import CheckinHeader from 'src/components/CheckInHeader'
import Logo from 'src/components/Logo'
import MeetupEvent from 'src/models/MeetupEvent'
import Search from 'src/components/Search'

interface IRouteParameters {
    id: string
}

interface IProps extends RouteComponentProps<any> {
    match: match<IRouteParameters>
}

interface IState {
    attendees: Attendee[],
    attendeesFilter: string | null,
    event: MeetupEvent | null
}

class EventAttendees extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            attendees: [],
            attendeesFilter: null,
            event: null
        }

        this.loadEventData(this.props.match.params.id)
        this.loadAttendees(this.props.match.params.id);
    }

    public render() {
        return (
            <AppContainer>
                <Logo />
                { this.state.event && <CheckinHeader event={this.state.event}/> }
                <Search onChange={this.onFilter} threshold={2} placeholder="Search event attendees by name..." />
                <AttendeesPanel members={this.state.attendees} onCardClick={this.onCardClick} filter={this.state.attendeesFilter} />
            </AppContainer>
        )
    }

    private loadEventData(id: string) {
        const config: AxiosRequestConfig = {
          headers: {'Access-Control-Allow-Origin': '*'}
        };
    
        axios.get('https://bolognajs-meetup.now.sh/events', config)
            .then((response) => {
              if(response.status === 200) {
                const events = response.data.filter( (e: MeetupEvent) => { 
                    // tslint:disable-next-line:triple-equals
                    return e.id == id 
                })

                if(events.length > 0) {
                    this.setState({
                        event: events[0]
                    })      
                }
            }
        })
    }

    private loadAttendees(eventId: string) {
        const config: AxiosRequestConfig = {
            headers: {'Access-Control-Allow-Origin': '*'}
        };

        axios.get(`https://bolognajs-meetup.now.sh/attendee/${eventId}`, config)
            .then((response) => {
                if(response.status === 200) {
                    this.setState({
                        attendees: response.data
                    })
                }
            })
    }

    private doCheckIn(userId: number, eventId: string, checkin: boolean) {
        const config: AxiosRequestConfig = {
            headers: {'Access-Control-Allow-Origin': '*'}
        };

        const payload = {userId, eventId, checkin}

        return axios.post(`https://bolognajs-meetup.now.sh/checkin`, payload, config)
    }

    private onFilter = (attendeesFilter: string | null) => {
        this.setState({attendeesFilter})
    }

    private onCardClick = (attendee: Attendee) => {
        this.doCheckIn(attendee.id, this.props.match.params.id, !attendee.checkin)
            .then( response => {
                if(response.status === 200) {
                    this.setState( (state: IState) => {
                        const attendees = state.attendees
                                               .filter( a => a.id !== attendee.id )
                                               .concat( ({...attendee, checkin: !attendee.checkin}) )
                                               .sort( this.compareAttendees )
                        
                        const event = this.state.event ? {...this.state.event, checkedin: attendees.filter(a => a.checkin).length} : null

                        return {...state, attendees, event}
                    })            
                }
            })
    }

    private compareAttendees(a: Attendee, b: Attendee): number {
        if(a.name.toLowerCase() > b.name.toLowerCase()) { return 1 }
        if(a.name.toLowerCase() < b.name.toLowerCase()) { return -1 }
        return 0
    }
}

export default EventAttendees;
