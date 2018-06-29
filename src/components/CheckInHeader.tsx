import * as React from "react";
import styled from "styled-components";
import MeetupEvent from "../models/MeetupEvent";


const CheckinTitle = styled.h1`
    text-align: center;
    margin-bottom: 0;
`

const CheckinDateTime = styled.div`
    text-align: center;
    font-size: 14px;
    font-style: italic;
    color: #aaa;
`

const CheckinStatsContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 15px 20% 30px;
`
const CheckinStats = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const CheckinStatsLabel = styled.span`
    text-transform: uppercase;
    color: #777;
`
const CheckinStatsValue = styled.span`
    font-size: 30px;
    font-weight: 600;
    color: #333
`

const CheckinHeaderContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

interface ICheckInHeaderProps {
    event: MeetupEvent
}

const CheckinHeader = ({event}: ICheckInHeaderProps) => (

    <CheckinHeaderContainer>
        <CheckinTitle>{event.name}</CheckinTitle>
        <CheckinDateTime>{event.date}, {event.time}</CheckinDateTime>
        <CheckinStatsContainer>
            <CheckinStats>
                <CheckinStatsLabel>Attendees</CheckinStatsLabel>
                <CheckinStatsValue>{event.attendee}</CheckinStatsValue>
            </CheckinStats>        
            <CheckinStats>
                <CheckinStatsLabel>Checked-in</CheckinStatsLabel>
                <CheckinStatsValue>{event.checkedin}</CheckinStatsValue>
            </CheckinStats>
        </CheckinStatsContainer>
    </CheckinHeaderContainer>
)

export default CheckinHeader
