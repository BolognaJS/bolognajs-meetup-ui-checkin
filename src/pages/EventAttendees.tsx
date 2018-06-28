import * as React from 'react'
import { Component } from 'react'
import { match, RouteComponentProps  } from 'react-router-dom'
import axios, { AxiosRequestConfig } from 'axios'

import Attendee from 'src/models/Attendee'

import AppContainer from 'src/components/AppContainer'
import AttendeesPanel from 'src/components/AttendeesPanel'
import Search from 'src/components/Search'

interface IRouteParameters {
    id: number
}

interface IProps extends RouteComponentProps<any> {
    match: match<IRouteParameters>
}

interface IState {
    attendees: Attendee[],
    attendeesFilter: string | null
}

class EventAttendees extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            attendees: [],
            attendeesFilter: null
        }

        this.loadAttendees(this.props.match.params.id);
    }

    public render() {
        return (
            <AppContainer>
                <Search onChange={this.onFilter} threshold={2} />
                <AttendeesPanel members={this.state.attendees} onCardClick={this.onCardClick} filter={this.state.attendeesFilter} />
            </AppContainer>
        )
    }

    private loadAttendees(eventId: number) {
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

    private onFilter = (attendeesFilter: string | null) => {
        this.setState({attendeesFilter})
    }

    private onCardClick = (attendee: Attendee) => {
        this.setState( (state: IState) => {
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

export default EventAttendees;
