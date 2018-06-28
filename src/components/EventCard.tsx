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
    position: relative;
    padding: 0;
    margin-right: 10px;
    background-color: #007bff;
    border: 1px solid #007bff;
    display: inline-block;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    line-height: 1.5;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    cursor: pointer;

    &:active, &:hover {
        background-color: #0062cc;
        border-color: #005cbf;        
    }

    & a {
        padding: 0 40px;
        color: #fff
        text-decoration: none;
        text-transform: uppercase;
        font-weight: 400;
        font-size: 15px;
    }
`

const EventCardContainer = styled.div`
    flex: 1;
    display: flex;
    padding: 0 10px;
    margin: 0 5px 15px;
    justify-content: flex-start;
`

interface IEventCardProps {
    event: MeetupEvent
}

const EventCard = ({event}: IEventCardProps) => {

    return (
        <EventCardContainer>
            <EventCheckIns>
                <Link to={`/event/${event.id}`}>Check-in</Link>
            </EventCheckIns>
            <EventInfo>
                <EventName>{event.name}</EventName>
                <EventDateTime>{event.date} - {event.time}</EventDateTime>
            </EventInfo>
        </EventCardContainer>
    )
}

export default EventCard