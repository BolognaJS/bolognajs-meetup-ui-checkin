import * as React from "react";
import styled from "styled-components"

import MeetupEvent from 'src/models/MeetupEvent';
import { Link } from "react-router-dom";

const EventName = styled.h2`
    margin: 0 0 5px;
    font-size: 18px;
`

const EventDateTime = styled.div`
    font-size: 14px;
    font-style: italic;
    color: #aaa;
`

const EventInfo = styled.div`
    display: flex;
    flex-direction: column;
`

const EventCheckIns = styled.button`
    border: None;
    background: none;
    padding: 0 40px;

    & a {
        text-decoration: none;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 16px;
    }
`

const EventCardContainer = styled.div`
    flex: 1;
    display: flex;
    padding: 10px;
    border: 1px solid #ccc;
    margin: 0 5px 10px;
    justify-content: space-between;
`

interface IEventCardProps {
    event: MeetupEvent
}

const EventCard = ({event}: IEventCardProps) => {

    return (
        <EventCardContainer>
            <EventInfo>
                <EventName>{event.name}</EventName>
                <EventDateTime>{event.date} - {event.time}</EventDateTime>
            </EventInfo>
            <EventCheckIns>
                <Link to={`/event/${event.id}`}>Check-ins</Link>
            </EventCheckIns>
        </EventCardContainer>
    )
}

export default EventCard