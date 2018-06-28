import * as React from "react";
import styled from "styled-components"

import MeetupEvent from 'src/models/MeetupEvent';

const EventName = styled.div`
`

const EventDate = styled.div`
`

const EventTime = styled.div`
`

interface IViewAttendeesProps {
    id: number,
    className?: string
}

const EventViewAttendees = ({id, className}: IViewAttendeesProps) => (
    <div className={className}>
        {id}
    </div>
)

interface IProps {
    event: MeetupEvent,
    className?: string
}

const EventCard = ({className, event}: IProps) => {

    return (
        <div className={className}>
            <EventName>{event.name}</EventName>
            <EventDate>{event.date}</EventDate>
            <EventTime>{event.time}</EventTime>
            <EventViewAttendees id={event.id} />
        </div>
    )
}

export default EventCard