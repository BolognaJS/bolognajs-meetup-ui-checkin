import * as React from 'react'
import { Component } from 'react'
import styled from 'styled-components'

import Avatar from 'src/components/Avatar'
import Name from 'src/components/Name'
import RippleEffect from 'src/components/RippleEffect'
import Attendee from '../models/Attendee'

interface IProps {
    data: Attendee,
    className?: string,
    onClick: (attendee: Attendee) => void
}

class AttendeeCard extends Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }
    
    public render() {
        const {name, photo, checkin} = this.props.data;

        return (
            <div className={`attendee ${checkin ? 'checked_in' : ''} ${this.props.className}`} onClick={this.onClick}>
                <Avatar url={photo} />
                <Name>{name}</Name>
                <RippleEffect />
            </div>
        )
    }

    private onClick = () => {
        setTimeout( () => this.props.onClick(this.props.data), 800 )        
    }
}

const StyledAttendeeCard = styled(AttendeeCard)`
    padding: 5px 5px 0;
    position: relative;
    border: 1px solid #ccc;
    display: flex;  
    flex-direction: column;
    align-items: center;
    margin: 0 10px 10px 0;
    overflow: hidden;
`

export default StyledAttendeeCard