import * as React from 'react'
import styled from "styled-components"

import Attendee from "src/models/Attendee"
import AttendeeCard from 'src/components/AttendeeCard';

interface IProps {
    members: Attendee[],
    className?: string
}

const AttendeesPanel = ({members, className}: IProps) => (
    <div className={`attendees ${className}`}>
            {members.map( attendee =>
                <AttendeeCard 
                  key={attendee.id} 
                  name={attendee.name} 
                  avatar={attendee.photo} 
                  checkedIn={attendee.checkin} />
            )}
    </div>
)

const StyledAttendeesPanel = styled(AttendeesPanel)`
    display: flex;
    flex-wrap: wrap;
`

export default StyledAttendeesPanel