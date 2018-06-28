import * as React from 'react'
import styled from "styled-components"

import Attendee from "src/models/Attendee"
import AttendeeCard from 'src/components/AttendeeCard'

interface IProps {
    members: Attendee[],
    filter: string | null,
    className?: string,
    onCardClick: (attendee: Attendee) => void
}

const AttendeesPanel = ({members, filter, className, onCardClick}: IProps) => (
    <div className={`attendees ${className}`}>
            {members.filter( m => !filter || m.name.match(new RegExp(`${filter}`, 'i'))).map( attendee =>
                <AttendeeCard 
                  key={attendee.id}
                  data={attendee} 
                  onClick={onCardClick} />
            )}
    </div>
)

const StyledAttendeesPanel = styled(AttendeesPanel)`
    display: flex;
    flex-wrap: wrap;
`

export default StyledAttendeesPanel