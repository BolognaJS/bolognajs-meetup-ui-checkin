import * as React from 'react'
import styled from "styled-components"

import Attendee from "src/models/Attendee"
import AttendeeCard from 'src/components/AttendeeCard'

const AttendeesPanelContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`

interface IProps {
    members: Attendee[],
    filter: string | null,
    onCardClick: (attendee: Attendee) => void
}

const AttendeesPanel = ({members, filter, onCardClick}: IProps) => (
    <AttendeesPanelContainer>
        {
            members.filter( m => !filter || m.name.match(new RegExp(`${filter}`, 'i'))).map( attendee =>
                <AttendeeCard 
                    key={attendee.id}
                    data={attendee} 
                    onClick={onCardClick} />
            )
        }
    </AttendeesPanelContainer>
)

export default AttendeesPanel