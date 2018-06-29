import * as React from 'react'
import { Component } from 'react'
import axios, { AxiosRequestConfig } from 'axios'

import MeetupEvent from 'src/models/MeetupEvent'

import AppContainer from 'src/components/AppContainer'
import EventCard from 'src/components/EventCard'
import EventsHeader from 'src/components/EventsHeader';
import Logo from 'src/components/Logo'
import Search from 'src/components/Search'

interface IProps {}
interface IState {
  events: MeetupEvent[],
  eventsFilter: string | null
}

class Events extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    
        this.state = {
            events: [],
            eventsFilter: null
        }
    
        this.loadEvents();
    }

    public render() {
        return(
            <AppContainer>
                <Logo />
                <EventsHeader />
                <Search onChange={this.onFilter} threshold={2} placeholder="Search events by name..." />

                {
                    this.state
                        .events
                        .filter( m => !this.state.eventsFilter || m.name.match(new RegExp(`${this.state.eventsFilter}`, 'i')))
                        .map( event =>
                            <EventCard key={event.id} event={event} />
                        )
                }
            </AppContainer>
        )
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
    
    private onFilter = (eventsFilter: string | null) => {
        this.setState({eventsFilter})
    }
    
}

export default Events